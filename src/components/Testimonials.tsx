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

"use client";

import { useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  function prev() { setIndex((i) => (i - 1 + testimonials.length) % testimonials.length); }
  function next() { setIndex((i) => (i + 1) % testimonials.length); }
  const current = testimonials[index];
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">What Carriers Say</h2>
        <div className="mt-8 relative">
          <div className="rounded-md border border-neutral-800 bg-neutral-900 p-6 text-white">
            <p className="text-neutral-200">“{current.quote}”</p>
            <div className="mt-4 text-sm text-neutral-400">{current.name} — {current.role}</div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button onClick={prev} className="rounded-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 hover:bg-black">Prev</button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-white" : "bg-neutral-700"}`} />
              ))}
            </div>
            <button onClick={next} className="rounded-full bg-neutral-900 border border-neutral-800 text-white px-3 py-2 hover:bg:black">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
}


