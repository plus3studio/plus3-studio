import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import RevealMount from "@/components/RevealMount";
import FranceMap from "@/components/FranceMap";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import SocialIcons from "@/components/SocialIcons";
import { getLogoPath } from "@/lib/getLogo";

export const metadata: Metadata = {
  title: "Contact — Agence vidéo & photo sport près de Poitiers",
  description:
    "Contactez +3 Studio, agence de communication sportive basée près de Poitiers (Vienne). Vidéo, photo, direction créative et graphisme pour les clubs, joueurs, institutions et marques. On se déplace partout en France et à l'international.",
  alternates: { canonical: "/contact" },
};

const FAQ: FaqItem[] = [
  {
    q: "Quels services propose +3 Studio ?",
    a: "+3 Studio est une agence de communication dédiée au sport : vidéo, photo, direction créative, graphisme, identité visuelle, couverture de match, reportage et gestion des réseaux sociaux. On accompagne les clubs, les joueurs, les institutions et les marques, du club amateur au niveau national.",
  },
  {
    q: "Où êtes-vous basés et où vous déplacez-vous ?",
    a: "On est basés près de Poitiers (Vienne, Nouvelle-Aquitaine) et on se déplace partout en France et à l’international. Position centrale oblige, Paris est à environ 1h30 en TGV, Bordeaux à environ 1h et Nantes à environ 2h : on intervient facilement dans toute la France, et on tourne régulièrement à l’étranger, notamment en Espagne.",
  },
  {
    q: "Travaillez-vous avec les clubs amateurs ou seulement les clubs pros ?",
    a: "Les deux. L’idée de départ de +3 Studio, c’est justement de donner à un club amateur la même qualité d’image qu’un club pro. On adapte l’accompagnement au niveau et au budget, du club de district à la structure professionnelle.",
  },
  {
    q: "Combien coûte une vidéo ou une prestation photo ?",
    a: "Chaque projet est différent : le prix dépend du format, de la durée, du nombre de jours de tournage et des livrables attendus. On établit un devis sur mesure après un premier échange. Le plus simple, c’est de nous décrire votre besoin via le formulaire pour recevoir une proposition.",
  },
  {
    q: "Faites-vous de la photo et de la vidéo ?",
    a: "Oui, les deux, souvent sur un même projet. On couvre la vidéo (match, lifestyle, film de marque, aftermovie, reels), la photo (shooting, match day, portrait) et toute la partie création graphique qui va avec.",
  },
  {
    q: "Qu’est-ce que +3 Players ?",
    a: "+3 Players, c’est l’offre de +3 Studio dédiée aux joueurs et aux athlètes : personal branding, contenu réseaux, visuels match day, vidéo lifestyle et gestion d’image. Un accompagnement pensé pour exister en dehors du terrain.",
  },
  {
    q: "Gérez-vous les réseaux sociaux des clubs et des joueurs ?",
    a: "Oui. On peut produire le contenu ponctuellement ou gérer les réseaux sur la durée : ligne éditoriale, calendrier, création des visuels et des vidéos, couverture de match. On s’adapte selon que vous cherchez un coup de main ou une prise en charge complète.",
  },
  {
    q: "Travaillez-vous aussi pour les entreprises hors sport ?",
    a: "Oui, via CD Studio, la structure dédiée au corporate et à l’événementiel tous secteurs : films d’entreprise, captation, reportage et contenu de marque. +3 Studio reste spécialisée sport, CD Studio couvre le reste.",
  },
  {
    q: "Comment se passe une collaboration avec +3 Studio ?",
    a: "On commence par un échange pour comprendre votre projet, vos objectifs et votre timing. On vous envoie un devis, puis on cale les dates de tournage. Après production, vous recevez vos livrables prêts à publier. On peut intervenir sur une prestation ponctuelle comme sur un accompagnement de saison.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const TRAJETS = [
  { ville: "Paris", temps: "1h30 en TGV" },
  { ville: "Bordeaux", temps: "1h en TGV" },
  { ville: "Nantes", temps: "~2h" },
  { ville: "Lyon", temps: "train ou avion" },
  { ville: "International", temps: "Espagne & ailleurs" },
];

export default function ContactPage() {
  const logoSrc = getLogoPath();

  return (
    <main className="relative min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RevealMount />
      <Navbar logoSrc={logoSrc} />

      {/* HERO + LOCALISATION (fond sombre) */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime/15 blur-[130px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent"
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-20 md:px-10 md:pt-40 md:pb-28">
          <span className="text-[10px] uppercase tracking-[0.25em] text-lime">
            Contact
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Parlons de votre projet.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/60 md:text-lg">
            Un club à faire exister, un joueur à mettre en lumière, une marque à faire
            parler dans le sport : dites-nous ce que vous avez en tête, on revient vers
            vous rapidement.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition hover:brightness-95"
          >
            Nous contacter &rarr;
          </a>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Colonne gauche : localisation + réseaux */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Où nous trouver
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/70">
                Basés près de <strong className="text-white">Poitiers</strong> (Vienne,
                Nouvelle-Aquitaine). On se déplace{" "}
                <strong className="text-white">partout en France</strong>
                {" "}et à l&rsquo;international.
              </p>

              <div className="mt-6 flex max-w-md flex-wrap gap-2">
                {TRAJETS.map((t) => (
                  <span
                    key={t.ville}
                    className="inline-flex items-baseline gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2"
                  >
                    <span className="text-sm font-semibold text-white">{t.ville}</span>
                    <span className="text-xs text-white/50">{t.temps}</span>
                  </span>
                ))}
              </div>

              <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-white/40">
                Sur les réseaux
              </p>
              <SocialIcons variant="light" className="mt-4" />
            </div>

            {/* Colonne droite : carte France */}
            <div className="mx-auto w-full max-w-md">
              <FranceMap />
            </div>
          </div>
        </div>
      </section>

      {/* DEUX ENTRÉES */}
      <section className="bg-bone-50 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-5 px-5 md:grid-cols-2 md:px-10">
          {/* Club / institution / marque */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-bone-200 bg-white transition hover:shadow-md">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/illustrations/tribune-fumis.jpg"
                alt="Ambiance de match"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="text-lg font-bold text-ink">Club, institution ou marque</p>
              <p className="mt-2 flex-1 text-sm text-ink/65">
                Communication, identité, couverture de match, contenu de saison : on
                construit votre image dans le sport.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
              >
                Décrire mon projet &rarr;
              </a>
            </div>
          </div>

          {/* Joueur */}
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-bone-200 bg-white transition hover:shadow-md">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/agence/joueur-auba.jpg"
                alt="Joueur accompagné par +3 Players"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ objectPosition: "50% 25%" }}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="flex items-center gap-2 text-lg font-bold text-ink">
                Vous êtes un joueur
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/players-logo-dark.png" alt="+3 Players" className="h-5 w-auto" />
              </p>
              <p className="mt-2 flex-1 text-sm text-ink/65">
                Personal branding, contenu réseaux, visuels match day et vidéo
                lifestyle : l&rsquo;offre +3 Players est faite pour vous.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  Nous contacter &rarr;
                </a>
                <Link
                  href="/plus3-players"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-bone-200 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
                >
                  Découvrir +3 Players
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULAIRE (id=contact) — l'action principale d'abord */}
      <CTA />

      {/* FAQ — répond aux dernières questions juste après */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-mist-500">
            Questions fréquentes
          </span>
          <h2 className="mt-3 mb-8 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            Vos questions
          </h2>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
