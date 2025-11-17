import ServicesPage from "@/components/ServicesPage";
import Glows from "@/components/Glows";

export const metadata = {
  title: "Truck Dispatching & Road Freight Services in the USA | Freights Logistic",
  description:
    "Explore Freights Logistic's professional road freight services — including truck dispatching, load booking, documentation, and route optimization across the U.S.",
};

export default function ServicesPageMain() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <Glows count={3} colors={["blue"]} />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Services</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            At Freights Logistic, we specialize in road freight dispatching — ensuring your trucks stay loaded, your routes stay optimized, and your income stays consistent.
          </p>
        </div>
      </section>
      <ServicesPage />
    </main>
  );
}


