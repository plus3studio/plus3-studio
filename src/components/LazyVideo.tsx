"use client";

import { useState } from "react";
import Image from "next/image";
import InstagramEmbed from "@/components/InstagramEmbed";

type Props = {
  kind: "youtube" | "instagram";
  /** id YouTube ou URL Instagram */
  src: string;
  thumb: string;
  title: string;
  pos?: string;
  className?: string;
  /** vidéo verticale (reel / short) → cadre 9:16 */
  vertical?: boolean;
};

export default function LazyVideo({
  kind,
  src,
  thumb,
  title,
  pos,
  className,
  vertical,
}: Props) {
  const [play, setPlay] = useState(false);
  const ratio = vertical ? "aspect-[9/16]" : "aspect-video";

  if (play && kind === "instagram") {
    return (
      <div className={className}>
        <InstagramEmbed url={src} />
      </div>
    );
  }

  if (play) {
    return (
      <div className={`relative ${ratio} w-full overflow-hidden bg-ink ${className ?? ""}`}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${src}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      aria-label={`Lire la vidéo : ${title}`}
      className={`group relative block ${ratio} w-full overflow-hidden bg-ink ${className ?? ""}`}
    >
      <Image
        src={thumb}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        style={{ objectPosition: pos }}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition group-hover:bg-ink/40">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition group-hover:scale-110">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
