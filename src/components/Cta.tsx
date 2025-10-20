export default function Cta() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Let us keep your trucks loaded and your profits high.</h3>
          <p className="mt-2 text-neutral-300 text-sm">
            Professional dispatch for owner-operators and small fleets — load booking, paperwork, negotiation, and 24/7 support.
          </p>
        </div>
        <div className="flex md:justify-end">
          <div className="flex flex-wrap gap-3">
            <a href="tel:+19498281756" className="inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm font-medium hover:bg-neutral-200 animate-glow-pulse-white">Call +1 (949) 828-1756</a>
            <a href="/contact" className="inline-flex items-center rounded-sm border border-neutral-600 px-4 py-2 text-white text-sm hover:bg-neutral-800 animate-glow-pulse-green">Email freightlogistic01@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}


