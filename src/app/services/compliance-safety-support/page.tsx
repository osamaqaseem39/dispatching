import Image from "next/image";

export const metadata = {
  title: "Compliance & Safety Support – Freight Logistic LLC",
  description: "FMCSA, DOT, and ELD support with organized records to keep you audit-ready.",
};

export default function ComplianceSafetySupportPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Compliance & Safety Support</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">We assist with FMCSA, DOT, and ELD compliance to keep your documentation current.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/services/service7.jpg" alt="Compliance and Safety Support" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Areas We Cover</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>FMCSA & DOT documentation</li>
              <li>ELD setup guidance</li>
              <li>Safety and insurance readiness</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Be Audit-Ready</h2>
            <p className="mt-2 text-sm text-neutral-700">We’ll keep your files organized and your operations compliant so you can focus on driving.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Talk Compliance</a>
          </div>
        </div>
      </section>
    </main>
  );
}


