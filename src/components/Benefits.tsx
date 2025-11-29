import type { ReactElement } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Glows from "./Glows";

type Benefit = { title: string; description: string; icon: ReactElement };

const IconCheck = (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const IconGlobe = (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.5" /></svg>
);
const IconHandshake = (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none"><path d="M7 12 3 9m14 0 4 3M7 12l4 3 3-3m0 0 2 2 5-2m-7 0-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const IconStar = (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor"><path d="M12 3.5 14.9 9l6.1.5-4.6 3.9 1.5 5.9L12 16.9 6.1 19.3l1.5-5.9L3 9.5 9.1 9 12 3.5Z" /></svg>
);
const IconHeadset = (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none"><path d="M4 13a8 8 0 1 1 16 0v5a2 2 0 0 1-2 2h-2v-6h4" stroke="currentColor" strokeWidth="1.5" /><path d="M8 20H6a2 2 0 0 1-2-2v-5h4v7Z" stroke="currentColor" strokeWidth="1.5" /></svg>
);
const IconShield = (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.5" /></svg>
);

const points: Benefit[] = [
  {
    title: "Transparent Pricing",
    description:
      "Clear percentage or flat fees with no surprises. You approve every load and rate — no forced dispatch, ever.",
    icon: IconCheck,
  },
  {
    title: "Nationwide Coverage",
    description:
      "Access trusted brokers and shippers in every U.S. region so you can run your preferred lanes consistently.",
    icon: IconGlobe,
  },
  {
    title: "Experienced Dispatchers",
    description:
      "Negotiation experts who understand market trends, equipment nuances, and how to protect detention/TONU.",
    icon: IconHeadset,
  },
  {
    title: "Reliable, High-Paying Loads",
    description:
      "We prioritize top-rated partners and freight that reduces deadhead and boosts your weekly revenue.",
    icon: IconStar,
  },
  {
    title: "Compliance & Safety",
    description:
      "FMCSA, DOT, and ELD support with organized records to keep you audit-ready and stress-free.",
    icon: IconShield,
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Carrier-first approach, 24/7 support, and growth plans from single truck to fleet — we win when you win.",
    icon: IconHandshake,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-neutral-900 relative overflow-hidden">
      <Glows count={3} colors={["blue"]} />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <ScrollAnimation direction="up">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Why Choose Freight Logistic?</h2>
        </ScrollAnimation>
        <ScrollAnimation direction="up" delay={100}>
          <p className="mt-3 text-neutral-300 max-w-3xl">24/7 Dispatch Support • Competitive Load Rates • Fast & Transparent Communication • Nationwide Coverage • Real-time Load Tracking</p>
        </ScrollAnimation>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((b, index) => {
            const glowClass = '';

            return (
              <ScrollAnimation key={b.title} direction="up" delay={200 + (index * 100)}>
                <div className={`rounded-md border border-neutral-700 bg-neutral-800 p-6 hover:border-neutral-600 transition-all duration-300 ${glowClass}`}>
                  <div className="flex items-center gap-2 text-white">
                    {b.icon}
                    <h3 className="text-base font-semibold ">{b.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-neutral-300">{b.description}</p>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}


