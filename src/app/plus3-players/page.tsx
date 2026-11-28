import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CercleVertueux from "@/components/CercleVertueux";
import LazyVideo from "@/components/LazyVideo";
import { getLogoPath } from "@/lib/getLogo";

export const metadata: Metadata = {
  title: "+3 Players — Communication & personal branding pour joueurs",
  description:
    "+3 Players, la branche de +3 Studio dédiée aux joueurs et athlètes : personal branding, shooting photo, vidéo lifestyle et match, visuels match day et gestion des réseaux. Packs mensuels, de l'espoir au joueur confirmé.",
  alternates: { canonical: "/plus3-players" },
};

const PROMESSES = [
  {
    t: "Développer votre notoriété dans le monde du sport",
    img: "/plus3-players/benef-notoriete.jpg",
    pos: "50% 25%",
  },
  {
    t: "Professionnaliser votre communication pour une meilleure e-réputation",
    img: "/plus3-players/benef-ereputation.jpg",
    pos: "50% 35%",
  },
  {
    t: "Créer de meilleures opportunités sportives",
    img: "/plus3-players/benef-sommets.jpg",
    pos: "50% 35%",
  },
  {
    t: "Accroître vos revenus grâce à des contrats de sponsoring",
    img: "/plus3-players/benef-sponsoring.jpg",
    pos: "50% 40%",
  },
  {
    t: "Vous aider à atteindre de nouveaux sommets",
    img: "/plus3-players/benef-opportunites.jpg",
    pos: "50% 25%",
  },
  {
    t: "Faire de chaque match un moment de contenu fort",
    img: "/illustrations/om-ballon.jpg",
    pos: "50% 35%",
  },
];

const JOUEURS = [
  {
    name: "Achraf Berriss",
    tag: "Vlog · YouTube",
    desc: "Format VLOG destiné à YouTube (tournage + montage) : 13 épisodes de 30 à 50 minutes.",
    img: "/plus3-players/reels/achraf.jpg",
    kind: "youtube" as const,
    vid: "O9OjlJu48-w",
    stats: [
      { v: "393K", l: "vues cumulées" },
      { v: "80K", l: "meilleure vidéo" },
    ],
  },
  {
    name: "Amin Benslama",
    tag: "Futsal · Équipe de France",
    desc: "Match de qualification pour l'EURO de Futsal 2026 : un aftermovie, un reel/TikTok et un reel joueur (tournage + montage).",
    img: "/plus3-players/reels/amin.jpg",
    kind: "instagram" as const,
    vid: "https://www.instagram.com/reel/DF-8e1ysR2i/",
    stats: [
      { v: "64,2K", l: "vues cumulées" },
      { v: "3,8K", l: "interactions" },
    ],
  },
];

