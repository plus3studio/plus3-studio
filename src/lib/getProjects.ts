import fs from "node:fs";
import path from "node:path";
import type {
  Project,
  ProjectMedia,
  ProjectCategory,
  Campaign,
} from "@/data/projects";

// ─────────────────────────────────────────────────────────────────────────────
// AUTO-DÉCOUVERTE DES PROJETS DEPUIS public/projects/
// ─────────────────────────────────────────────────────────────────────────────
//
// Structure supportée :
//
//   public/projects/01-mon-client/
//     ├── meta.json          ← infos du projet (titre, tags, client...)
//     ├── cover.jpg          ← cover de la carte (optionnel, sinon 1ère image)
//     ├── photo1.jpg         ← médias "en vrac" → galerie principale
//     ├── 2024-09-matchday/  ← sous-dossier = campagne (groupée par date)
//     │   ├── 01.jpg
//     │   └── 02.jpg
//     └── 2025-01-rebrand/
//         └── affiche.jpg
//
// Règles :
//   • L'ordre des projets = ordre alphabétique des dossiers (préfixer 01-, 02-)
//   • cover.* → image de couverture de la carte portfolio
//   • Sous-dossiers → campagnes (triées par nom, donc par date si préfixées)
//   • Fichiers à la racine (hors cover + meta) → galerie principale
// ─────────────────────────────────────────────────────────────────────────────

const PROJECTS_DIR = path.join(process.cwd(), "public", "projects");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov"]);

function isMedia(name: string): boolean {
  const ext = path.extname(name).toLowerCase();
  return IMAGE_EXT.has(ext) || VIDEO_EXT.has(ext);
}

function fileToMedia(name: string, dirUrl: string): ProjectMedia | null {
  const ext = path.extname(name).toLowerCase();
  const src = `${dirUrl}/${encodeURIComponent(name)}`;
  if (IMAGE_EXT.has(ext)) return { type: "image", src };
  if (VIDEO_EXT.has(ext)) return { type: "video", src };
  return null;
}

function scanMediaFiles(dirPath: string, dirUrl: string): ProjectMedia[] {
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((f) => !f.startsWith(".") && !f.startsWith("_") && f !== "meta.json")
    .sort()
    .map((f) => fileToMedia(f, dirUrl))
    .filter((m): m is ProjectMedia => m !== null);
}

function prettyCampaignTitle(folder: string): string {
  // "2024-09-matchday" → "Matchday — Sept. 2024"
  const match = folder.match(/^(\d{4})-(\d{2})-(.+)$/);
  if (match) {
    const [, year, month, rest] = match;
    const months = ["Janv.", "Fév.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];
    const monthLabel = months[parseInt(month, 10) - 1] ?? month;
    const title = rest.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return `${title} — ${monthLabel} ${year}`;
  }
  // Fallback: just clean up the folder name (keep original casing)
  return folder.replace(/^\d+[-_]/, "").replace(/[-_]/g, " ");
}

function getYouTubePoster(url: string): string | undefined {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]+)/,
  );
  if (match) return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  return undefined;
}

type VideoLink = {
  url: string;
  poster?: string;
  label?: string;
};

type CampaignMeta = {
  title?: string;
  credits?: string;
  videos?: VideoLink[];
  order?: number;
};

type Meta = {
  title: string;
  tags?: ProjectCategory[];
  client?: string;
  year?: string;
  description?: string;
  credits?: string;
  decoColor?: "lime" | "gray" | "black";
  logo?: string;
  videos?: VideoLink[];
  campaignMeta?: Record<string, CampaignMeta>;
};

