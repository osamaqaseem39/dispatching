"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/services" className="hover:text-white">Services</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/compliance" className="hover:text-white">Compliance</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800/80 bg-neutral-900/80 backdrop-blur text-neutral-200 hover:text-white hover:bg-neutral-800/80 transition-all"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed top-16 left-4 right-4 z-40 pointer-events-auto">
            <div className="bg-neutral-900/95 backdrop-blur rounded-2xl border border-neutral-800/80 shadow-lg shadow-black/30 p-6">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-neutral-200 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/services" className="text-neutral-200 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link href="/about" className="text-neutral-200 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/compliance" className="text-neutral-200 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Compliance</Link>
                <Link href="/contact" className="text-neutral-200 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <div className="pt-2 border-t border-neutral-800">
                  <a href="/contact" className="inline-flex items-center justify-center w-full rounded-lg bg-white px-6 py-3 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Get Started
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
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
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/compliance" className="hover:text-white">Compliance</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="/contact" className="hidden sm:inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm hover:bg-neutral-200">Get Started</a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-neutral-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/services" className="text-neutral-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/about" className="text-neutral-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/compliance" className="text-neutral-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Compliance</Link>
              <Link href="/contact" className="text-neutral-300 hover:text-white py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <div className="pt-3 border-t border-neutral-800">
                <a href="/contact" className="inline-flex items-center justify-center w-full rounded-lg bg-white px-6 py-3 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors">
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


