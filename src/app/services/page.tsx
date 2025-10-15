export const metadata = {
  title: "Services – Freight Logistic LLC",
  description:
    "Full-service truck dispatching: load booking, rate negotiation, paperwork, route optimization, compliance, and 24/7 support.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Full-Service Truck Dispatching",
      body:
        "We manage load search, rate negotiation, paperwork, and driver support. No forced dispatch and complete transparency.",
    },
    {
      title: "Load Booking & Rate Negotiation",
      body:
        "We secure top market rates and handle all broker communication, confirmations, and follow-ups to maximize income.",
    },
    {
      title: "Carrier Setup & Paperwork Management",
      body:
        "Carrier packets, contracts, insurance verification, and required docs to get you approved fast without delays.",
    },
    {
      title: "Route Planning & Trip Optimization",
      body:
        "Advanced planning to save fuel, reduce downtime, and improve delivery times for better profitability.",
    },
    {
      title: "24/7 Dispatch Support",
      body:
        "Round-the-clock updates, broker communication, and load tracking to keep operations smooth.",
    },
    {
      title: "Invoicing & Billing Assistance",
      body:
        "We manage invoicing, POD submission, and broker follow-ups so you get paid quickly and accurately.",
    },
    {
      title: "Compliance & Safety Support",
      body:
        "Assistance with FMCSA, DOT, and ELD requirements to keep records and reports audit-ready.",
    },
    {
      title: "Personalized Dispatch Solutions",
      body:
        "Custom plans built around your truck type, preferred lanes, and schedule to increase load opportunities.",
    },
  ];

  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Services</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            Reliable, affordable, and transparent dispatching solutions tailored to your lanes, equipment, and schedule.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-md border border-neutral-200 bg-white p-6">
              <h2 className="font-semibold text-lg">{s.title}</h2>
              <p className="mt-2 text-sm text-neutral-700">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


