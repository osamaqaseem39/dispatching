"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 64);
        tickingRef.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (scrolled) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 text-white pointer-events-none">
        <div className="mx-auto max-w-7xl px-6 pt-3">
          <div className="mx-auto max-w-fit pointer-events-auto">
            <nav
              aria-label="Primary"
              className="hidden md:flex items-center gap-6 text-sm text-neutral-200 rounded-full border border-neutral-800/80 bg-neutral-900/80 backdrop-blur px-5 py-2 shadow-lg shadow-black/30 transition-all"
            >
              <a href="/" className="hover:text-white">Home</a>
              <a href="/services" className="hover:text-white">Services</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/compliance" className="hover:text-white">Compliance</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur text-white">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Freight Logistic LLC Home">
            <Image src="/images/logo.png" alt="Freight Logistic LLC" width={120} height={120} className="rounded-sm object-cover" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/compliance" className="hover:text-white">Compliance</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="/contact" className="inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm hover:bg-neutral-200">Get Started</a>
      </div>
    </header>
  );
}


