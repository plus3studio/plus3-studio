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
