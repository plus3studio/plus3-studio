"use client";

import { useRef } from "react";
import LazyVideo from "@/components/LazyVideo";

export type PresseItem = {
  outlet: string;
  note: string;
  img: string;
  desc: string;
  href: string;
  pos?: string;
  /** id YouTube : la carte devient une vidéo lisible sur place */
  video?: string;
};

export default function PresseCarousel({ items }: { items: PresseItem[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative mt-10">
      {/* Flèches (desktop) */}
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Précédent"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bone-200 bg-white text-ink transition hover:border-ink"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Suivant"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-bone-200 bg-white text-ink transition hover:border-ink"
        >
          &#8250;
        </button>
      </div>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((m) => {
          const cardCls =
            "group w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-bone-200 bg-white transition hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg sm:w-[46%] lg:w-[31%]";
          const info = (
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-bold text-ink">{m.outlet}</p>
                <p className="text-[10px] uppercase tracking-wider text-mist-500">
                  {m.note}
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{m.desc}</p>
            </div>
          );

          if (m.video) {
            return (
              <div key={m.outlet} data-card className={`block ${cardCls}`}>
                <LazyVideo
                  kind="youtube"
                  src={m.video}
                  thumb={m.img}
                  title={m.outlet}
                  vertical
                />
                {info}
              </div>
            );
          }

          return (
            <a
              key={m.outlet}
              data-card
              href={m.href}
              target={m.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`block ${cardCls}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-bone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.img}
                  alt={`${m.outlet} — +3 Studio`}
                  loading="lazy"
                  style={{ objectPosition: m.pos ?? "50% 0%" }}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              {info}
              <span className="mb-5 ml-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1">
                Lire l&rsquo;article &rarr;
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
