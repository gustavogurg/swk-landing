import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import SectorsStrip from "@/components/landing/SectorsStrip";
import Pillars from "@/components/landing/Pillars";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentiators from "@/components/landing/Differentiators";
import Contact from "@/components/landing/Contact";
import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <LandingHero />
        <SectorsStrip />
        <Pillars />
        <HowItWorks />
        <Differentiators />
        <Contact />
        <About />
      </main>
      <Footer />
    </>
  );
}
