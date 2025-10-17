// using inline SVG icons for services

import type { ReactNode } from "react";
import Image from "next/image";

type Service = {
  title: string;
  body: string;
  slug: string;
  imageSrc: string; // path under /public
};

const services: Service[] = [
  {
    title: "Full-Service Truck Dispatching",
    body:
      "We manage load search, rate negotiation, paperwork, and driver support. No forced dispatch and complete transparency.",
    slug: "full-service-truck-dispatching",
    imageSrc: "/images/dispatching.png",
  },
  {
    title: "Load Booking & Rate Negotiation",
    body:
      "We secure top market rates and handle all broker communication, confirmations, and follow-ups to maximize income.",
    slug: "load-booking-rate-negotiation",
    imageSrc: "/images/handshake.png",
  },
  {
    title: "Carrier Setup & Paperwork Management",
    body:
      "Carrier packets, contracts, insurance verification, and required docs to get you approved fast without delays.",
    slug: "carrier-setup-paperwork",
    imageSrc: "/images/doc.png",
  },
  {
    title: "Route Planning & Trip Optimization",
    body:
      "Advanced planning to save fuel, reduce downtime, and improve delivery times for better profitability.",
    slug: "route-planning-optimization",
    imageSrc: "/images/route.png",
  },
  {
    title: "24/7 Dispatch Support",
    body:
      "Round-the-clock updates, broker communication, and load tracking to keep operations smooth.",
    slug: "24-7-dispatch-support",
    imageSrc: "/images/support.png",
  },
  {
    title: "Invoicing & Billing Assistance",
    body:
      "We manage invoicing, POD submission, and broker follow-ups so you get paid quickly and accurately.",
    slug: "invoicing-billing-assistance",
    imageSrc: "/images/invoice.png",
  },
  {
    title: "Compliance & Safety Support",
    body:
      "Assistance with FMCSA, DOT, and ELD requirements to keep records and reports audit-ready.",
    slug: "compliance-safety-support",
    imageSrc: "/images/protection.png",
  },
  {
    title: "Personalized Dispatch Solutions",
    body:
      "Custom plans built around your truck type, preferred lanes, and schedule to increase load opportunities.",
    slug: "personalized-dispatch-solutions",
    imageSrc: "/images/customized.png",
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
                  <div className="flex justify-center mb-4">
                    <Image src={item.imageSrc} alt={item.title} width={64} height={64} className="h-16 w-16 object-contain" />
                  </div>
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


