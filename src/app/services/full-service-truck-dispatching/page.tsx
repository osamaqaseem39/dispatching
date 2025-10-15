import Image from "next/image";

export const metadata = {
  title: "Full-Service Truck Dispatching – Freight Logistic LLC",
  description: "End-to-end dispatch: load search, rate negotiation, paperwork, broker communication, and driver support. No forced dispatch.",
};

export default function FullServiceDispatchPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Full-Service Truck Dispatching</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">We handle everything — finding top-paying loads, negotiating rates, completing paperwork, and managing broker communications.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/service1.jpg" alt="Full-Service Dispatching" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">What’s Included</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Load search and booking with trusted brokers</li>
              <li>Rate negotiation and confirmations</li>
              <li>Paperwork and back-office coordination</li>
              <li>ETAs, updates, and detention/TONU support</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Why It Works</h2>
            <p className="mt-2 text-sm text-neutral-700">No forced dispatch. Clear fees. You approve every load. Our focus is maximizing revenue while reducing downtime.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Get Started</a>
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Service Highlights</h3>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Dedicated dispatcher aligned to your lanes</li>
              <li>Transparent rate confirmations every time</li>
              <li>Proactive communication with shippers/brokers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Who It’s For</h3>
            <p className="mt-3 text-sm text-neutral-700">Owner-operators and small fleets seeking consistent freight, stronger RPM, and minimal admin work.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Getting Started</h3>
            <p className="mt-3 text-sm text-neutral-700">Complete carrier setup, share lanes and preferences, and approve loads— we handle the rest.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


