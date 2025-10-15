export default function HowItWorks() {
  const steps = [
    {
      title: "Quick Consultation",
      body:
        "Tell us about your equipment, lanes, RPM goals, and schedule. We align on preferences before booking anything.",
    },
    {
      title: "Carrier Setup",
      body:
        "Complete carrier packets and insurance verification so you’re approved fast with trusted brokers.",
    },
    {
      title: "Load Search & Negotiation",
      body:
        "We source high-quality freight and negotiate top market rates based on your targets.",
    },
    {
      title: "Booking & Dispatch",
      body:
        "You approve every load. We handle rate cons, pickup details, and clear instructions for each stop.",
    },
    {
      title: "On‑Road Support 24/7",
      body:
        "We manage updates, detention/TONU requests, and broker comms so you can stay focused on driving.",
    },
    {
      title: "Invoicing & Follow‑Up",
      body:
        "We assist with POD submission, invoicing, and payment follow‑ups for smooth cash flow.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">How It Works</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm md:text-base text-neutral-700 max-w-2xl">
              A clear, no‑pressure process designed for owner‑operators and small fleets. No forced dispatch — you stay in control at every step.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800"
            >
              Start in 10 minutes
            </a>
          </div>

          <ol className="relative border-l border-neutral-200 pl-6">
            {steps.map((step, index) => (
              <li key={step.title} className="mb-10 last:mb-0">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-medium">
                  {index + 1}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}


