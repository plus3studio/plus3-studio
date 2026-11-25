"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { label: "Projets", href: "/#projets" },
  { label: "Équipe", href: "/#equipe" },
  { label: "Contact", href: "/#contact" },
];

type NavbarProps = {
  /** Chemin vers le logo image, ou null si pas de logo (fallback texte). */
  logoSrc: string | null;
};

export default function Navbar({ logoSrc }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Couleurs adaptatives : blanc sur le hero (transparent), sombre quand scrolled
  const isDark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isDark
          ? "backdrop-blur-md bg-white/85 border-b border-bone-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-10 md:py-5">
        {/* Logo */}
        <a
          href="#top"
          aria-label={`${site.name} — accueil`}
          className="flex items-center gap-2"
        >
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={site.name}
              width={site.logo.width}
              height={Math.round(site.logo.width * 0.4)}
              priority
              className={`transition duration-500 h-[34px] md:h-[48px] w-auto ${
                isDark ? "invert" : ""
              }`}
              style={{ width: "auto" }}
            />
          ) : (
            <span
              className={`font-bold tracking-[-0.04em] text-xl md:text-2xl transition-colors ${
                isDark ? "text-ink" : "text-white"
              }`}
            >
              {site.name}
            </span>
          )}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative text-sm transition-colors ${
                    isDark
                      ? "text-ink/80 hover:text-ink"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/club-ambassadeur"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2 font-display text-base italic leading-none text-ink transition hover:brightness-95"
          >
            Programme Club Ambassadeur
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition ${
            isDark
              ? "border border-bone-200 bg-white/80"
              : "border border-white/30 bg-white/10"
          }`}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full transition-all duration-300 ${
                isDark ? "bg-ink" : "bg-white"
              } ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full transition-all duration-300 ${
                isDark ? "bg-ink" : "bg-white"
              } ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-full transition-all duration-300 ${
                isDark ? "bg-ink" : "bg-white"
              } ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col border-t border-bone-200 bg-white px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-semibold text-ink active:text-lime"
              >
                {l.label}
                <span className="text-mist-400 text-sm">→</span>
              </a>
              <div className="h-px bg-bone-200" />
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/club-ambassadeur"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-lime px-5 py-3.5 font-display text-lg italic leading-none text-ink"
            >
              Programme Club Ambassadeur
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
