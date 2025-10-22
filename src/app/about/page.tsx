export const metadata = {
  title: "About – Freight Logistic LLC",
  description: "Trusted partner for professional truck dispatching across the USA.",
};

import Glows from "@/components/Glows";

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <Glows count={3} colors={["blue"]} />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About Freight Logistic LLC</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            We are a U.S.-based truck dispatch company dedicated to empowering carriers, owner-operators, and small fleets with transparent communication and dependable support.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Mission</h2>
              <p className="mt-2 text-sm text-neutral-700">Help trucking professionals operate efficiently and profitably through reliable dispatching, transparent communication, and strong industry partnerships.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Vision</h2>
              <p className="mt-2 text-sm text-neutral-700">Become the most trusted and carrier-focused truck dispatch company in the United States, setting new standards in reliability and service excellence.</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Core Values</h2>
            <ul className="mt-3 text-sm text-neutral-700 grid gap-3 md:grid-cols-2 list-disc pl-5">
              <li><span className="font-medium">Integrity:</span> Honest and transparent in every transaction.</li>
              <li><span className="font-medium">Reliability:</span> Always available, always accountable.</li>
              <li><span className="font-medium">Efficiency:</span> Smart dispatching for better profits.</li>
              <li><span className="font-medium">Partnership:</span> We grow when our carriers grow.</li>
              <li><span className="font-medium">Innovation:</span> Modern tools for smarter routing and operations.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


