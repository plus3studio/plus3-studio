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
    a: "+3 Studio est une agence de communication dédiée au sport : vidéo, photo, graphisme et direction artistique, identité visuelle, couverture de match et d’événement, reportage, community management et stratégie de contenu. On accompagne les joueurs professionnels, les clubs, les institutions et les marques, du club amateur au niveau international.",
  },
  {
    q: "Où êtes-vous basés et où vous déplacez-vous ?",
    a: "On est basés à Poitiers (Vienne, Nouvelle-Aquitaine) et on intervient partout en France : Paris à 1h30 en TGV, Bordeaux à 1h, Nantes à 2h. On s’appuie aussi sur un réseau de créatifs partout en France et en Europe, qui nous rend rapidement disponibles peu importe où se situe le besoin. On a également la possibilité de tourner à l’étranger.",
  },
  {
    q: "Travaillez-vous avec les clubs professionnels ou amateurs ?",
    a: "Les deux. Les clubs professionnels font partie de nos clients, au même titre que les clubs amateurs. Notre conviction : offrir à chaque structure une qualité d’image de niveau professionnel, du club de district au club national. On adapte l’accompagnement au niveau, aux objectifs et au budget.",
  },
  {
    q: "Combien coûte une vidéo, une prestation photo ou graphique ?",
    a: "Chaque besoin est différent : le prix dépend du format, du volume, du nombre de jours de production et des livrables attendus, en vidéo, en photo comme en graphisme. On établit un devis sur mesure après un premier échange. Le plus simple : décrivez-nous votre projet via le formulaire pour recevoir une proposition.",
  },
  {
    q: "Pouvez-vous gérer la vidéo, la photo et le graphisme sur un même projet ?",
    a: "Oui, c’est même notre force : réunir la vidéo, la photo, le graphisme et la direction artistique sous une même direction créative, pour une image cohérente d’un bout à l’autre du projet.",
  },
  {
    q: "Qu’est-ce que +3 Players ?",
    a: "+3 Players, c’est l’offre de +3 Studio dédiée aux joueurs et aux athlètes : personal branding, contenu réseaux, visuels match day, vidéo lifestyle et gestion d’image. Un accompagnement pensé pour exister sur et en dehors du terrain.",
  },
  {
    q: "Gérez-vous les réseaux sociaux et le community management ?",
    a: "Oui. On intervient en création de contenu ponctuelle ou en gestion sur la durée : community management, ligne éditoriale, calendrier de publication, création des visuels et des vidéos, couverture de match. On s’adapte, d’un renfort ponctuel à une prise en charge complète.",
  },
  {
    q: "Travaillez-vous aussi pour des marques hors sport ?",
    a: "Oui. Au-delà du sport, on accompagne des marques et des entreprises sur leurs besoins de communication, de l’événementiel au corporate. On cumule une vraie expérience hors sport et on s’adapte à chaque projet : mise en avant de vos partenaires, contenu de marque, film d’entreprise. Parlons-en.",
  },
  {
    q: "Comment se passe une collaboration avec +3 Studio ?",
    a: "On commence par un échange pour cerner votre projet, vos objectifs et vos échéances. On vous envoie une proposition et un devis, puis on pose le planning ensemble. On produit dans les temps et vous recevez vos livrables prêts à publier et à utiliser. On intervient aussi bien sur une prestation ponctuelle que sur un accompagnement de saison.",
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
  { ville: "Nantes", temps: "2h en train" },
  { ville: "Lyon", temps: "1h en avion" },
  { ville: "International", temps: "partout dans le monde" },
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
                Basés à <strong className="text-white">Poitiers</strong> (Vienne,
                Nouvelle-Aquitaine). On se déplace{" "}
                <strong className="text-white">partout en France</strong>
                {" "}et au-delà.
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
        <div className="mx-auto max-w-5xl px-5 md:px-10">
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
