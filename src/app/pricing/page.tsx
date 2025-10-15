import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Pricing – Freight Logistic LLC",
  description: "Transparent pricing for owner-operators and fleets.",
};

export default function PricingPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Pricing</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">No hidden fees. Clear and fair.</p>
        </div>
      </section>
      <Pricing />
    </main>
  );
}


