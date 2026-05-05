import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import LaserSection from "./components/LaserSection";
import CrioSection from "./components/CrioSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <LaserSection />
      <CrioSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
