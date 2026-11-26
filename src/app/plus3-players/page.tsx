import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLogoPath } from "@/lib/getLogo";

export const metadata: Metadata = {
  title: "+3 Players — L'agence pour les joueurs | +3 Studio",
  description:
    "+3 Players, la branche de +3 Studio dédiée aux joueurs et athlètes : personal branding, shooting photo, vidéo lifestyle et match, visuels match day et gestion des réseaux. Packs mensuels, de l'espoir au joueur confirmé.",
  alternates: { canonical: "/plus3-players" },
};

const PROMESSES = [
  "Développer votre notoriété dans le monde du sport",
  "Professionnaliser votre communication pour une meilleure e-réputation",
  "Créer de meilleures opportunités sportives",
  "Accroître vos revenus grâce à des contrats de sponsoring",
  "Vous aider à atteindre de nouveaux sommets",
];

const CERCLE = [
  "Investissement dans la communication",
  "Visibilité accrue",
  "Intérêt des médias & meilleure e-réputation",
  "Intérêt des clubs et des agents",
  "Meilleures opportunités sportives",
];

const JOUEURS = [
  {
    name: "Achraf Berriss",
    tag: "Futsal · CEUTI & FFF",
    desc: "Match de qualification pour l'EURO de Futsal 2026 : un aftermovie, un reel/TikTok et un reel joueur (tournage + montage).",
    stats: [
      { v: "64,2K", l: "vues cumulées" },
      { v: "3,8K", l: "interactions" },
    ],
  },
  {
    name: "Amin Benslama",
    tag: "SO Châtellerault · YouTube",
    desc: "Format VLOG destiné à YouTube (tournage + montage) : 13 épisodes de 30 à 50 minutes.",
    stats: [
      { v: "393K", l: "vues cumulées" },
      { v: "80K", l: "meilleure vidéo" },
    ],
  },
];

const OM = ["Angel Gomes", "Benjamin Pavard", "Mason Greenwood"];

const PACKS = [
  {
    name: "Espoir",
    price: "1 200 €",
    points: ["1 shooting / mois", "1 vidéo / mois", "1 visuel match day / mois"],
  },
  {
    name: "Élite",
    price: "2 500 €",
    featured: true,
    points: [
      "2 shootings / mois",
      "2 vidéos / mois",
      "2 visuels match day / mois",
      "CM & stratégie (planning éditorial, conseils)",
    ],
  },
  {
    name: "Légende",
    price: "4 000 €",
    points: [
      "Shooting pour tous les matchs",
      "Vidéo pour tous les matchs",
      "Visuel match day pour tous les matchs",
      "Option gestion complète",
    ],
  },
];

const SERVICES = [
  "Affiches",
  "Annonce transfert",
  "Gestion réseaux sociaux",
  "Événements",
  "Couverture de match",
  "Reportages",
  "Lifestyle",
  "Collaboration de marque",
  "Relations presse",
  "Direction artistique",
  "Stratégie",
  "TikTok / Reels / Shorts",
];

