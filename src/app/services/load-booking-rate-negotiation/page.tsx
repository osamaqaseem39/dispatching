import Image from "next/image";

export const metadata = {
  title: "Load Booking & Rate Negotiation – Freight Logistic LLC",
  description: "High-paying loads nationwide with professional rate negotiation and broker communication.",
};

export default function LoadBookingNegotiationPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Load Booking & Rate Negotiation</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">We connect you with trusted brokers and shippers and secure strong market rates daily.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/services/service2.jpg" alt="Load Booking and Negotiation" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">How We Help</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Broker vetting and lane matching</li>
              <li>Rate negotiation and detention/layover protection</li>
              <li>Confirmations, updates, and paperwork</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Outcomes</h2>
            <p className="mt-2 text-sm text-neutral-700">Consistent, high-quality freight with reduced deadhead and better weekly revenue.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Request Loads</a>
          </div>
        </div>
      </section>
    </main>
  );
}


