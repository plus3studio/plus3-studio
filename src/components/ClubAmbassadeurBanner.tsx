import Link from "next/link";

const STATS = [
  { value: "639 584", label: "vues en un mois" },
  { value: "6 nations", label: "2 continents, 13 départements" },
  { value: "Presse internationale", label: "SoccerBible, Footy Headlines, France 3" },
];

export default function ClubAmbassadeurBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-20 lg:py-28">
      {/* Volt accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lime/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-lime/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
        <img
          src="/ca-liguge-logo.png"
          alt="Ligugé — Club Ambassadeur +3 Studio"
          className="mx-auto w-full max-w-sm md:max-w-md"
        />
        <p className="mx-auto mt-6 max-w-2xl text-sm text-white/55 sm:text-base md:text-lg">
          Avec le District de Football de la Vienne, +3 Studio a offert une saison
          compl&egrave;te de communication de niveau professionnel &agrave; un club
          amateur de R&eacute;gional 2. Une nouvelle identit&eacute;, un maillot
          collector avec Kappa, et une port&eacute;e qui a d&eacute;pass&eacute; les
          fronti&egrave;res.
        </p>

        {/* Chiffres clés */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.value}>
              <p className="text-xl font-bold text-lime sm:text-2xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/40 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/club-ambassadeur"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-all hover:brightness-95"
        >
          D&eacute;couvrir le projet
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
