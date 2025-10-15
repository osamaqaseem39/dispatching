import Image from "next/image";

export const metadata = {
  title: "Invoicing & Billing Assistance – Freight Logistic LLC",
  description: "Invoicing, POD submission, and broker follow-ups to help you get paid quickly.",
};

export default function InvoicingBillingPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Invoicing & Billing Assistance</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">We manage your invoicing workflow so cash flow stays steady and predictable.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/service6.jpg" alt="Invoicing and Billing Assistance" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">What We Handle</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Invoice creation and submission</li>
              <li>POD and documents collection</li>
              <li>Broker follow-ups and payment status</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Why It Matters</h2>
            <p className="mt-2 text-sm text-neutral-700">Spend more time driving while we chase paperwork and payment confirmation.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Improve Cash Flow</a>
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Service Highlights</h3>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>On-time invoicing and POD submission</li>
              <li>Payment status monitoring</li>
              <li>Clear audit trail for documents</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Who It’s For</h3>
            <p className="mt-3 text-sm text-neutral-700">Carriers who want consistent cash flow without admin headaches.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Getting Started</h3>
            <p className="mt-3 text-sm text-neutral-700">Send us your invoice template and broker requirements— we’ll standardize the process.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


