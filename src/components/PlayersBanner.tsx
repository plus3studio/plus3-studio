"use client";

import Link from "next/link";
import { useState } from "react";

const PLAYERS_PAGE = "/plus3-players";
const PLAYERS_LOGO = "/players-logo.png";

export default function PlayersBanner() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="players"
      className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-20 lg:py-28"
    >
      {/* Red accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]"
      />

      {/* Red top border accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-16 md:text-left">
          {/* Content */}
          <div className="flex-1">
            {/* Logo or fallback text */}
            <div className="mb-6">
              {!logoError ? (
                <img
                  src={PLAYERS_LOGO}
                  alt="+3 Players"
                  className="mx-auto h-16 w-auto object-contain md:mx-0 md:h-20"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="inline-flex items-center gap-3">
                  <span className="text-4xl font-bold text-red-600 md:text-5xl">
                    +3
                  </span>
                  <span className="text-3xl font-light tracking-wider text-white md:text-4xl">
                    Players
                  </span>
                </div>
              )}
            </div>

            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl">
              Chaque joueur m&eacute;rite{" "}
              <span className="text-red-600">son image.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/50 sm:text-base md:mt-4 md:text-lg">
              La branche de +3 Studio qui ne s&rsquo;occupe que des joueurs. On construit
              votre image comme un club construit la sienne : contenu de match, lifestyle
              et vraie direction artistique, pour exister autant en dehors du terrain que
              dessus.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <Link
              href={PLAYERS_PAGE}
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/25"
            >
              Passez un cap avec +3 Players
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
