import Link from "next/link";

const LOGOS = [
  { src: "/trust/fff.png", alt: "Fédération Française de Football — FFF", href: "/projets#projet-EDF-Futsal" },
  { src: "/trust/om.png", alt: "Olympique de Marseille", href: "/projets#projet-Olympique-de-marseille" },
  { src: "/trust/arena.png", alt: "Arena Futuroscope", href: "/projets#projet-Arena-Futuroscope" },
  { src: "/trust/liguge.png", alt: "La Ligugéenne", href: "/club-ambassadeur" },
  { src: "/trust/catp.png", alt: "Crédit Agricole Touraine Poitou", href: "/projets#projet-CATP" },
  { src: "/trust/stade-rochelais.png", alt: "Stade Rochelais", href: "/projets#projet-Stade-Rochelais" },
  { src: "/trust/marathon.png", alt: "Marathon Poitiers-Futuroscope", href: "/projets#projet-Marathon-Poitiers-Futuroscope" },
  { src: "/trust/district-vienne.png", alt: "District de la Vienne de Football", href: "/club-ambassadeur" },
  { src: "/trust/spvb.png", alt: "Alterna SPVB", href: "/projets#projet-Alterna-SPVB" },
  // logo large sur 2 lignes : hauteur réduite pour une surface comparable aux autres
  { src: "/trust/formations-football.png", alt: "Formation Football", href: "/projets#projet-Formations-Football", cls: "h-6 md:h-8" },
];

export default function TrustBand() {
  return (
    <section className="bg-[#0a0a0a] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/40">
          Ils nous ont fait confiance
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:mt-12 md:gap-x-14">
          {LOGOS.map((l) => (
            <Link key={l.src} href={l.href} aria-label={l.alt}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className={`${l.cls ?? "h-10 md:h-12"} w-auto opacity-75 transition hover:opacity-100`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
