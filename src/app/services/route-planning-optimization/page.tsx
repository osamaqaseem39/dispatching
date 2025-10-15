import Image from "next/image";

export const metadata = {
  title: "Route Planning & Trip Optimization – Freight Logistic LLC",
  description: "Advanced planning for fuel savings, on-time deliveries, and higher profitability.",
};

export default function RoutePlanningOptimizationPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Route Planning & Trip Optimization</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">Smarter routes that cut deadhead and improve delivery performance.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/services/service4.jpg" alt="Route Planning and Optimization" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">What We Optimize</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Deadhead and fuel efficiency</li>
              <li>Pickup and delivery timing</li>
              <li>Preferred lanes and regions</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Results</h2>
            <p className="mt-2 text-sm text-neutral-700">Higher RPM, better on-time rates, and less downtime between loads.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Optimize My Routes</a>
          </div>
        </div>
      </section>
    </main>
  );
}


