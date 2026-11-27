import Image from "next/image";
import Link from "next/link";

const DOMAINES = [
  {
    title: "Clubs & institutions",
    desc: "Identité, contenu et couverture de match, du club amateur au niveau national.",
    img: "/agence/clubs.jpg",
    top: true,
  },
  {
    title: "Joueurs",
    players: true,
    desc: "Personal branding, shooting et vidéo pour les athlètes.",
    img: "/agence/joueurs.jpg",
    top: false,
  },
  {
    title: "Marques & événements",
    desc: "Captation, films de marque et aftermovies pour les marques et les événements, dans le sport comme au-delà.",
    img: "/agence/marques.jpg",
    top: false,
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
            de ceux qui veulent passer un cap, sur et en dehors du terrain.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {DOMAINES.map((d) => (
            <div
              key={d.title}
              className="relative overflow-hidden rounded-2xl bg-ink"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={`object-cover ${d.top ? "object-top" : "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  {d.title}
                  {"players" in d && d.players && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src="/players-logo.png"
                      alt="+3 Players"
                      className="h-4 w-auto"
                    />
                  )}
                </h3>
                <p className="mt-1 text-sm text-white/75">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/agence"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            En savoir plus sur l&rsquo;agence
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
