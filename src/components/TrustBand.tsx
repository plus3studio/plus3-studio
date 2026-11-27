import Link from "next/link";

const LOGOS = [
  { src: "/trust/fff.png", alt: "Fédération Française de Football — FFF", href: "/#projets" },
  { src: "/trust/om.png", alt: "Olympique de Marseille", href: "/#projets" },
  { src: "/trust/arena.png", alt: "Arena Futuroscope", href: "/#projets" },
  { src: "/trust/liguge.png", alt: "La Ligugéenne", href: "/club-ambassadeur" },
  { src: "/trust/catp.png", alt: "Crédit Agricole Touraine Poitou", href: "/#projets" },
  { src: "/trust/stade-rochelais.png", alt: "Stade Rochelais", href: "/#projets" },
  { src: "/trust/marathon.png", alt: "Marathon Poitiers-Futuroscope", href: "/#projets" },
  { src: "/trust/district-vienne.png", alt: "District de la Vienne de Football", href: "/#projets" },
  { src: "/trust/spvb.png", alt: "Alterna SPVB", href: "/#projets" },
  { src: "/trust/formations-football.png", alt: "Formation Football", href: "/#projets" },
];

export default function TrustBand() {
  return (
    <section className="bg-[#0a0a0a] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/40">
          Ils nous ont fait confiance
        </p>
        <div className="mt-10 flex items-center gap-x-12 overflow-x-auto pb-2 md:mt-12 md:justify-center md:gap-x-16 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {LOGOS.map((l) => (
            <Link
              key={l.src}
              href={l.href}
              className="shrink-0"
              aria-label={l.alt}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="h-11 w-auto max-w-none opacity-75 transition hover:opacity-100 md:h-14"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
