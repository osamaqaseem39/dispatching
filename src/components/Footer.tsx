import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Freight Logistic LLC" width={72} height={72} className="rounded-sm object-cover" />
              <span className="text-lg font-semibold">Freight Logistic LLC</span>
            </div>
            <p className="text-sm text-neutral-300 max-w-xs">
              Professional truck dispatching services for owner-operators and small fleets across the USA.
            </p>
            <div className="text-sm text-neutral-400">
              <p>📧 freightlogistic01@gmail.com</p>
              <p>📞 +1 (949) 828-1756</p>
              <p>📍 Serving All 48 States</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/full-service-truck-dispatching" className="text-neutral-300 hover:text-white transition-colors">Full-Service Dispatching</Link></li>
              <li><Link href="/services/load-booking-rate-negotiation" className="text-neutral-300 hover:text-white transition-colors">Load Booking & Rates</Link></li>
              <li><Link href="/services/route-planning-optimization" className="text-neutral-300 hover:text-white transition-colors">Route Planning</Link></li>
              <li><Link href="/services/24-7-dispatch-support" className="text-neutral-300 hover:text-white transition-colors">24/7 Support</Link></li>
              <li><Link href="/services/compliance-safety-support" className="text-neutral-300 hover:text-white transition-colors">Compliance & Safety</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/carriers" className="text-neutral-300 hover:text-white transition-colors">For Carriers</Link></li>
              <li><Link href="/compliance" className="text-neutral-300 hover:text-white transition-colors">Compliance</Link></li>
              <li><Link href="/pricing" className="text-neutral-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/testimonials" className="text-neutral-300 hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-neutral-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><a href="tel:+19498281756" className="text-neutral-300 hover:text-white transition-colors">Emergency Support</a></li>
              <li><a href="mailto:freightlogistic01@gmail.com" className="text-neutral-300 hover:text-white transition-colors">Email Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Freight Logistic LLC. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


