import Link from "next/link";
import { site } from "@/data/site";
import SocialIcons from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-12 md:text-left">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <span className="font-bold tracking-[-0.04em] text-xl">
            {site.name}
          </span>
          <span className="text-xs text-white/50">
            {site.tagline} — © {year}
          </span>
        </div>

        {/* Socials */}
        <SocialIcons variant="light" />

        {/* Legal */}
        <Link
          href="/mentions-legales"
          className="text-xs text-white/40 transition hover:text-white/70"
        >
          Mentions l&eacute;gales
        </Link>
      </div>
    </footer>
  );
}
