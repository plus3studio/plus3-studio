import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import DomainesAgence from "@/components/DomainesAgence";
import PresseCarousel from "@/components/PresseCarousel";
import RevealMount from "@/components/RevealMount";
import { getProjects } from "@/lib/getProjects";
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
  { v: "3 sets", l: "au volley, la victoire se joue en trois sets gagnants" },
  { v: "Hat-trick", l: "les 3 buts qui font entrer dans la légende" },
  { v: "+3", l: "l'écart qu'on veut créer pour nos clients" },
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
    name: "Un réseau de créatifs",
    role: "Graphistes, photographes, monteurs, motion designers, développeurs : on réunit tous les profils et on mobilise le bon selon chaque projet.",
    photo: null,
  },
];

// Coupures presse — à compléter au fur et à mesure (href = lien article)
const PRESSE = [
  {
    outlet: "SoccerBible",
    note: "International",
    img: "/cas-ligugeenne/presse/01.jpg",
    desc: "Le maillot de La Ligugéenne raconté par l'une des références mondiales du maillot de football.",
    href: "#",
  },
  {
    outlet: "Footy Headlines",
    note: "International",
    img: "/cas-ligugeenne/presse/03.jpg",
    desc: "La tunique d'un club de Régional 2 mise en avant sur la référence mondiale du maillot de football.",
    href: "#",
  },
  {
    outlet: "Football Shirt Culture",
    note: "International",
    img: "/cas-ligugeenne/presse/04.jpg",
    desc: "Un club amateur français dans les pages d'un média suivi par des passionnés du monde entier.",
    href: "#",
  },
  {
    outlet: "Dégaine by So Foot",
    note: "France",
    img: "/cas-ligugeenne/presse/05.jpg",
    desc: "Le projet Club Ambassadeur raconté par le média lifestyle de So Foot.",
    href: "#",
  },
  {
    outlet: "France 3 Nouvelle-Aquitaine",
    note: "France",
    img: "/cas-ligugeenne/presse/06.jpg",
    desc: "La chaîne régionale revient sur La Ligugéenne et la saison de communication signée +3 Studio.",
    href: "#",
  },
  {
    outlet: "La Nouvelle République",
    note: "Vienne",
    img: "/cas-ligugeenne/presse/07.jpg",
    desc: "La presse locale revient sur l'aventure du club de Ligugé et sa portée bien au-delà de la Vienne.",
    href: "#",
  },
];

export default function AgencePage() {
  const logoSrc = getLogoPath();
  const projects = getProjects();

  return (
    <main className="relative min-h-screen bg-white">
      <RevealMount />
      <Navbar logoSrc={logoSrc} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
        <Image
          src="/illustrations/agence-header.jpg"
          alt="+3 Studio en couverture de l'équipe de France de futsal"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 40%" }}
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime/15 blur-[130px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent"
        />
        <div className="relative mx-auto max-w-5xl px-5 py-28 md:px-10 md:py-40">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-lime">
            L&rsquo;agence · 360° sports agency
          </span>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            L&rsquo;agence créative qui fait passer un cap au sport.
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base text-white/60 md:text-lg">
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
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Notre histoire
          </span>
          <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Parti d&rsquo;un constat, sur un terrain.
          </h2>
          <div className="reveal reveal-delay-2 mt-6 space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
            <p>
              Tout commence dans un club de football semi-pro, là où se croisent celles
              et ceux qui deviendront les fondateurs de +3 Studio. Même passion du sport,
              même constat : sur le terrain, les clubs et les joueurs donnent tout. En
              dehors, leur image ne suit pas toujours, loin de ce qu&rsquo;ils valent
              vraiment.
            </p>
            <p>
              De cette idée est née une agence : mettre un niveau de création
              professionnel au service du sport, à tous les étages. Donner à un club
              amateur la même qualité d&rsquo;image qu&rsquo;un club pro. Aider un joueur
              à exister en dehors du terrain. Faire parler d&rsquo;un territoire bien
              au-delà de ses frontières.
            </p>
          </div>
          <div className="reveal relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl bg-ink">
            <Image
              src="/illustrations/equipe-photocall.jpg"
              alt="Les fondateurs de +3 Studio"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* LE CHIFFRE 3 */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Colonne gauche : intro + grand 3 */}
          <div className="relative">
            <span className="reveal text-[10px] uppercase tracking-[0.25em] text-lime">
              Pourquoi +3
            </span>
            <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              Le 3 est partout dans le sport.
              <span className="block text-lime">Nous aussi.</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-6 max-w-md text-white/60">
              Le chiffre qui fait basculer un match, qui structure une équipe, qui fait
              entrer dans la légende. C&rsquo;est aussi le nôtre : trois fondateurs,
              trois domaines, et l&rsquo;envie de toujours créer un écart.
            </p>
            <div aria-hidden className="pointer-events-none relative mt-6 hidden lg:block">
              <span className="font-display text-[13rem] italic leading-none text-lime">
                +3
              </span>
            </div>
          </div>

          {/* Colonne droite : les sens du 3, alignés et animés */}
          <div className="flex flex-col justify-center">
            {TROIS.map((t, i) => (
              <div
                key={t.l}
                className="reveal group flex items-center gap-5 border-b border-white/10 py-5 first:border-t"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="w-24 shrink-0 font-display text-2xl italic text-lime md:text-3xl">
                  {t.v}
                </span>
                <span className="text-sm text-white/70 transition-colors duration-300 group-hover:text-white md:text-base">
                  {t.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 DOMAINES */}
      <section className="bg-white py-20 text-ink md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Pour qui on travaille
          </span>
          <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            3 domaines d&rsquo;activité
          </h2>
          <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-base text-ink/60">
            Clubs, joueurs, marques : trois univers, une même exigence de création
            au service de votre image.
          </p>
          <DomainesAgence />
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <Image
          src="/illustrations/chris-basket.jpg"
          alt="+3 Studio en tournage"
          fill
          sizes="100vw"
          style={{ objectPosition: "80% 50%" }}
          className="object-cover opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-10">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-lime">
            Ce qu&rsquo;on fait
          </span>
          <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Nos services
          </h2>
          <div className="reveal reveal-delay-2 mt-10 flex max-w-3xl flex-wrap gap-3">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-lime hover:bg-lime/10 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime/60 transition-colors duration-300 group-hover:bg-lime group-hover:[animation:flash_0.7s_ease-in-out_infinite]" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* QUI EST DERRIÈRE */}
      <section className="bg-white py-20 text-ink md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Qui est derrière +3 Studio
          </span>
          <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
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
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-ink">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute h-64 w-64 rounded-full border border-dashed border-lime/30"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute h-48 w-48 rounded-full border border-lime/50"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute h-44 w-44 rounded-full bg-lime/10 blur-[55px]"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/plus3-mark-white.png"
                        alt="+3 Studio"
                        className="relative h-28 w-auto object-contain md:h-32"
                      />
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

      {/* ILS ONT PARLÉ DE NOUS */}
      <section className="bg-bone-50 py-20 text-ink md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            +3 dans les médias
          </span>
          <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Ils ont parlé de nous
          </h2>
          <p className="reveal reveal-delay-2 mt-4 max-w-2xl text-base text-ink/60">
            Nos projets repris par la presse, en France et à l&rsquo;international.
          </p>

          <PresseCarousel items={PRESSE} />
        </div>
      </section>

      {/* Aperçu projets (cross-link) */}
      <Projects projects={projects} preview moreHref="/projets" />

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
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition hover:brightness-95"
            >
              Nous contacter &rarr;
            </Link>
            <Link
              href="/projets"
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
