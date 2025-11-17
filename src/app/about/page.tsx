export const metadata = {
  title: "About Freights Logistic | Trusted Truck Dispatching Experts in the USA",
  description: "Learn more about Freights Logistic — a U.S.-based road freight dispatching company helping truck drivers and fleets maximize revenue with smart logistics solutions.",
};

import Glows from "@/components/Glows";

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <Glows count={3} colors={["blue"]} />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Who We Are</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            At Freights Logistic, trucking is more than a business — it's our passion. We're a team of experienced dispatchers and logistics experts dedicated to simplifying the trucking journey for owner-operators and small fleets.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p className="mt-2 text-sm text-neutral-700">To empower drivers and businesses with efficient dispatching, fair load deals, and stress-free operations across the U.S.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-sm text-neutral-700">To become America's most trusted name in road freight logistics, by blending technology, transparency, and teamwork.</p>
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
          <div className="text-center mt-8">
            <a href="/contact" className="inline-flex items-center rounded-lg bg-black px-8 py-4 text-white text-lg font-medium hover:bg-neutral-800 transition-colors">
              Partner with Freights Logistic — let's move America together.
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


