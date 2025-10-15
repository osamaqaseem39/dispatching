const points = [
  "Transparent Pricing — No hidden fees, no forced dispatch",
  "Nationwide Coverage — Serving carriers across all U.S. states",
  "Experienced Dispatchers — Negotiation and support experts",
  "Reliable Loads — Partnered with top-rated brokers and shippers",
  "Long-Term Partnerships — We grow when our carriers grow",
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why Choose Freight Logistic LLC?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point} className="rounded-md border border-neutral-200 bg-white p-5">
              <p className="text-sm text-neutral-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


