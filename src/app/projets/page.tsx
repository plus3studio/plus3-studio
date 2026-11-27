import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { getProjects } from "@/lib/getProjects";
import { getLogoPath } from "@/lib/getLogo";

export const metadata: Metadata = {
  title: "Nos projets — Portfolio vidéo, photo & branding sport",
  description:
    "Le portfolio de +3 Studio : clubs pros et amateurs, joueurs, institutions et marques du sport. Vidéos, photos, identités visuelles et couvertures de match réalisées par l'agence.",
  alternates: { canonical: "/projets" },
};

export default function ProjetsPage() {
  const projects = getProjects();
  const logoSrc = getLogoPath();

  return (
    <main className="relative min-h-screen bg-ink text-white">
      <Navbar logoSrc={logoSrc} />

      {/* HERO */}
      <section className="bg-ink px-5 pt-28 md:px-10 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Portfolio
          </span>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Nos projets
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/60 md:text-lg">
            Clubs pros et amateurs, joueurs, institutions et marques du sport :
            retrouvez les vidéos, photos, identités visuelles et couvertures de match
            réalisées par +3 Studio, du local à l&rsquo;international.
          </p>
        </div>
      </section>

      {/* PORTFOLIO complet */}
      <Projects projects={projects} showHeading={false} />

      {/* ÉTUDES DE CAS */}
      <section className="border-t border-white/10 bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            En détail
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Études de cas
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/60 md:text-lg">
            Deux projets racontés de A à Z : la méthode, la production et les
            résultats, acte par acte.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {/* Club Ambassadeur */}
            <Link
              href="/club-ambassadeur"
              className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] ring-1 ring-white/10 transition hover:ring-lime/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cas-ligugeenne/hero.jpg"
                  alt="La Ligugéenne — Club Ambassadeur +3 Studio"
                  className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block rounded-full bg-lime/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
                  Club Ambassadeur
                </span>
                <h3 className="mt-4 text-xl font-bold md:text-2xl">
                  La Ligugéenne Football
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Une saison de communication offerte à un club amateur. 639 584 vues
                  en un mois et une couverture presse internationale.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                  Voir l&rsquo;étude de cas
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>

            {/* +3 Players */}
            <Link
              href="/plus3-players"
              className="group relative overflow-hidden rounded-2xl bg-[#0a0a0a] ring-1 ring-white/10 transition hover:ring-red-600/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/agence/joueurs.jpg"
                  alt="+3 Players — accompagnement des joueurs pros"
                  className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/players-logo-light.png"
                  alt="+3 Players"
                  className="h-6 w-auto"
                />
                <h3 className="mt-4 text-xl font-bold md:text-2xl">
                  L&rsquo;offre dédiée aux joueurs
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Personal branding, contenu réseaux et vidéo pour les athlètes :
                  reels, match day et lifestyle.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-500">
                  Découvrir +3 Players
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Teaser agence (cross-link) */}
      <section className="bg-[#0a0a0a] py-20 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              L&rsquo;agence
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Derrière chaque projet, une agence créative dédiée au sport.
            </h2>
            <p className="mt-4 text-white/60">
              Née dans un club semi-pro, +3 Studio met un niveau de création
              professionnel au service des clubs, des joueurs et des marques.
            </p>
          </div>
          <Link
            href="/agence"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition hover:brightness-95"
          >
            Découvrir l&rsquo;agence
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
