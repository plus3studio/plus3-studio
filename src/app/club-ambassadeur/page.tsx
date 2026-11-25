import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLogoPath } from "@/lib/getLogo";

export const metadata: Metadata = {
  title:
    "Club Ambassadeur +3 Studio — La Ligugéenne Football | Étude de cas",
  description:
    "Comment +3 Studio a offert une saison de communication de niveau professionnel à La Ligugéenne, club amateur de Régional 2. Nouvelle identité, maillot collector Kappa, 639 584 vues en un mois et une couverture presse internationale (SoccerBible, Footy Headlines, France 3).",
  alternates: { canonical: "/club-ambassadeur" },
};

const STATS = [
  { value: "639 584", label: "vues cumulées en un mois" },
  { value: "310 302", label: "comptes touchés" },
  { value: "14 883", label: "interactions" },
  { value: "×2,07", label: "de vues par publication vs saison précédente" },
  { value: "9 pays", label: "2 continents, 13 départements" },
  { value: "4 400", label: "sessions sur le nouveau site" },
];

const PRESSE = [
  { name: "SoccerBible", note: "Royaume-Uni · +5M de communauté" },
  { name: "Dégaine by So Foot", note: "France · référence maillots" },
  { name: "Footy Headlines", note: "International · maillots" },
  { name: "Football Shirts Culture", note: "International" },
  { name: "France 3 Nouvelle-Aquitaine", note: "Article" },
  { name: "La Nouvelle République", note: "Vienne" },
  { name: "beIN Sports", note: "À venir · Salon VIP" },
];

type Acte = {
  num: string;
  title: string;
  sub: string;
  desc: string;
  image?: string;
  ratio?: "4/3" | "3/4";
  youtube?: string;
  links?: { url: string; label: string }[];
};

const ACTES: Acte[] = [
  {
    num: "Acte I",
    title: "L’Armorial",
    sub: "Logo & identité",
    desc: "Une nouvelle identité visuelle pour le club, dévoilée le 30 juillet. Un seul visuel de logo a cumulé 33 205 vues, sept fois la moyenne d’une publication du club.",
    image: "/cas-ligugeenne/identite-1.jpg",
    links: [{ url: "https://www.instagram.com/p/DbbGjEHjFBJ/", label: "Voir le post" }],
  },
  {
    num: "Acte II",
    title: "La Tunique",
    sub: "Le maillot",
    desc: "Un maillot collector produit avec Kappa, dévoilé le 19 août : nouveau blason, pinstripes et références au carrelage de l’abbaye de Ligugé. Une seule publication a cumulé 76 758 vues.",
    image: "/cas-ligugeenne/maillot-1.jpg",
    ratio: "3/4",
    youtube: "k9e4nmq5Xpc",
    links: [{ url: "https://www.instagram.com/p/DcOB_iFCFVp/", label: "Voir le post" }],
  },
  {
    num: "Acte III",
    title: "Le Serment",
    sub: "Les recrues",
    desc: "La présentation des recrues de la saison, mise en scène comme un engagement envers le club et ses couleurs.",
    links: [{ url: "https://www.instagram.com/p/DcgyAkYjOE2/", label: "Voir le post" }],
  },
  {
    num: "Acte IV",
    title: "Le Foyer",
    sub: "Site e-commerce & application",
    desc: "Un site internet e-commerce et une application pour donner au club sa propre boutique et son propre média. Site réalisé par Apollimorphie × Fluid.Collectif.",
    links: [{ url: "https://fluidcollectif.com/", label: "Fluid.Collectif" }],
  },
  {
    num: "Acte V",
    title: "Le Prélude",
    sub: "Lancement de la saison",
    desc: "Le coup d’envoi de la saison : un teaser pour lancer l’attente, puis un aftermovie du match d’ouverture.",
    links: [
      { url: "https://www.instagram.com/p/Dc6PnGTsZJg/", label: "Teaser" },
      { url: "https://www.instagram.com/p/Ddes988x84m/", label: "Aftermovie" },
    ],
  },
];

