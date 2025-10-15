// using inline SVG icons for services

import type { ReactNode } from "react";

type Service = {
  title: string;
  body: string;
  slug: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Full-Service Truck Dispatching",
    body:
      "We manage load search, rate negotiation, paperwork, and driver support. No forced dispatch and complete transparency.",
    slug: "full-service-truck-dispatching",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <path d="M3 7h13l5 5v5a2 2 0 0 1-2 2H3V7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7V5a2 2 0 0 1 2-2h10v4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Load Booking & Rate Negotiation",
    body:
      "We secure top market rates and handle all broker communication, confirmations, and follow-ups to maximize income.",
    slug: "load-booking-rate-negotiation",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <path d="M4 12h16M4 6h16M4 18h10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Carrier Setup & Paperwork Management",
    body:
      "Carrier packets, contracts, insurance verification, and required docs to get you approved fast without delays.",
    slug: "carrier-setup-paperwork",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Route Planning & Trip Optimization",
    body:
      "Advanced planning to save fuel, reduce downtime, and improve delivery times for better profitability.",
    slug: "route-planning-optimization",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <path d="M5 19s3-6 7-6 7 6 7 6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "24/7 Dispatch Support",
    body:
      "Round-the-clock updates, broker communication, and load tracking to keep operations smooth.",
    slug: "24-7-dispatch-support",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Invoicing & Billing Assistance",
    body:
      "We manage invoicing, POD submission, and broker follow-ups so you get paid quickly and accurately.",
    slug: "invoicing-billing-assistance",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <path d="M6 3h12v18H6z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 7h6M9 11h6M9 15h6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Compliance & Safety Support",
    body:
      "Assistance with FMCSA, DOT, and ELD requirements to keep records and reports audit-ready.",
    slug: "compliance-safety-support",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Personalized Dispatch Solutions",
    body:
      "Custom plans built around your truck type, preferred lanes, and schedule to increase load opportunities.",
    slug: "personalized-dispatch-solutions",
    icon: (
      <svg viewBox="0 0 24 24" className="h-16 w-16 text-neutral-900" fill="none">
        <path d="M4 6h7M4 12h7M4 18h7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 6h7M13 12h7M13 18h7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

// Removed single shared icon; each service now uses an image from the public folder

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Professional Dispatch Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div key={item.title} className="group rounded-md border border-neutral-200 bg-white hover:border-neutral-300 [perspective:1000px]">
              <a href={`/services/${item.slug}`} className="relative block h-full min-h-[260px] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-center font-semibold text-lg text-neutral-900">{item.title}</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-neutral-50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h3 className="text-center font-semibold text-lg text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600 text-center">{item.body}</p>
                  <div className="mt-4 text-center">
                    <span className="inline-block text-sm font-medium text-neutral-900">Learn more →</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


