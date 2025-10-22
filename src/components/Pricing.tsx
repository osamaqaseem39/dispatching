import Glows from "./Glows";

export default function Pricing() {
  return (
    <section className="bg-white relative overflow-hidden">
      <Glows count={3} colors={["blue"]} />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pricing</h2>
        <p className="mt-2 text-sm text-neutral-700">Transparent, no hidden fees.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-md border border-neutral-200 bg-white p-6">
            <div className="text-neutral-900 font-semibold">Owner-Operator</div>
            <div className="mt-2 text-3xl font-semibold text-neutral-950">8%–10%</div>
            <p className="mt-2 text-sm text-neutral-700">Full dispatch, paperwork, 24/7 support.</p>
          </div>
          <div className="rounded-md border border-neutral-200 bg-white p-6">
            <div className="text-neutral-900 font-semibold">Small Fleet</div>
            <div className="mt-2 text-3xl font-semibold text-neutral-950">Custom</div>
            <p className="mt-2 text-sm text-neutral-700">Tailored pricing for 3+ trucks.</p>
          </div>
          <div className="rounded-md border border-neutral-200 bg-white p-6">
            <div className="text-neutral-900 font-semibold">Back-Office Only</div>
            <div className="mt-2 text-3xl font-semibold text-neutral-950">Flat</div>
            <p className="mt-2 text-sm text-neutral-700">Paperwork, invoicing, compliance support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