function YouTube({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink md:rounded-2xl">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}?cc_load_policy=0&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function ClubAmbassadeurPage() {
  const logoSrc = getLogoPath();

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar logoSrc={logoSrc} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/cas-ligugeenne/hero.jpg"
          alt="La Ligugéenne — maillot collector Club Ambassadeur +3 Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center md:px-10 md:py-32">
          <img
            src="/ca-liguge-logo.png"
            alt="Ligugé — Club Ambassadeur +3 Studio"
            className="mx-auto w-full max-w-[220px] md:max-w-xs"
          />
          <h1 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
            La Ligug&eacute;enne Football
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/60 md:text-base">
            Un club de R&eacute;gional 2, dans un village de 3 500 habitants, exist&eacute;
            au m&ecirc;me endroit que les clubs professionnels. Pas avec un budget,
            avec une m&eacute;thode.
          </p>
        </div>
      </section>

      {/* LE PROGRAMME */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Le programme
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Une saison de communication offerte &agrave; un club amateur
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80 md:text-lg">
            <p>
              Le Club Ambassadeur est un programme con&ccedil;u par +3 Studio avec le
              District de Football de la Vienne. Le principe : offrir &agrave; un club
              amateur une saison compl&egrave;te de communication de niveau
              professionnel, gratuitement, pour prouver qu&rsquo;un petit club peut
              exister comme les grands.
            </p>
            <p>
              &Agrave; l&rsquo;issue d&rsquo;un appel &agrave; candidature, La Ligug&eacute;enne
              Football, club de R&eacute;gional 2 bas&eacute; &agrave; Ligug&eacute; (Vienne,
              3 500 habitants, 250 licenci&eacute;s), a &eacute;t&eacute; choisie pour
              l&rsquo;&eacute;dition 2026-2027.
            </p>
          </div>
        </div>
      </section>

      {/* L'APPEL À CANDIDATURE */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Le point de départ
          </span>
          <h2 className="mt-3 mb-8 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            L&rsquo;appel &agrave; candidature
          </h2>
          <YouTube id="jw55adhZCKE" title="Club Ambassadeur — Appel à candidature" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
            Une vid&eacute;o manifeste pour lancer le programme et inviter les clubs du
            territoire &agrave; candidater. Cadrage Victor Gagneux, montage Christopher
            Debenham, direction artistique Christopher Debenham &amp; Alix Hubert.
          </p>
        </div>
      </section>

      {/* LE CHOIX — ANNONCE */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Le choix
          </span>
          <h2 className="mt-3 mb-8 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            L&rsquo;annonce du club ambassadeur
          </h2>
          <YouTube id="WDz15X1u1nU" title="La Ligugéenne — Annonce du Club Ambassadeur" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
            Un choix m&eacute;ticuleux. Apr&egrave;s avoir lu les r&eacute;ponses de
            chaque candidature et visit&eacute; les trois finalistes, La Ligug&eacute;enne
            s&rsquo;est impos&eacute;e. L&rsquo;annonce, film&eacute;e dans le village, a
            r&eacute;v&eacute;l&eacute; le club choisi pour l&rsquo;&eacute;dition
            2026-2027.
          </p>
        </div>
      </section>

      {/* LE PROJET — ACTES */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Ce qu&rsquo;on a produit
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Le projet, acte par acte
          </h2>

          <div className="mt-12 space-y-16 md:space-y-24">
            {ACTES.map((a, i) => (
              <div
                key={a.num}
                className="grid items-center gap-8 md:grid-cols-2"
              >
                {/* Média */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  {a.image ? (
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-ink ${
                        a.ratio === "3/4" ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={a.image}
                        alt={`La Ligugéenne — ${a.title}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-bone-200 bg-bone-50">
                      <span className="font-display text-6xl italic text-mist-300 md:text-7xl">
                        {a.num}
                      </span>
                    </div>
                  )}
                </div>

                {/* Texte */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="font-display text-xl italic text-lime">{a.num}</p>
                  <h3 className="mt-1 text-2xl font-bold text-ink md:text-3xl">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mist-500">
                    {a.sub}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">
                    {a.desc}
                  </p>
                  {a.links && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {a.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:border-ink/40"
                        >
                          {l.label} <span>&#8599;</span>
                        </a>
                      ))}
                    </div>
                  )}
                  {a.youtube && (
                    <div className="mt-5">
                      <YouTube id={a.youtube} title={`La Ligugéenne — ${a.title}`} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Galerie */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
            {["maillot-2", "maillot-3", "design-1", "design-2"].map((n) => (
              <div
                key={n}
                className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink"
              >
                <Image
                  src={`/cas-ligugeenne/${n}.jpg`}
                  alt="La Ligugéenne — shooting maillot collector"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LES RÉSULTATS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Les résultats
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Un mois, un lancement international
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.value}>
                <p className="text-3xl font-bold text-lime md:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-white/60">
            Le tout sans aucune publicit&eacute; ni m&eacute;dia pay&eacute;. Chez
            SoccerBible, un club de septi&egrave;me division fran&ccedil;aise publi&eacute;
            le m&ecirc;me jour que l&rsquo;Atl&eacute;tico de Madrid et le Bayern Munich.
          </p>
        </div>
      </section>

      {/* LA PRESSE */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            On en a parlé
          </span>
          <h2 className="mt-3 mb-10 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Les retomb&eacute;es presse
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRESSE.map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-bone-200 bg-white p-5"
              >
                <p className="font-bold text-ink">{m.name}</p>
                <p className="mt-1 text-sm text-mist-500">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LES VENTES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Le maillot
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Une boutique qui a franchi les fronti&egrave;res
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
            Ouvert &agrave; la vente le 18 ao&ucirc;t, le maillot collector a &eacute;t&eacute;
            command&eacute; depuis neuf pays (France, &Eacute;cosse, Irlande, Angleterre,
            Finlande, Allemagne, &Eacute;tats-Unis, Br&eacute;sil, Trinit&eacute;-et-Tobago)
            et treize d&eacute;partements fran&ccedil;ais. Le stock initial a &eacute;t&eacute;
            &eacute;coul&eacute;. Une seconde s&eacute;rie Kappa de 100 exemplaires a suivi,
            elle aussi aujourd&rsquo;hui en rupture.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Un projet &agrave; porter plus haut&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/55 md:text-lg">
            On produit pour des clubs et des marques du sport, du club amateur au
            niveau national. Ce dispositif n&rsquo;&eacute;tait pas un budget,
            c&rsquo;&eacute;tait une m&eacute;thode.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition hover:brightness-95"
            >
              Nous contacter &rarr;
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Retour &agrave; l&rsquo;accueil
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
