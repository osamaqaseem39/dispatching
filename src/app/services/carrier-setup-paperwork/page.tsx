import Image from "next/image";

export const metadata = {
  title: "Carrier Setup & Paperwork – Freight Logistic LLC",
  description: "Carrier packets, contracts, and insurance verification managed for faster onboarding.",
};

export default function CarrierSetupPaperworkPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Carrier Setup & Paperwork Management</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">We simplify onboarding so you can start hauling faster.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/services/service3.jpg" alt="Carrier Setup and Paperwork" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Documents We Handle</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Carrier packets and contracts</li>
              <li>Insurance verification and COI requests</li>
              <li>W-9, references, and MC/DOT details</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Benefits</h2>
            <p className="mt-2 text-sm text-neutral-700">Less admin time and fewer delays — we keep your documentation organized and audit-ready.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Start Setup</a>
          </div>
        </div>
      </section>
    </main>
  );
}