export default function Plus3PlayersPage() {
  const logoSrc = getLogoPath();

  return (
    <main className="relative min-h-screen bg-ink text-white">
      <Navbar logoSrc={logoSrc} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/25 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-red-600/15 blur-[110px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-28 text-center md:px-10 md:py-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/players-logo.png"
            alt="+3 Players for pros"
            className="mx-auto w-full max-w-[280px] md:max-w-sm"
          />
          <h1 className="mt-8 text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
            Chaque joueur mérite <span className="text-red-600">son image.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/60 md:text-lg">
            Personal branding, shooting photo, vidéo lifestyle et match, contenus
            réseaux, identité visuelle. +3 Players construit l'image des athlètes qui
            veulent se démarquer en dehors du terrain.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Travailler avec nous &rarr;
            </Link>
            <a
              href="#packs"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Voir les packs
            </a>
          </div>
        </div>
      </section>

      {/* L'AGENCE */}
      <section className="bg-white py-20 text-ink md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            L&rsquo;agence · 360° sports agency
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Un seul objectif : faire passer un cap à votre image.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROMESSES.map((p) => (
              <div
                key={p}
                className="rounded-2xl border border-bone-200 bg-bone-50 p-5 text-base font-medium"
              >
                {p}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base text-ink/70 md:text-lg">
            <span className="font-semibold text-ink">Pour qui ?</span> Les sportifs et
            athlètes qui veulent franchir un cap et améliorer leur image sur les
            réseaux sociaux.
          </p>
        </div>
      </section>

      {/* LE CERCLE VERTUEUX */}
      <section className="bg-bone-50 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Pourquoi investir dans la com&rsquo;
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Le cercle vertueux
          </h2>
          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
            {CERCLE.map((c, i) => (
              <div key={c} className="flex items-center gap-2 md:flex-1 md:flex-col">
                <div className="flex h-full w-full flex-col justify-center rounded-2xl border border-bone-200 bg-white p-5 text-center">
                  <span
                    className="text-xl font-bold"
                    style={{ color: `rgba(220,38,38,${0.4 + i * 0.15})` }}
                  >
                    {i + 1}
                  </span>
                  <span className="mt-2 text-sm font-medium">{c}</span>
                </div>
                {i < CERCLE.length - 1 && (
                  <span className="text-red-600 md:-rotate-90">&darr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LES JOUEURS */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Nos joueurs
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Ceux qu&rsquo;on accompagne
          </h2>

          {/* Ambassadeur — Kandet Diawara */}
          <div className="mt-10 overflow-hidden rounded-3xl border-2 border-red-600 bg-[#0a0a0a] p-7 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              Ambassadeur +3 Players
            </span>
            <h3 className="mt-5 text-3xl font-bold md:text-4xl">Kandet Diawara</h3>
            <p className="mt-2 text-white/60">ESTAC Troyes · Ligue 1</p>
            <p className="mt-4 max-w-2xl text-white/75">
              Premier joueur ambassadeur +3 Players. Une saison de contenu de niveau pro,
              shooting et vidéo sur ses matchs, pour prouver ce que l&rsquo;offre peut
              faire pour l&rsquo;image d&rsquo;un joueur. Les premiers contenus arrivent
              en décembre 2026.
            </p>
          </div>

          {/* Autres joueurs */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {JOUEURS.map((j) => (
              <div
                key={j.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-wider text-red-600">{j.tag}</p>
                <h3 className="mt-1 text-2xl font-bold">{j.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{j.desc}</p>
                <div className="mt-5 flex gap-8">
                  {j.stats.map((s) => (
                    <div key={s.l}>
                      <p className="text-2xl font-bold text-red-600">{s.v}</p>
                      <p className="mt-1 text-xs text-white/40">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Références OM */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <p className="text-xs uppercase tracking-wider text-white/40">
              On a aussi tourné et monté des reels de joueurs de l&rsquo;Olympique de
              Marseille
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {OM.map((n) => (
                <span key={n} className="text-lg font-bold">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LES PACKS */}
      <section id="packs" className="bg-white py-20 text-ink md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Prestations & packs
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Nos packs
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PACKS.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-3xl border p-7 ${
                  p.featured
                    ? "border-red-600 bg-ink text-white shadow-xl"
                    : "border-bone-200 bg-bone-50"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.2em] ${
                    p.featured ? "text-red-500" : "text-mist-500"
                  }`}
                >
                  Pack {p.name}
                </p>
                <p className="mt-3 text-2xl font-bold">Prix sur demande</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-red-600">&#10003;</span>
                      <span className={p.featured ? "text-white/85" : "text-ink/80"}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-2 rounded-2xl border border-bone-200 bg-bone-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-ink">Pack sur mesure</p>
              <p className="text-sm text-mist-500">
                Construit avec vous, sur devis.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Demander un devis &rarr;
            </Link>
          </div>

          <p className="mt-6 text-xs text-mist-500">
            Tous les packs incluent, selon les besoins :{" "}
            {SERVICES.join(" · ")}, et bien d&rsquo;autres. Les frais de déplacement ne
            sont pas inclus dans le prix des packs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Prêt à passer un cap ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
            On construit l&rsquo;image des joueurs qui veulent exister en dehors du
            terrain. Parlons de la vôtre.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Nous contacter &rarr;
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Retour à l&rsquo;accueil
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
