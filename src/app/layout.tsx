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
  title: `${site.name} — ${site.tagline}`,
  description:
    "Trois regards créatifs, une seule vision. Direction artistique, vidéo, photo — on construit l'image de vos clubs et événements sportifs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${instrumentSerif.variable}`}>
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
