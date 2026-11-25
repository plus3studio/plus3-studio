import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import PlayersBanner from "@/components/PlayersBanner";
import Studio3Banner from "@/components/Studio3Banner";
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
      <Projects projects={projects} />
      <Studio3Banner />
      <Team />
      <PlayersBanner />
      <CTA />
      <Footer />
    </main>
  );
}
