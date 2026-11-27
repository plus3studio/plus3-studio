import type { Metadata } from "next";
import { Poppins, Instrument_Serif } from "next/font/google";
import { site } from "@/data/site";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plus3studio.fr"),
  title: {
    default:
      "+3 Studio — Agence de communication sportive 360° à Poitiers",
    template: "%s | +3 Studio",
  },
  description:
    "+3 Studio, agence créative dédiée au sport près de Poitiers (Vienne, Nouvelle-Aquitaine) : vidéo, photo, direction créative et graphisme pour les joueurs, clubs, institutions et marques du sport.",
  keywords: [
    "agence de communication sport",
    "agence créative sportive",
    "communication sportive",
    "vidéo sport",
    "photo sport",
    "direction artistique sport",
    "Poitiers",
    "Vienne",
    "Nouvelle-Aquitaine",
    "+3 Studio",
    "+3 Players",
    "club ambassadeur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://plus3studio.fr",
    siteName: "+3 Studio",
    title: "+3 Studio — Agence de communication sportive 360°",
    description:
      "Agence créative dédiée au sport : vidéo, photo, direction créative et graphisme pour les joueurs, clubs, institutions et marques.",
  },
  twitter: {
    card: "summary_large_image",
    title: "+3 Studio — Agence de communication sportive 360°",
    description:
      "Agence créative dédiée au sport : vidéo, photo, direction créative et graphisme.",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "+3 Studio",
  description:
    "Agence créative dédiée au sport : vidéo, photo, direction créative et graphisme pour les joueurs, clubs, institutions et marques du sport.",
  url: "https://plus3studio.fr",
  email: site.email,
  areaServed: "France",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saint-Benoît",
    addressRegion: "Nouvelle-Aquitaine",
    postalCode: "86280",
    addressCountry: "FR",
  },
  sameAs: site.socials.map((s) => s.href),
  knowsAbout: [
    "Communication sportive",
    "Production vidéo",
    "Photographie de sport",
    "Direction artistique",
    "Personal branding de joueurs",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${instrumentSerif.variable}`}>
      <body className="bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
