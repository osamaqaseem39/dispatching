"use client";

import { useEffect, useMemo, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  { name: "James P.", role: "Owner-Operator (Texas)", quote: "Freight Logistic LLC keeps me loaded every week! They’re reliable and honest — exactly what a trucker needs." },
  { name: "Maria L.", role: "Independent Trucker (California)", quote: "I’ve tried other dispatchers, but these guys are the real deal. Transparent, fast, and always available." },
  { name: "Luis R.", role: "Owner-Operator (Dry Van)", quote: "They keep me moving with solid rates and zero forced dispatch. Paperwork is smooth and fast." },
  { name: "Aisha K.", role: "Small Fleet (2 Trucks)", quote: "Communication is top-notch and they always find lanes that fit our schedule. Highly recommend." },
  { name: "Dmitri S.", role: "Reefer Operator", quote: "Strong rates and clear instructions. They handle brokers so I can focus on driving." },
  { name: "Sophia R.", role: "Hotshot Driver", quote: "They’re proactive and keep me rolling — no deadhead, no nonsense." },
  { name: "Omar T.", role: "Step Deck Operator", quote: "Professional and dependable. The paperwork support saves me hours every week." },
  { name: "Henry C.", role: "Box Truck Owner", quote: "Fast setup and consistent loads. Payments are smooth with their billing help." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const visible = useMemo(() => {
    const items: Testimonial[] = [];
    for (let offset = 0; offset < 3; offset++) {
      items.push(testimonials[(index + offset) % testimonials.length]);
    }
    return items;
  }, [index]);

  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <ScrollAnimation direction="up">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">What Carriers Say</h2>
        </ScrollAnimation>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <ScrollAnimation key={`${t.name}-${i}`} direction="up" delay={i * 100}>
                <article className="rounded-md border border-neutral-800 bg-neutral-800 p-6 text-white transition-colors hover:bg-neutral-750 hover:border-neutral-700">
                  <p className="text-neutral-200">"{t.quote}"</p>
                  <div className="mt-4 text-sm text-neutral-400">{t.name} — {t.role}</div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation direction="up" delay={300}>
            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${i === index ? "bg-white" : "bg-neutral-700"}`} />
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}


