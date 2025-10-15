export const metadata = {
  title: "Carriers – Freight Logistic LLC",
  description: "Information for carriers: onboarding, requirements, and support.",
};

export default function CarriersPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">For Carriers</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">Onboarding steps, documents, and how we work together.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Requirements</h2>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Active authority and insurance</li>
              <li>W-9, COI, and MC/DOT</li>
              <li>ELD compliance</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Onboarding</h2>
            <ol className="mt-2 text-sm text-neutral-700 space-y-2 list-decimal pl-5">
              <li>Contact us and share equipment and lanes</li>
              <li>Complete carrier packet</li>
              <li>Start booking loads</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}


