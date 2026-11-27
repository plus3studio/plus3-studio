const LOGOS = [
  { src: "/trust/fff.png", alt: "Fédération Française de Football — FFF" },
  { src: "/trust/om.png", alt: "Olympique de Marseille" },
  { src: "/trust/arena.png", alt: "Arena Futuroscope" },
  { src: "/trust/liguge.png", alt: "La Ligugéenne" },
  { src: "/trust/catp.png", alt: "Crédit Agricole Touraine Poitou" },
  { src: "/trust/stade-rochelais.png", alt: "Stade Rochelais" },
  { src: "/trust/marathon.png", alt: "Marathon Poitiers-Futuroscope" },
  { src: "/trust/district-vienne.png", alt: "District de la Vienne de Football" },
  { src: "/trust/spvb.png", alt: "Alterna SPVB" },
  { src: "/trust/soccer-edu.png", alt: "Soccer Edu" },
  { src: "/trust/formations-football.png", alt: "Formations Football" },
];

export default function TrustBand() {
  return (
    <section className="bg-[#0a0a0a] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-white/40">
          Ils nous ont fait confiance
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:mt-12 md:gap-x-16">
          {LOGOS.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={l.src}
              src={l.src}
              alt={l.alt}
              loading="lazy"
              className="h-11 w-auto opacity-75 transition hover:opacity-100 md:h-14"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
