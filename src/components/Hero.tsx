"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/10 via-neutral-700/10 to-neutral-600/10 animate-pulse"></div>
      
      <div className="mx-auto max-w-7xl px-6 py-28 grid gap-12 md:grid-cols-2 items-center relative z-10">
        <div className="space-y-8">
          <ScrollAnimation direction="up" delay={0}>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Your Trusted Truck Dispatch Partner Across the USA
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={200}>
            <p className="text-neutral-300 text-lg md:text-xl">
              Stay loaded. Stay profitable. Stay stress-free.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={400}>
            <p className="text-neutral-300 text-base md:text-lg max-w-2xl">
              From load booking to paperwork, rate negotiation to route optimization — we keep your trucks moving and your business growing.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={600}>
            <ul className="text-base text-neutral-300 space-y-2">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Dry Van • Reefer • Flatbed • Step Deck • Hotshot • Box Truck</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-neutral-400 rounded-full"></span>
                <span>No forced dispatch • Transparent pricing • Nationwide coverage</span>
              </li>
            </ul>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={800}>
            <div className="flex flex-wrap gap-3">
              <a 
                href="tel:+19498281756" 
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-neutral-950 text-base font-medium hover:bg-neutral-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                📞 Call Now: +1 (949) 828-1756
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 text-white text-base hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center rounded-lg border-2 border-neutral-400 px-6 py-3 text-white text-base hover:bg-neutral-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1"
              >
                Request Free Consultation
              </a>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation direction="right" delay={1000}>
          <div className="relative">
            <div className="h-96 md:h-[560px] w-full md:w-[380px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 mx-auto md:mx-0 shadow-2xl">
              <Image
                src="/images/heroimage.jpg"
                alt="Freight Logistic LLC - truck dispatching"
                width={1200}
                height={800}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              🚛 24/7 Support
            </div>
            <div className="absolute -bottom-4 -left-4 bg-neutral-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              💰 Higher Rates
            </div>
          </div>
        </ScrollAnimation>
      </div>
      
    </section>
  );
}


