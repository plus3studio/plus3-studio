"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectMedia } from "@/data/projects";

function getEmbedUrl(url: string): string {
  const yt = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]+)/,
  );
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?rel=0`;
  const ig = url.match(/instagram\.com\/(?:p|reel|tv)\/([^/?#]+)/);
  if (ig) return `https://www.instagram.com/p/${ig[1]}/embed`;
  return url;
}

function Slide({ media }: { media: ProjectMedia }) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
      />
    );
  }
  if (media.type === "embed") {
    return (
      <iframe
        src={getEmbedUrl(media.url)}
        title="Média"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    );
  }
  return (
    <Image
      src={media.src}
      alt={media.alt ?? ""}
      fill
      sizes="(min-width: 768px) 60vw, 100vw"
      className="object-contain"
    />
  );
}

export default function MediaCarousel({ media }: { media: ProjectMedia[] }) {
  const [idx, setIdx] = useState(0);
  const n = media.length;
  if (n === 0) return null;
  const go = (d: number) => setIdx((i) => (i + d + n) % n);
  const m = media[idx];

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl bg-ink">
        <div className="relative aspect-[4/5] w-full sm:aspect-[4/3]">
          <Slide key={idx} media={m} />
        </div>

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Précédent"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow transition hover:bg-white"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Suivant"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow transition hover:bg-white"
            >
              &#8250;
            </button>
            <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] font-semibold text-white">
              {idx + 1} / {n}
            </span>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {media.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Aller au média ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-ink" : "w-1.5 bg-bone-300 hover:bg-mist-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