const OM_REELS = [
  { name: "Angel Gomes", img: "/plus3-players/reels/gomes.jpg", pos: "43% 50%", vid: "CYiuvPHRZHc" },
  { name: "Benjamin Pavard", img: "/plus3-players/reels/pavard.jpg", pos: "33% 50%", vid: "tMCmyKcxCeU" },
  { name: "Mason Greenwood", img: "/plus3-players/reels/greenwood.jpg", pos: "60% 50%", vid: "5kxUYk3ZByw" },
];

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
        <Image
          src="/illustrations/players-header.jpg"
          alt="+3 Studio au bord du terrain"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 35%" }}
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/85 to-[#0a0a0a]"
        />
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
            Chaque joueur mérite
            <span className="block text-red-600">son image.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/60 md:text-lg">
            La branche de +3 Studio dédiée aux joueurs. On construit votre image comme un
            club construit la sienne : contenu de match, lifestyle, direction artistique
            et réseaux. Pour exister autant en dehors du terrain que dessus.
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
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PROMESSES.map((p) => (
              <div
                key={p.t}
                className="group flex items-stretch overflow-hidden rounded-2xl border border-bone-200 bg-white transition hover:border-red-600/40 hover:shadow-sm"
              >
                <div className="relative w-28 shrink-0 overflow-hidden bg-ink sm:w-40">
                  <Image
                    src={p.img}
                    alt={p.t}
                    fill
                    sizes="160px"
                    style={{ objectPosition: p.pos }}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 items-center p-5">
                  <div>
                    <span className="mb-2 inline-block h-1 w-8 rounded-full bg-red-600" />
                    <p className="text-base font-semibold leading-snug text-ink">
                      {p.t}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* POUR QUI — bloc dédié */}
          <div className="mt-8 overflow-hidden rounded-3xl bg-ink text-white">
            <div className="grid items-center gap-6 p-8 md:grid-cols-[auto_1fr] md:gap-10 md:p-12">
              <p className="font-display text-5xl italic text-red-600 md:text-7xl">
                Pour qui&nbsp;?
              </p>
              <p className="text-lg leading-relaxed text-white/80 md:text-2xl">
                Les joueurs et athlètes qui veulent franchir un cap : exister sur les
                réseaux, soigner leur image et créer les opportunités qui vont avec.
              </p>
            </div>
          </div>
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
          <p className="mt-5 max-w-2xl text-base text-ink/70 md:text-lg">
            Investir dans sa communication, ce n&rsquo;est pas une dépense, c&rsquo;est un
            moteur. Plus de visibilité attire les médias, les clubs et les agents, ouvre
            des opportunités et des contrats de sponsoring. Ces revenus se réinvestissent
            dans la com&rsquo; : le cercle repart, en plus grand.
          </p>
          <CercleVertueux />
        </div>
      </section>

      {/* LES JOUEURS */}
      <section className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Nos joueurs
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            On a travaillé avec eux
          </h2>

          {/* Ambassadeur — Kandet Diawara */}
          <div className="mt-10 grid items-stretch gap-0 overflow-hidden rounded-3xl border-2 border-red-600 bg-[#0a0a0a] md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[260px] overflow-hidden">
              <Image
                src="/plus3-players/kandet.jpg"
                alt="Kandet Diawara — ambassadeur +3 Players"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                style={{ objectPosition: "50% 25%" }}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent md:bg-gradient-to-r" />
            </div>
            <div className="p-7 md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                Ambassadeur +3 Players
              </span>
              <h3 className="mt-5 text-3xl font-bold md:text-4xl">Kandet Diawara</h3>
              <p className="mt-2 text-white/60">ESTAC Troyes · Ligue 1</p>
              <p className="mt-4 max-w-2xl text-white/75">
                Premier joueur à nous faire confiance pour +3 Players. Avec son agent,
                Kandet nous a confié le développement de son image pour l&rsquo;aider à
                passer un cap : couverture de ses matchs en photo et en vidéo, direction
                artistique et contenu réseaux, pour exister autant en dehors du terrain
                que dessus.
              </p>
            </div>
          </div>

          {/* Joueurs accompagnés */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {JOUEURS.map((j) => (
              <div
                key={j.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <LazyVideo
                  kind={j.kind}
                  src={j.vid}
                  thumb={j.img}
                  title={`${j.name} — ${j.tag}`}
                />
                <div className="p-6">
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
              </div>
            ))}
          </div>

          {/* Et aussi — reels OM */}
          <p className="mt-14 text-[10px] uppercase tracking-[0.25em] text-white/40">
            Et aussi
          </p>
          <h3 className="mt-2 text-xl font-bold md:text-2xl">
            Des reels de joueurs de l&rsquo;Olympique de Marseille
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {OM_REELS.map((r) => (
              <div
                key={r.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <LazyVideo
                  kind="youtube"
                  src={r.vid}
                  thumb={r.img}
                  title={`Reel ${r.name}`}
                  pos={r.pos}
                  vertical
                />
                <p className="px-4 py-3 text-sm font-semibold">{r.name}</p>
              </div>
            ))}
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
