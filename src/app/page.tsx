import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Services />
      <Benefits />
      <Cta />
      <Contact />
    </main>
  );
}
