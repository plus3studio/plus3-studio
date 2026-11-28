"use client";

import { useEffect, useRef, useState } from "react";
import heroContent from "../../content/hero.json";

const HERO_VIDEO_SRC = "/hero-bg.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Force play on mount — some browsers need an explicit .play() call
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked or file missing — fallback to static bg
      });
    };

    video.addEventListener("canplaythrough", () => {
      setVideoReady(true);
      tryPlay();
    });

    // If already loaded (from cache)
    if (video.readyState >= 3) {
      setVideoReady(true);
      tryPlay();
    }
  }, []);

  return (
    <section
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-ink text-white"
    >
      {/* ── VIDEO BACKGROUND ─────────────────────────────────────────── */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Left-to-right gradient so text stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/30"
      />

      {/* ── CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-24 pt-36 md:px-10 md:pb-40 md:pt-52">
        <h1 className="reveal max-w-5xl text-[11vw] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl lg:text-[88px]">
          <span className="text-lime">{heroContent.title_accent}</span>
          <br />
          {heroContent.title_end}
        </h1>

        <p className="reveal reveal-delay-1 mt-6 max-w-2xl text-[15px] leading-relaxed text-white/80 md:mt-8 md:text-lg">
          {heroContent.subtitle}
        </p>

        <div className="reveal reveal-delay-2 mt-8 flex flex-wrap items-center gap-4 md:mt-12 md:gap-5">
          <a
            href={heroContent.cta_link}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-lime hover:text-ink"
          >
            {heroContent.cta_label}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={heroContent.secondary_link}
            className="text-sm text-white/60 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-lime"
          >
            {heroContent.secondary_label}
          </a>
        </div>
      </div>

    </section>
  );
}
