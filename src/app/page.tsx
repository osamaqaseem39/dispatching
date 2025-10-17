import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <Services />
      <AboutUs />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Cta />
      <Contact />
    </main>
  );
}
