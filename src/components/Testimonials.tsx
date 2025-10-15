const testimonials = [
  {
    name: "Luis R.",
    role: "Owner-Operator (Dry Van)",
    quote:
      "They keep me moving with solid rates and zero forced dispatch. Paperwork is smooth and fast.",
  },
  {
    name: "Jasmine K.",
    role: "Hotshot Carrier",
    quote:
      "Transparent, reliable, and responsive 24/7. My best months have been with their loads.",
  },
  {
    name: "Marcus D.",
    role: "Small Fleet (Flatbed)",
    quote:
      "Negotiations are on point. They understand lanes and keep fuel/downtime low with smart routing.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What Carriers Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-md border border-neutral-200 bg-white p-6">
              <p className="text-neutral-800">“{t.quote}”</p>
              <div className="mt-4 text-sm text-neutral-600">{t.name} — {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


