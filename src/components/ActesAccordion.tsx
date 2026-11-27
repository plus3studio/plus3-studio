"use client";

import { useState } from "react";
import Image from "next/image";
import InstagramEmbed from "@/components/InstagramEmbed";

type ActeMedia =
  | { kind: "instagram"; url: string }
  | { kind: "youtube"; id: string };

export type Acte = {
  num: string;
  title: string;
  sub: string;
  desc: string;
  media: ActeMedia;
  youtube?: string;
  gallery?: boolean;
  credit?: string;
};

const SHOOTING = ["maillot-2", "maillot-3", "design-1", "design-2"];

function YouTube({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink md:rounded-2xl">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}?cc_load_policy=0&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function ActesAccordion({ actes }: { actes: Acte[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="mt-12 divide-y divide-bone-200 border-y border-bone-200">
      {actes.map((a, i) => {
        const isOpen = open === i;
        return (
          <div key={a.num}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-6 text-left transition-colors hover:bg-white md:gap-6 md:py-7"
            >
              <span className="font-display text-xl italic text-lime md:text-2xl">
                {a.num}
              </span>
              <span className="flex-1">
                <span className="block text-xl font-bold text-ink md:text-2xl">
                  {a.title}
                </span>
                <span className="mt-0.5 block text-[11px] uppercase tracking-[0.2em] text-mist-500">
                  {a.sub}
                </span>
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bone-200 text-ink transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-lime" : ""
                }`}
                aria-hidden
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M8 2.5v11M2.5 8h11" />
                </svg>
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="grid items-center gap-8 pb-10 md:grid-cols-2">
                  {/* Média */}
                  <div>
                    {a.media.kind === "youtube" && (
                      <YouTube id={a.media.id} title={`La Ligugéenne — ${a.title}`} />
                    )}
                    {a.media.kind === "instagram" && (
                      <div className="mx-auto w-full max-w-[460px]">
                        <InstagramEmbed url={a.media.url} />
                      </div>
                    )}
                  </div>

                  {/* Texte */}
                  <div>
                    <p className="text-base leading-relaxed text-ink/75">{a.desc}</p>
                    {a.credit && (
                      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-mist-500">
                        {a.credit}
                      </p>
                    )}
                    {a.youtube && (
                      <div className="mt-5">
                        <YouTube id={a.youtube} title={`La Ligugéenne — ${a.title}`} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Galerie shooting (sous l'Acte II) */}
                {a.gallery && (
                  <div className="grid grid-cols-2 gap-4 pb-10 md:grid-cols-4">
                    {SHOOTING.map((n) => (
                      <div
                        key={n}
                        className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink"
                      >
                        <Image
                          src={`/cas-ligugeenne/${n}.jpg`}
                          alt="La Ligugéenne — shooting maillot collector"
                          fill
                          sizes="(min-width: 768px) 25vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
