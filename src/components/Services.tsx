type Service = {
  title: string;
  body: string;
  keywords: string;
};

const services: Service[] = [
  {
    title: "Full-Service Truck Dispatching",
    body:
      "We manage load search, rate negotiation, paperwork, and driver support. No forced dispatch and complete transparency.",
    keywords:
      "full truck dispatch services, dispatch company for owner-operators, dispatch services for small fleets USA",
  },
  {
    title: "Load Booking & Rate Negotiation",
    body:
      "We secure top market rates and handle all broker communication, confirmations, and follow-ups to maximize income.",
    keywords:
      "high-paying loads USA, load negotiation services, dispatch for independent truckers",
  },
  {
    title: "Carrier Setup & Paperwork Management",
    body:
      "Carrier packets, contracts, insurance verification, and required docs to get you approved fast without delays.",
    keywords:
      "carrier setup services, dispatch back-office support, trucking paperwork management",
  },
  {
    title: "Route Planning & Trip Optimization",
    body:
      "Advanced planning to save fuel, reduce downtime, and improve delivery times for better profitability.",
    keywords:
      "route optimization for truckers, fuel-efficient routes, dispatch planning services",
  },
  {
    title: "24/7 Dispatch Support",
    body:
      "Round-the-clock updates, broker communication, and load tracking to keep operations smooth.",
    keywords:
      "24/7 truck dispatch service, round-the-clock dispatch support, reliable trucking dispatch",
  },
  {
    title: "Invoicing & Billing Assistance",
    body:
      "We manage invoicing, POD submission, and broker follow-ups so you get paid quickly and accurately.",
    keywords:
      "trucking invoicing services, freight billing management, back-office dispatch support",
  },
  {
    title: "Compliance & Safety Support",
    body:
      "Assistance with FMCSA, DOT, and ELD requirements to keep records and reports audit-ready.",
    keywords:
      "trucking compliance support, DOT documentation, FMCSA dispatch compliance",
  },
  {
    title: "Personalized Dispatch Solutions",
    body:
      "Custom plans built around your truck type, preferred lanes, and schedule to increase load opportunities.",
    keywords:
      "custom dispatching services, personalized trucking dispatch, dispatch plans for owner-operators",
  },
];

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-neutral-900" fill="none">
      <path d="M3 7h13l5 5v5a2 2 0 0 1-2 2H3V7Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7V5a2 2 0 0 1 2-2h10v4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Core Dispatch Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-md border border-neutral-200 bg-white p-6">
              <div className="flex items-center gap-2">
                <ServiceIcon />
                <h3 className="font-semibold text-lg text-neutral-900">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{item.body}</p>
              <p className="mt-4 text-[11px] text-neutral-500">Keywords: {item.keywords}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


