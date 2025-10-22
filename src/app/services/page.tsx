import ServicesPage from "@/components/ServicesPage";
import Glows from "@/components/Glows";

export const metadata = {
  title: "Services – Freight Logistic LLC",
  description:
    "Full-service truck dispatching: load booking, rate negotiation, paperwork, route optimization, compliance, and 24/7 support.",
};

export default function ServicesPageMain() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <Glows count={3} colors={["blue"]} />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Services</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            Reliable, affordable, and transparent dispatching solutions tailored to your lanes, equipment, and schedule.
          </p>
        </div>
      </section>
      <ServicesPage />
    </main>
  );
}


