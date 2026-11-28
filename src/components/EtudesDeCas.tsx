"use client";

import { useState } from "react";
import Image from "next/image";

type Detail = { label: string; text: string };

type Cas = {
  client: string;
  title: string;
  pitch: string;
  cover: string;
  pos?: string;
  cta: { href: string; label: string };
  details: Detail[];
};

const RING = "hover:border-lime [&[data-open=true]]:border-lime";
const ACCENT = "text-lime";

const CAS: Cas[] = [
  {
    client: "La Ligugéenne · Club Ambassadeur",
    title: "Faire exister un club amateur comme un club pro",
    pitch: "Un renouveau complet, qui puise dans l'identité du club et de son village.",
    cover: "/cas-ligugeenne/maillot-seul.jpg",
    pos: "50% 40%",
    cta: { href: "/club-ambassadeur", label: "En savoir plus sur le projet" },
    details: [
      {
        label: "La demande",
        text: "Dans le cadre de notre programme Club Ambassadeur, offrir à La Ligugéenne une identité et une communication de niveau professionnel, sur une saison entière.",
      },
      {
        label: "L'intention",
        text: "Ancrer chaque création dans l'histoire du club et du village : nouveau blason, pinstripes, références au carrelage de l'abbaye de Ligugé, typographie à empattements. Chaque temps fort est nommé dans l'univers du club (L'Armorial, La Tunique, Le Serment), pour rester fidèle à son héritage à chaque étape.",
      },
      {
        label: "Les livrables",
        text: "Logo et identité visuelle, maillot collector avec Kappa, site e-commerce et application, community management, contenu de saison et couverture de match.",
      },
      {
        label: "Le résultat",
        text: "639 584 vues en un mois et une couverture presse internationale : SoccerBible, Footy Headlines, France 3.",
      },
    ],
  },
  {
    client: "Olympique de Marseille",
    title: "L'OM dans la ville",
    pitch: "Une campagne lifestyle qui sort le maillot du stade.",
    cover: "/projects/01-Olympique-de-marseille/cas-cover.jpg",
    pos: "50% 50%",
    cta: { href: "/projets#projet-Olympique-de-marseille", label: "Voir le projet" },
    details: [
      {
        label: "La demande",
        text: "Produire du contenu authentique autour des maillots de l'OM, au-delà du terrain : montrer la vie à la marseillaise et ce que Marseille est vraiment, une ville entière de passionnés, bien plus qu'un club.",
      },
      {
        label: "L'intention artistique",
        text: "Une direction photo solaire, loin de l'imagerie classique du match. Sortir le maillot du stade pour le confronter à la lumière, aux décors et à la culture de Marseille.",
      },
      {
        label: "Les livrables",
        text: "Une série photo lifestyle et des formats verticaux pour les réseaux, plus des rushs vidéo réutilisables tout au long de la saison.",
      },
      {
        label: "Le résultat",
        text: "Un contenu décliné par le club tout au long de la saison sur ses différents réseaux. Et une confiance qui a duré : l'OM nous a rappelés à trois reprises, dont pour couvrir des matchs.",
      },
    ],
  },
  {
    client: "Alterna SPVB × adidas",
    title: "L'annonce du nouveau maillot",
    pitch: "Dévoiler le retour historique de l'Alterna SPVB avec adidas, et en faire un événement pour toute la ville.",
    cover: "/projects/04-Alterna-SPVB/cas-cover.jpg",
    pos: "50% 25%",
    cta: { href: "/projets#projet-Alterna-SPVB", label: "Voir le projet" },
    details: [
      {
        label: "La demande",
        text: "Annoncer le nouveau maillot de l'Alterna SPVB, fourni par adidas, en faisant référence aux années dorées du club, ses plus belles victoires déjà avec adidas comme équipementier, et en mettant toute la ville en lumière. Montrer que l'Alterna Stade Poitevin Volley-Ball est bien plus qu'un club sportif.",
      },
      {
        label: "L'intention artistique",
        text: "Raconter une histoire à travers Poitiers, de la ville jusqu'au club, comme un poème construit sur l'anaphore « Poitiers, c'est… ». Glisser les nouveaux maillots partout dans le film, au milieu de tenues d'époque, et parsemer le récit de clins d'œil cachés, en passant par le Futuroscope, jusqu'à la scène finale dans la salle, au milieu des trophées.",
      },
      {
        label: "Les livrables",
        text: "Une vidéo d'annonce et un teaser, publiés sur tous les réseaux du club et sur son site, et diffusés toute la saison sur les écrans de la salle.",
      },
      {
        label: "Le résultat",
        text: "Plus de 100 000 vues et 6 000 interactions en 3 jours. La deuxième annonce maillot la plus vue du département, juste derrière La Ligugéenne (que +3 Studio a aussi réalisée).",
      },
    ],
  },
];

export default function EtudesDeCas() {
  const [open, setOpen] = useState<number>(-1);

  return (
    <div className="mt-12 space-y-6">
      {CAS.map((c, i) => {
        const isOpen = open === i;
        return (
          <div
            key={c.client}
            data-open={isOpen}
            className={`overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] transition-colors duration-300 ${RING}`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group grid w-full items-stretch gap-0 text-left md:grid-cols-[1.1fr_1fr]"
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[260px]">
                <Image
                  src={c.cover}
                  alt={c.title}
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  style={{ objectPosition: c.pos }}
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-9">
                <span className={`text-[10px] uppercase tracking-[0.25em] ${ACCENT}`}>
                  {c.client}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">{c.pitch}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  {isOpen ? "Réduire" : "Lire le case study"}
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </span>
              </div>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="border-t border-white/10 p-6 md:p-9">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {c.details.map((d) => (
                      <div key={d.label}>
                        <p
                          className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${ACCENT}`}
                        >
                          {d.label}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {d.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={c.cta.href}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
                  >
                    {c.cta.label}
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
