import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import DomainesAgence from "@/components/DomainesAgence";
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
    name: "Un réseau de freelances",
    role: "Graphistes, photographes, motion designers, développeurs web… On a tous les profils sous la main et on mobilise le bon selon chaque projet.",
    photo: null,
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
          src="/illustrations/plus3-poitiers.jpg"
          alt="+3 Studio en tournage"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 35%" }}
          className="object-cover opacity-25"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/70"
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
            Cliquez sur un domaine pour voir en détail ce qu&rsquo;on y fait.
          </p>
          <DomainesAgence />
        </div>
      </section>

      {/* NOS SERVICES */}
      <section className="bg-bone-50 py-20 text-ink md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_1fr] md:px-10">
          <div>
            <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
              Ce qu&rsquo;on fait
            </span>
            <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink">
            <Image
              src="/illustrations/videaste-rode.jpg"
              alt="+3 Studio en tournage vidéo"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              style={{ objectPosition: "50% 30%" }}
              className="object-cover"
            />
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
                    <div className="relative flex h-full w-full items-center justify-center bg-ink">
                      <span
                        aria-hidden
                        className="absolute inset-4 rounded-2xl ring-2 ring-lime"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/15 blur-[60px]"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/logo.png"
                        alt="+3 Studio"
                        className="relative h-14 w-auto px-6 invert md:h-16"
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