// Normalise un nom de dossier/clé pour une comparaison tolérante
// (accents, casse, espaces et ponctuation ignorés).
function normKey(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

export function getProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];

  const folders = fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !name.startsWith("_") && !name.startsWith("."))
    .sort();

  const projects: Project[] = [];

  for (const folder of folders) {
    const folderPath = path.join(PROJECTS_DIR, folder);
    const metaPath = path.join(folderPath, "meta.json");
    if (!fs.existsSync(metaPath)) continue;

    let meta: Meta;
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    } catch {
      continue;
    }

    const slug = folder.replace(/^\d+[-_]/, "");
    const dirUrl = `/projects/${encodeURIComponent(folder)}`;

    // Scan root-level entries
    const entries = fs.readdirSync(folderPath, { withFileTypes: true });
    let cover: ProjectMedia | undefined;
    const gallery: ProjectMedia[] = [];
    const campaigns: Campaign[] = [];

    // 1) Scan sub-folders as campaigns
    const subDirs = entries
      .filter(
        (e) =>
          e.isDirectory() &&
          !e.name.startsWith(".") &&
          !e.name.startsWith("_"),
      )
      .map((e) => e.name)
      .sort();

    for (const sub of subDirs) {
      const subPath = path.join(folderPath, sub);
      const subUrl = `${dirUrl}/${encodeURIComponent(sub)}`;
      const media = scanMediaFiles(subPath, subUrl);
      if (media.length > 0) {
        campaigns.push({
          id: sub,
          title: prettyCampaignTitle(sub),
          media,
        });
      }
    }

    // 1b) campaignMeta : override des campagnes existantes,
    //     création de campagnes "vidéo seule", puis tri par "order".
    const order = new Map<string, number>();
    if (meta.campaignMeta) {
      const byNorm = new Map(campaigns.map((c) => [normKey(c.id), c]));
      let seq = 0;
      for (const [key, cm] of Object.entries(meta.campaignMeta)) {
        const nk = normKey(key);
        let camp = byNorm.get(nk);
        if (!camp) {
          // Aucun dossier correspondant : on crée une campagne depuis campaignMeta
          // (utile pour une campagne composée uniquement de vidéos YouTube/Vimeo).
          camp = { id: key, title: cm.title ?? key, media: [] };
          campaigns.push(camp);
          byNorm.set(nk, camp);
        }
        if (cm.title) camp.title = cm.title;
        if (cm.credits) camp.credits = cm.credits;
        if (cm.videos && cm.videos.length > 0) {
          for (const v of cm.videos) {
            const poster = v.poster || getYouTubePoster(v.url);
            camp.media.push({ type: "embed", url: v.url, poster, caption: v.label });
          }
        }
        order.set(nk, cm.order ?? 100 + seq);
        seq += 1;
      }
    }
    // Retirer d'éventuelles campagnes synthétiques restées vides
    const builtCampaigns = campaigns.filter((c) => c.media.length > 0);
    // Tri : "order" explicite prioritaire, sinon ordre alpha d'origine conservé
    builtCampaigns.sort(
      (a, b) => (order.get(normKey(a.id)) ?? 50) - (order.get(normKey(b.id)) ?? 50),
    );
    campaigns.length = 0;
    campaigns.push(...builtCampaigns);

    // 2) Scan root-level files
    const rootFiles = entries
      .filter(
        (e) =>
          e.isFile() &&
          !e.name.startsWith(".") &&
          !e.name.startsWith("_") &&
          e.name !== "meta.json" &&
          isMedia(e.name),
      )
      .map((e) => e.name)
      .sort();

    for (const f of rootFiles) {
      const base = path.basename(f, path.extname(f)).toLowerCase();
      const media = fileToMedia(f, dirUrl);
      if (!media) continue;
      if (base === "cover") {
        cover = media;
      } else if (base === "logo") {
        // Skip — logo is only used on the card overlay, not in the gallery
      } else {
        gallery.push(media);
      }
    }

    // 3) Detect logo (supports svg, png, jpg, webp…)
    const LOGO_EXT = new Set([...IMAGE_EXT, ".svg"]);
    let logo: string | undefined;
    if (meta.logo) {
      logo = meta.logo;
    }
    if (!logo) {
      // Scan ALL root files (not just media) for logo.*
      const allRootFiles = entries
        .filter((e) => e.isFile())
        .map((e) => e.name);
      for (const f of allRootFiles) {
        const ext = path.extname(f).toLowerCase();
        const base = path.basename(f, ext).toLowerCase();
        if (base === "logo" && LOGO_EXT.has(ext)) {
          logo = `${dirUrl}/${encodeURIComponent(f)}`;
          break;
        }
      }
    }
    if (!logo) {
      const logoDirPath = path.join(folderPath, "Logo");
      if (fs.existsSync(logoDirPath) && fs.statSync(logoDirPath).isDirectory()) {
        const logoFiles = fs
          .readdirSync(logoDirPath)
          .filter((f) => {
            const ext = path.extname(f).toLowerCase();
            return LOGO_EXT.has(ext);
          })
          .sort();
        if (logoFiles.length > 0) {
          logo = `${dirUrl}/${encodeURIComponent("Logo")}/${encodeURIComponent(logoFiles[0])}`;
        }
      }
    }

    // 4) Add video embed links from meta.json (with auto-poster for YouTube)
    if (meta.videos && meta.videos.length > 0) {
      for (const v of meta.videos) {
        const poster = v.poster || getYouTubePoster(v.url);
        gallery.push({ type: "embed", url: v.url, poster, caption: v.label });
      }
    }

    // 5) Auto-pick cover if none explicit
    if (!cover && gallery.length > 0) {
      cover = gallery[0];
    }
    if (!cover && campaigns.length > 0 && campaigns[0].media.length > 0) {
      const firstImg = campaigns[0].media.find((m) => m.type === "image");
      cover = firstImg ?? campaigns[0].media[0];
    }

    projects.push({
      id: slug,
      title: meta.title,
      tags: meta.tags ?? [],
      decoColor: meta.decoColor ?? "lime",
      client: meta.client,
      year: meta.year,
      description: meta.description,
      credits: meta.credits,
      cover,
      logo,
      gallery,
      campaigns,
    });
  }

  return projects;
}
