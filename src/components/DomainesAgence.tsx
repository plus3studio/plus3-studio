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
    teaser: "De la création d'identité à la couverture de toute une saison.",
    img: "/projects/02-Stade-Rochelais/cover.jpg",
    pos: "50% 22%",
    includes: [
      "Un nouveau logo ou une refonte d'identité visuelle",
      "Le lancement d'un maillot ou d'une collection",
      "La couverture d'un match ou d'un événement",
      "L'annonce d'une recrue ou d'un partenariat",
      "Le contenu et les réseaux de toute une saison",
    ],
    note: "Du club amateur au niveau national.",
  },
  {
    title: "Joueurs",
    players: true,
    teaser: "Construire l'image d'un athlète, sur et en dehors du terrain.",
    img: "/agence/joueur-pavard.jpg",
    pos: "50% 8%",
    includes: [
      "Un shooting de personal branding",
      "L'annonce d'un transfert ou d'une signature",
      "Les visuels match day",
      "Du contenu lifestyle et réseaux",
      "Une collaboration de marque",
    ],
    note: "Une offre dédiée : +3 Players.",
    href: "/plus3-players",
  },
  {
    title: "Marques & événements",
    teaser: "Faire vivre une marque ou un événement en image.",
    img: "/agence/arena.jpg",
    pos: "50% 95%",
    includes: [
      "Un film de marque ou une publicité",
      "La captation d'un événement",
      "Un aftermovie",
      "Un reportage",
      "Une activation terrain et son contenu réseaux",
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
                    {isOpen ? "Réduire" : "Ce qu'on crée pour eux"}
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
