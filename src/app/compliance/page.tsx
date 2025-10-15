export const metadata = {
  title: "Compliance – Freight Logistic LLC",
  description: "Support for FMCSA, DOT, and ELD compliance and safety documentation.",
};

export default function CompliancePage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Compliance & Safety</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            We help maintain FMCSA, DOT, and ELD requirements with organized records and audit-ready documentation.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">What We Cover</h2>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Carrier packets and contracts</li>
              <li>Insurance verification</li>
              <li>ELD records and driver logs</li>
              <li>Rate confirmations and PODs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Outcomes</h2>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Faster approvals</li>
              <li>Clean documentation</li>
              <li>Audit readiness</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


