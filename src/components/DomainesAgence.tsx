"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Domaine = {
  title: string;
  players?: boolean;
  teaser: string;
  img: string;
  pos: string;
  includes: string[];
  note?: string;
  href?: string;
};

const DOMAINES: Domaine[] = [
  {
    title: "Clubs & institutions",
    teaser:
      "Identité, contenu et couverture de match, du club amateur au niveau national.",
    img: "/projects/02-Stade-Rochelais/cover.jpg",
    pos: "50% 30%",
    includes: [
      "Identité visuelle & branding",
      "Contenu de saison",
      "Couverture de match & reportages",
      "Gestion des réseaux sociaux",
      "Stratégie & relations presse",
    ],
    note: "Du club amateur au niveau national.",
  },
  {
    title: "Joueurs",
    players: true,
    teaser: "Personal branding, shooting et vidéo pour les athlètes.",
    img: "/agence/joueur-pavard.jpg",
    pos: "50% 18%",
    includes: [
      "Personal branding & direction artistique",
      "Shooting photo & vidéo lifestyle",
      "Visuels match day",
      "Gestion des réseaux sociaux",
      "Annonces de transfert & collaborations de marque",
    ],
    note: "Une offre dédiée : +3 Players.",
    href: "/plus3-players",
  },
  {
    title: "Marques & événements",
    teaser:
      "Captation, films de marque et aftermovies, dans le sport comme au-delà.",
    img: "/agence/arena.jpg",
    pos: "50% 40%",
    includes: [
      "Captation & couverture d'événement",
      "Films de marque & publicité",
      "Reportages & aftermovies",
      "Contenu réseaux",
      "Corporate & tous secteurs avec CD Studio",
    ],
    note: "Dans le sport comme au-delà.",
  },
];

export default function DomainesAgence() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {DOMAINES.map((d, i) => {
        const isOpen = open === i;
        return (
          <div
            key={d.title}
            data-open={isOpen}
            className="overflow-hidden rounded-2xl border border-bone-200 bg-ink transition-colors duration-300 [&[data-open=true]]:border-lime"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group block w-full text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  style={{ objectPosition: d.pos }}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
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
                  <p className="mt-1 text-sm text-white/75">{d.teaser}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lime">
                    {isOpen ? "Réduire" : "Voir le détail"}
                    <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                      ↓
                    </span>
                  </span>
                </div>
              </div>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <div className="p-6 text-white">
                  <ul className="space-y-2">
                    {d.includes.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-white/80">
                        <span className="text-lime">+</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  {d.note && (
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/40">
                      {d.note}
                    </p>
                  )}
                  {d.href && (
                    <Link
                      href={d.href}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-red-500"
                    >
                      Découvrir +3 Players &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
