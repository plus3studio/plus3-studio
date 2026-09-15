"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectMedia } from "@/data/projects";

function getEmbedUrl(url: string): string {
  // YouTube
  let match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]+)/,
  );
  if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;

  // Vimeo
  match = url.match(/vimeo\.com\/(\d+)/);
  if (match) return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;

  // Instagram reels
  match = url.match(/instagram\.com\/reel\/([\w-]+)/);
  if (match) return `https://www.instagram.com/reel/${match[1]}/embed/`;

  return url;
}

export default function Lightbox({
  media,
  onClose,
  onPrev,
  onNext,
}: {
  media: ProjectMedia;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  // Reset loaded state when media changes
  useEffect(() => {
    setLoaded(false);
  }, [media]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/95"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:top-6 md:h-11 md:w-11"
        aria-label="Fermer"
      >
        ✕
      </button>

      {/* Prev */}
      {onPrev && (
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20 md:left-6 md:h-12 md:w-12 md:text-xl"
          aria-label="Précédent"
        >
          ←
        </button>
      )}

      {/* Next */}
      {onNext && (
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20 md:right-6 md:h-12 md:w-12 md:text-xl"
          aria-label="Suivant"
        >
          →
        </button>
      )}

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-14 md:px-20">
        {media.type === "image" && (
          <Image
            src={media.src}
            alt={media.alt ?? ""}
            width={1920}
            height={1080}
            className={`max-h-[90vh] w-auto rounded-lg object-contain transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            priority
          />
        )}

        {media.type === "video" && (
          <video
            src={media.src}
            controls
            autoPlay
            playsInline
            className="aspect-video w-full max-w-6xl rounded-lg"
          />
        )}

        {media.type === "embed" && (
          <div className="aspect-video w-full max-w-6xl">
            <iframe
              src={getEmbedUrl(media.url)}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
