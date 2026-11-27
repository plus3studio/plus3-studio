import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLogoPath } from "@/lib/getLogo";

export const metadata: Metadata = {
  title: "L'agence — Agence de communication sportive 360° à Poitiers",
  description:
    "+3 Studio est une agence créative dédiée au sport, basée près de Poitiers (Vienne, Nouvelle-Aquitaine). Vidéo, photo, direction créative et graphisme pour les joueurs pros, les clubs, les institutions et les marques du sport, du club amateur au niveau national.",
  alternates: { canonical: "/agence" },
};

const TROIS = [
  { v: "3", l: "fondateurs réunis autour d'une même idée" },
  { v: "3", l: "domaines d'activité : clubs, joueurs, marques" },
  { v: "3 points", l: "le tir qui change un match, au basket" },
  { v: "3-5-2", l: "un système, une organisation, une identité" },
  { v: "Hat-trick", l: "les 3 buts qui font entrer dans la légende" },
  { v: "+3", l: "l'écart qu'on veut créer pour nos clients" },
];

const DOMAINES = [
  {
    title: "Clubs & institutions",
    players: false,
    desc: "Identité visuelle, contenu de saison, couverture de match et stratégie de communication, du club amateur au niveau national.",
    img: "/agence/clubs.jpg",
    top: true,
  },
  {
    title: "Joueurs",
    players: true,
    desc: "Personal branding, shooting photo, vidéo lifestyle et match, visuels match day et gestion des réseaux pour les athlètes.",
    img: "/projects/01-Olympique-de-marseille/cover.jpg",
    top: false,
  },
  {
    title: "Marques & événements",
    players: false,
    desc: "Captation, films de marque, reportages et aftermovies pour les marques et les événements, dans le sport comme au-delà.",
    img: "/agence/marques.jpg",
    top: false,
  },
];

const SERVICES = [
  "Vidéo & motion",
  "Photographie",
  "Direction artistique & graphisme",
  "Identité visuelle & branding",
  "Couverture de match & reportages",
  "Gestion des réseaux sociaux",
  "Stratégie & conseil",
  "Relations presse",
  "TikTok / Reels / Shorts",
  "Collaborations de marque",
];

const EQUIPE = [
  {
    name: "Christopher Debenham",
    role: "Direction créative · Vidéo & community management",
    photo: "/team/Christopher.jpg",
  },
  {
    name: "Alexis Patient",
    role: "Photographie & partenariats",
    photo: "/team/alexis.jpg",
  },
  {
    name: "Un réseau de freelances",
    role: "Graphistes et photographes sélectionnés pour renforcer chaque projet",
    photo: null,
  },
];

export default function AgencePage() {
  const logoSrc = getLogoPath();

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar logoSrc={logoSrc} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime/15 blur-[130px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-28 md:px-10 md:py-40">
          <span className="text-[10px] uppercase tracking-[0.25em] text-lime">
            L&rsquo;agence · 360° sports agency
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            L&rsquo;agence créative qui fait passer un cap au sport.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/60 md:text-lg">
            +3 Studio est une agence de communication dédiée au sport, basée près de
            Poitiers. On travaille la vidéo, la photo, la direction créative et le
            graphisme pour les joueurs pros, les clubs, les institutions et les marques,
            du club amateur au niveau international.
          </p>
        </div>
      </section>

      {/* STORYTELLING */}
      <section className="bg-white py-20 text-ink md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Notre histoire
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Parti d&rsquo;un constat, sur un terrain.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
            <p>
              Tout commence dans un club de football semi-pro, là où se croisent celles
              et ceux qui deviendront les fondateurs de +3 Studio. Même passion du sport,
              même constat : les joueurs et les clubs qui travaillent dur sur le terrain
              n&rsquo;ont presque jamais, à côté, une communication à la hauteur de ce
              qu&rsquo;ils valent.
            </p>
            <p>
              De cette idée est née une agence : mettre un niveau de création
              professionnel au service du sport, à tous les étages. Donner à un club
              amateur la même qualité d&rsquo;image qu&rsquo;un club pro. Aider un joueur
              à exister en dehors du terrain. Faire parler d&rsquo;un territoire bien
              au-delà de ses frontières.
            </p>
          </div>
        </div>
      </section>

      {/* LE CHIFFRE 3 */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-lime">
            Pourquoi +3
          </span>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Le 3 est partout dans le sport. Nous aussi.
          </h2>
          <p className="mt-5 max-w-2xl text-white/60">
            Le 3, c&rsquo;est le chiffre qui fait basculer un match, qui structure une
            équipe, qui fait entrer dans la légende. C&rsquo;est aussi le nôtre : trois
            fondateurs, trois domaines d&rsquo;activité, et l&rsquo;envie de toujours
            créer un écart. +3.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TROIS.map((t) => (
              <div
                key={t.l}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="font-display text-3xl italic text-lime md:text-4xl">
                  {t.v}
                </p>
                <p className="mt-2 text-sm text-white/70">{t.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 DOMAINES */}
      <section className="bg-white py-20 text-ink md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Pour qui on travaille
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            3 domaines d&rsquo;activité
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DOMAINES.map((d) => (
              <div
                key={d.title}
                className="relative overflow-hidden rounded-2xl bg-ink"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={d.img}
                    alt={d.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${d.top ? "object-top" : "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    {d.title}
                    {d.players && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src="/players-logo.png"
                        alt="+3 Players"
                        className="h-4 w-auto"
                      />
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-white/75">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="bg-bone-50 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Ce qu&rsquo;on fait
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Nos services
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="rounded-full border border-bone-200 bg-white px-5 py-2.5 text-sm font-medium text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* QUI EST DERRIÈRE */}
      <section className="bg-white py-20 text-ink md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Qui est derrière +3 Studio
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            L&rsquo;équipe
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {EQUIPE.map((m) => (
              <div
                key={m.name}
                className="overflow-hidden rounded-2xl border border-bone-200 bg-bone-50"
              >
                <div className="relative aspect-[4/5] bg-ink">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-6 text-center">
                      <span className="font-display text-3xl italic text-lime">
                        Réseau +3 Studio
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-lg font-bold text-ink">{m.name}</p>
                  <p className="mt-1 text-sm text-ink/70">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            On construit la vôtre ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
            Clubs, joueurs, institutions, marques : parlons de ce qu&rsquo;on peut faire
            pour votre image dans le sport.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition hover:brightness-95"
            >
              Nous contacter &rarr;
            </Link>
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Voir nos projets
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
