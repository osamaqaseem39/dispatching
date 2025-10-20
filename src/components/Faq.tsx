"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    q: "Do you force dispatch?",
    a: "No. We are 100% no-forced-dispatch. You choose your loads and lanes.",
  },
  {
    q: "What equipment types do you work with?",
    a: "Dry van, reefer, flatbed, hotshot, and box truck.",
  },
  {
    q: "How do I get started?",
    a: "Reach out via the contact form or call us. We'll handle carrier setup and paperwork.",
  },
  {
    q: "When do I get paid?",
    a: "We help submit PODs and invoicing promptly so brokers can pay you per their terms.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <ScrollAnimation direction="up">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">FAQs</h2>
        </ScrollAnimation>
        <div className="mt-8 grid gap-4">
          {faqs.map((f, index) => {
            const isOpen = open === f.q;
            return (
              <ScrollAnimation key={f.q} direction="up" delay={index * 100}>
                <div className="rounded-md border border-neutral-800 bg-neutral-900 hover:border-neutral-700 transition-colors">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-white hover:text-neutral-100 transition-colors"
                    onClick={() => setOpen(isOpen ? null : f.q)}
                  >
                    <span className="font-medium">{f.q}</span>
                    <svg viewBox="0 0 24 24" className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-neutral-300 animate-fadeIn">
                      {f.a}
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}


