import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsResultats from "@/components/StatsResultats";
import ActesAccordion, { type Acte } from "@/components/ActesAccordion";
import PresseCarousel from "@/components/PresseCarousel";
import RevealMount from "@/components/RevealMount";
import { getLogoPath } from "@/lib/getLogo";

export const metadata: Metadata = {
  title: "Club Ambassadeur — La Ligugéenne Football | Étude de cas",
  description:
    "Comment +3 Studio a offert une saison de communication de niveau professionnel à La Ligugéenne, club amateur de Régional 2. Nouvelle identité, maillot collector Kappa, 639 584 vues en un mois et une couverture presse internationale (SoccerBible, Footy Headlines, France 3).",
  alternates: { canonical: "/club-ambassadeur" },
};

const PRESSE = [
  {
    outlet: "beIN Sports",
    note: "TV · Salon VIP",
    img: "https://i.ytimg.com/vi/V5FTckJjhtc/hqdefault.jpg",
    desc: "Le maillot à l'honneur dans l'émission Salon VIP de beIN Sports.",
    href: "#",
    video: "V5FTckJjhtc",
  },
  {
    outlet: "SoccerBible",
    note: "International",
    img: "/cas-ligugeenne/presse/01.jpg",
    desc: "Le maillot de La Ligugéenne raconté par l'une des références mondiales du maillot.",
    href: "#",
  },
  {
    outlet: "Footy Headlines",
    note: "International",
    img: "/cas-ligugeenne/presse/03.jpg",
    desc: "La tunique d'un club de Régional 2 sur la référence mondiale du maillot de football.",
    href: "#",
  },
  {
    outlet: "Football Shirt Culture",
    note: "International",
    img: "/cas-ligugeenne/presse/04.jpg",
    desc: "Un club amateur français dans un média suivi par des passionnés du monde entier.",
    href: "#",
  },
  {
    outlet: "Dégaine by So Foot",
    note: "France",
    img: "/cas-ligugeenne/presse/05.jpg",
    desc: "Le projet Club Ambassadeur raconté par le média lifestyle de So Foot.",
    href: "#",
  },
  {
    outlet: "France 3 Nouvelle-Aquitaine",
    note: "France",
    img: "/cas-ligugeenne/presse/06.jpg",
    desc: "La chaîne régionale revient sur La Ligugéenne et la saison signée +3 Studio.",
    href: "#",
  },
  {
    outlet: "La Nouvelle République",
    note: "Vienne",
    img: "/cas-ligugeenne/presse/07.jpg",
    desc: "La presse locale revient sur l'aventure du club de Ligugé.",
    href: "#",
  },
  {
    outlet: "Felipe Saad",
    note: "Réactions",
    img: "/cas-ligugeenne/presse/08.jpg",
    desc: "Le maillot repéré et partagé par d'anciens joueurs professionnels.",
    href: "#",
  },
];

