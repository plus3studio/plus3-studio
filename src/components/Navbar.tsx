"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

type NavLink = {
  label: string;
  href: string;
  variant?: "default" | "red" | "volt" | "cta" | "players";
};

const links: NavLink[] = [
  { label: "L'agence", href: "/agence" },
  { label: "Nos projets", href: "/#projets" },
  { label: "Programme Club Ambassadeur", href: "/club-ambassadeur", variant: "volt" },
  { label: "+3 Players", href: "/plus3-players", variant: "players" },
  { label: "Contact", href: "/#contact", variant: "cta" },
];

type NavbarProps = {
  /** Chemin vers le logo image, ou null si pas de logo (fallback texte). */
  logoSrc: string | null;
};

/** Ovale de contour qui apparaît proprement au survol (fade + léger zoom). */
function HoverRing({ color }: { color: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 scale-90 rounded-full border-2 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 ${color}`}
    />
  );
}

export default function Navbar({ logoSrc }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = (l: NavLink) => !l.href.includes("#") && pathname === l.href;

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

  function DesktopLink({ l, active }: { l: NavLink; active: boolean }) {
    const isRoute = !l.href.includes("#");
    const Comp = isRoute ? Link : "a";

    if (l.variant === "cta") {
      return (
        <Comp
          href={l.href}
          className="inline-flex items-center gap-1.5 rounded-full bg-lime px-5 py-2 text-sm font-semibold text-ink transition hover:brightness-95"
        >
          {l.label}
          <span>&rarr;</span>
        </Comp>
      );
    }

    if (l.variant === "players") {
      return (
        <Comp
          href={l.href}
          aria-label="+3 Players for pros"
          className="group relative inline-flex items-center rounded-full px-4 py-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isDark ? "/players-logo-light.png" : "/players-logo.png"}
            alt="+3 Players for pros"
            className="h-6 w-auto md:h-7"
          />
          {active && (
            <span className="absolute inset-x-4 bottom-1 h-[3px] rounded-full bg-red-600" />
          )}
          <HoverRing color="border-red-600" />
        </Comp>
      );
    }

    if (l.variant === "volt") {
      return (
        <Comp
          href={l.href}
          className={`group relative rounded-full px-4 py-2 text-sm ${
            isDark ? "text-ink" : "text-white"
          }`}
        >
          {l.label}
          <span className="absolute inset-x-4 bottom-1.5 h-[3px] rounded-full bg-lime transition-opacity duration-300 group-hover:opacity-0" />
          <HoverRing color="border-lime" />
        </Comp>
      );
    }

    const color =
      l.variant === "red"
        ? "text-red-600 hover:text-red-500"
        : isDark
          ? "text-ink/80 hover:text-ink"
          : "text-white/80 hover:text-white";
    const underline = l.variant === "red" ? "bg-red-600" : "bg-lime";

    return (
      <Comp href={l.href} className={`group relative text-sm transition-colors ${color}`}>
        {l.label}
        <span
          className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
            active ? "w-full" : "w-0 group-hover:w-full"
          } ${underline}`}
        />
      </Comp>
    );
  }

  function MobileLink({ l }: { l: NavLink }) {
    const isRoute = !l.href.includes("#");
    const Comp = isRoute ? Link : "a";

    if (l.variant === "cta") {
      return (
        <Comp
          href={l.href}
          onClick={() => setOpen(false)}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-3.5 text-base font-semibold text-ink"
        >
          {l.label} <span>&rarr;</span>
        </Comp>
      );
    }

    if (l.variant === "players") {
      return (
        <Comp
          href={l.href}
          onClick={() => setOpen(false)}
          aria-label="+3 Players for pros"
          className="flex items-center py-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/players-logo-light.png" alt="+3 Players for pros" className="h-8 w-auto" />
        </Comp>
      );
    }

    if (l.variant === "volt") {
      return (
        <Comp
          href={l.href}
          onClick={() => setOpen(false)}
          className="flex items-center justify-between py-4"
        >
          <span className="relative inline-block pb-1 text-lg font-semibold text-ink">
            {l.label}
            <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-lime" />
          </span>
          <span className="text-mist-400 text-sm">&rarr;</span>
        </Comp>
      );
    }

    return (
      <Comp
        href={l.href}
        onClick={() => setOpen(false)}
        className={`flex items-center justify-between py-4 text-lg font-semibold ${
          l.variant === "red" ? "text-red-600" : "text-ink"
        }`}
      >
        {l.label}
        <span className="text-mist-400 text-sm">&rarr;</span>
      </Comp>
    );
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isDark
          ? "backdrop-blur-md bg-white/85 border-b border-bone-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-10 md:py-5">
        {/* Logo → accueil */}
        <Link
          href="/"
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
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {links.map((l) => (
            <DesktopLink key={l.href} l={l} active={isActive(l)} />
          ))}
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
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col border-t border-bone-200 bg-white px-5 py-4">
          {links.map((l, i) => (
            <div key={l.href}>
              <MobileLink l={l} />
              {i < links.length - 1 && l.variant !== "cta" && (
                <div className="h-px bg-bone-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
