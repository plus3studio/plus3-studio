import Link from "next/link";

const BRANCHES = [
  {
    title: "Clubs & institutions",
    desc: "Identité visuelle, contenu et couverture de match, du club amateur au niveau national.",
    href: "/club-ambassadeur",
  },
  {
    title: "Joueurs",
    desc: "+3 Players : personal branding, shooting et vidéo pour les athlètes qui veulent exister en dehors du terrain.",
    href: "/plus3-players",
  },
  {
    title: "Marques & événements",
    desc: "Captation, films de marque et aftermovies pour les acteurs et les lieux du sport.",
    href: "/#contact",
  },
];

export default function AgenceBand() {
  return (
    <section className="bg-white py-20 text-ink md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            L&rsquo;agence · 360° sports agency
          </span>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Une agence créative dédiée au sport.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
            +3 Studio accompagne les joueurs pros, les clubs, les institutions et les
            marques du sport. Vidéo, photo, direction créative et graphisme : on
            construit des identités, on couvre les matchs et on développe la notoriété
            de ceux qui veulent passer un cap sur et en dehors du terrain.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BRANCHES.map((b) => (
            <Link
              key={b.title}
              href={b.href}
              className="group rounded-2xl border border-bone-200 bg-bone-50 p-6 transition hover:border-ink/25 hover:bg-white"
            >
              <h3 className="text-lg font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{b.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                En savoir plus &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