const ACTES: Acte[] = [
  {
    num: "Acte I",
    title: "L’Armorial",
    sub: "Logo & identité",
    desc: "Une nouvelle identité dévoilée le 30 juillet. Un club centenaire, plus de cent ans d’histoire : cette identité, on ne l’a pas inventée, on en a hérité. Le blason fait vivre trois âmes : le prestige de Ligugé et de son abbaye, la mémoire industrielle de ses usines, et le cœur populaire du club. Un blason patiné, taillé pour durer. Un seul visuel a cumulé 33 205 vues, sept fois la moyenne d’une publication du club.",
    media: { kind: "instagram", url: "https://www.instagram.com/p/DbbGjEHjFBJ/" },
  },
  {
    num: "Acte II",
    title: "La Tunique",
    sub: "Le maillot",
    desc: "Un maillot collector produit avec Kappa, dévoilé le 19 août : nouveau blason, références au carrelage de l’abbaye de Ligugé sur les manches et le bas du maillot, et des lignes qui rappellent le maillot noir et blanc historique du club. Une seule publication a cumulé 76 758 vues.",
    media: { kind: "instagram", url: "https://www.instagram.com/p/DcOB_iFCFVp/" },
    youtube: "k9e4nmq5Xpc",
    gallery: true,
    credit: "Un maillot conçu avec Kappa · direction artistique +3 Studio",
    link: { label: "Une campagne qui a fait parler", href: "#presse" },
  },
  {
    num: "Acte III",
    title: "Le Serment",
    sub: "Les recrues",
    desc: "La présentation des recrues de la saison, mise en scène comme un engagement envers le club et ses couleurs.",
    media: { kind: "instagram", url: "https://www.instagram.com/p/DcgyAkYjOE2/" },
  },
  {
    num: "Acte IV",
    title: "Le Foyer",
    sub: "Site e-commerce & application",
    desc: "Un site internet e-commerce et une application pour donner au club sa propre boutique et son propre média. Conçu par Apollimorphie, la créatrice, avec Fluid.Collectif.",
    media: { kind: "instagram", url: "https://www.instagram.com/p/Dc6DeFODMM2/" },
  },
  {
    num: "Acte V",
    title: "Le Prélude",
    sub: "Lancement de la saison",
    desc: "Le coup d’envoi de la saison : l’aftermovie du match d’ouverture, remporté 2-1. La saison démarre de la meilleure des façons.",
    media: { kind: "youtube", id: "wDk8zQQ1pjg" },
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
      <RevealMount />
      <Navbar logoSrc={logoSrc} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/cas-ligugeenne/hero.jpg"
          alt="La Ligugéenne — maillot collector Club Ambassadeur +3 Studio"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 18%" }}
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
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Le programme
          </span>
          <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
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
              3 500 habitants, 250 licenci&eacute;s), a &eacute;t&eacute; choisie comme
              premier Club Ambassadeur.
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
            r&eacute;v&eacute;l&eacute; tout le potentiel cr&eacute;atif qu&rsquo;on allait
            pouvoir exploiter avec le club tout au long de la saison.
          </p>
        </div>
      </section>

      {/* LE PROJET — ACTES */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="reveal text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Ce qu&rsquo;on a produit
          </span>
          <h2 className="reveal reveal-delay-1 mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Le projet, acte par acte
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70">
            Cinq actes, du blason au coup d&rsquo;envoi de la saison. Chaque acte a
            &eacute;t&eacute; pens&eacute; pour d&eacute;voiler le projet petit &agrave;
            petit, teaser et faire monter l&rsquo;attente jusqu&rsquo;au d&eacute;but de
            la saison. Les noms, eux, ont &eacute;t&eacute; puis&eacute;s dans
            l&rsquo;identit&eacute; du club, pour rester fid&egrave;les &agrave; son
            histoire &agrave; chaque &eacute;tape.
          </p>

          <ActesAccordion actes={ACTES} />

          <p className="mt-6 text-xs italic text-mist-400">
            Cliquez sur chaque acte pour le d&eacute;rouler.
          </p>
        </div>
      </section>

      {/* LES RÉSULTATS */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Les résultats
          </span>
          <StatsResultats />
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-white/60">
            Chez SoccerBible, un club de septi&egrave;me division fran&ccedil;aise
            publi&eacute; le m&ecirc;me jour que l&rsquo;Atl&eacute;tico de Madrid et le
            Bayern Munich.
          </p>
          <p className="mt-6 text-lg font-bold text-white md:text-xl">
            Le tout sans aucune publicit&eacute; ni m&eacute;dia pay&eacute;.
          </p>
        </div>
      </section>

      {/* LA PRESSE */}
      <section id="presse" className="scroll-mt-24 bg-bone-50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Ils en parlent
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            La Ligug&eacute;enne sous les projecteurs
          </h2>

          <PresseCarousel items={PRESSE} />
        </div>
      </section>

      {/* LES VENTES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2 md:px-10">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-ink">
            <Image
              src="/cas-ligugeenne/merci.jpg"
              alt="Le maillot collector de La Ligugéenne — merci"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
              Le maillot
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Une boutique qui a franchi les fronti&egrave;res
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
              Ouvert &agrave; la vente le 18 ao&ucirc;t, le maillot collector a
              &eacute;t&eacute; command&eacute; depuis neuf pays (France, &Eacute;cosse,
              Irlande, Angleterre, Finlande, Allemagne, &Eacute;tats-Unis, Br&eacute;sil,
              Trinit&eacute;-et-Tobago) et treize d&eacute;partements fran&ccedil;ais. Le
              stock initial a &eacute;t&eacute; &eacute;coul&eacute;. Une seconde
              s&eacute;rie a suivi, elle aussi aujourd&rsquo;hui en rupture.
            </p>
            <p className="mt-6 text-base font-semibold leading-relaxed text-ink">
              Et ce n&rsquo;est qu&rsquo;un d&eacute;but : d&rsquo;autres campagnes et
              activations sont en cr&eacute;ation pour continuer &agrave; faire vivre tout
              ce qu&rsquo;on a construit, tout au long de la saison.
            </p>
          </div>
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
            niveau national.
            <span className="mt-2 block font-semibold text-white">
              Ce dispositif n&rsquo;&eacute;tait pas un budget, c&rsquo;&eacute;tait une
              m&eacute;thode.
            </span>
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
