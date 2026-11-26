import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgenceBand from "@/components/AgenceBand";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import PlayersBanner from "@/components/PlayersBanner";
import ClubAmbassadeurBanner from "@/components/ClubAmbassadeurBanner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealMount from "@/components/RevealMount";
import { getProjects } from "@/lib/getProjects";
import { getLogoPath } from "@/lib/getLogo";

export default function Home() {
  const projects = getProjects();
  const logoSrc = getLogoPath();

  return (
    <main className="relative min-h-screen bg-white">
      <RevealMount />
      <Navbar logoSrc={logoSrc} />
      <Hero />
      <AgenceBand />
      <Projects projects={projects} />
      <ClubAmbassadeurBanner />
      <Team />
      <PlayersBanner />
      <CTA />
      <Footer />
    </main>
  );
}
