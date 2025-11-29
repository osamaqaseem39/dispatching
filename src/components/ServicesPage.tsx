"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Service = {
  title: string;
  body: string;
  slug: string;
  imageSrc: string;
};

const services: Service[] = [
  {
    title: "Full-Service Truck Dispatching",
    body: "We manage load search, rate negotiation, paperwork, and driver support. No forced dispatch and complete transparency.",
    slug: "full-service-truck-dispatching",
    imageSrc: "/images/dispatching.png",
  },
  {
    title: "Load Booking & Rate Negotiation",
    body: "We secure top market rates and handle all broker communication, confirmations, and follow-ups to maximize income.",
    slug: "load-booking-rate-negotiation",
    imageSrc: "/images/handshake.png",
  },
  {
    title: "Carrier Setup & Paperwork Management",
    body: "Carrier packets, contracts, insurance verification, and required docs to get you approved fast without delays.",
    slug: "carrier-setup-paperwork",
    imageSrc: "/images/doc.png",
  },
  {
    title: "Route Planning & Trip Optimization",
    body: "Advanced planning to save fuel, reduce downtime, and improve delivery times for better profitability.",
    slug: "route-planning-optimization",
    imageSrc: "/images/route.png",
  },
  {
    title: "24/7 Dispatch Support",
    body: "Round-the-clock updates, broker communication, and load tracking to keep operations smooth.",
    slug: "24-7-dispatch-support",
    imageSrc: "/images/support.png",
  },
  {
    title: "Invoicing & Billing Assistance",
    body: "We manage invoicing, POD submission, and broker follow-ups so you get paid quickly and accurately.",
    slug: "invoicing-billing-assistance",
    imageSrc: "/images/invoice.png",
  },
  {
    title: "Compliance & Safety Support",
    body: "Assistance with FMCSA, DOT, and ELD requirements to keep records and reports audit-ready.",
    slug: "compliance-safety-support",
    imageSrc: "/images/protection.png",
  },
  {
    title: "Personalized Dispatch Solutions",
    body: "Custom plans built around your truck type, preferred lanes, and schedule to increase load opportunities.",
    slug: "personalized-dispatch-solutions",
    imageSrc: "/images/customized.png",
  },
];

export default function ServicesPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px"
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">What We Offer</h2>
          <div className="text-lg text-neutral-600 max-w-3xl mx-auto space-y-2 mt-6 text-left">
            <p><strong>Truck Dispatching:</strong> We find the best-paying loads and manage all communications for you.</p>
            <p><strong>Paperwork & Compliance:</strong> From rate confirmations to invoices — we handle all documentation.</p>
            <p><strong>Route Optimization:</strong> Save time and fuel with smart route planning.</p>
            <p><strong>24/7 Support:</strong> Round-the-clock dispatch team to guide and assist you on every mile.</p>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 mt-12">We Work With</h3>
          <ul className="text-lg text-neutral-600 max-w-3xl mx-auto space-y-1">
            <li>• Dry Vans</li>
            <li>• Reefers</li>
            <li>• Flatbeds</li>
            <li>• Power Only Units</li>
          </ul>
        </div>
        
        <div className="relative">
          {services.map((item, index) => {
            const isVisible = visibleCards.includes(index);
            const stackIndex = visibleCards.indexOf(index);
            const zIndex = services.length - stackIndex;
            const translateY = stackIndex * 20;
            const scale = 1 - (stackIndex * 0.02);
            const opacity = Math.max(0.3, 1 - (stackIndex * 0.1));
            
            return (
              <div
                key={item.title}
                ref={el => { cardRefs.current[index] = el; }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-xl transition-all duration-500"
                style={{
                  transform: isVisible 
                    ? `translateY(${translateY}px) scale(${scale})` 
                    : 'translateY(100px) scale(0.95)',
                  opacity: isVisible ? opacity : 0,
                  zIndex: isVisible ? zIndex : 0,
                  position: stackIndex > 0 ? 'absolute' : 'relative',
                  top: stackIndex > 0 ? `${stackIndex * 20}px` : 'auto',
                  left: stackIndex > 0 ? '0' : 'auto',
                  right: stackIndex > 0 ? '0' : 'auto',
                  width: stackIndex > 0 ? '100%' : 'auto',
                }}
              >
                <a href={`/services/${item.slug}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Content Side */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Image 
                            src={item.imageSrc} 
                            alt={item.title} 
                            width={80} 
                            height={80} 
                            className="h-20 w-20 object-contain" 
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-neutral-900 group-hover:text-black transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        {item.body}
                      </p>
                      
                      <div className="flex items-center text-black font-medium group-hover:text-neutral-700 transition-colors">
                        <span>Learn more about this service</span>
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Image Side */}
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
                        <Image 
                          src={`/images/service${index + 1}.jpg`} 
                          alt={item.title}
                          width={600}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <a href="/contact" className="inline-flex items-center rounded-lg bg-black px-8 py-4 text-white text-lg font-medium hover:bg-neutral-800 transition-colors">
            Ready to roll? Contact Freight Logistic today to start dispatching smarter.
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
