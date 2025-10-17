import Image from "next/image";

export const metadata = {
  title: "Full-Service Truck Dispatching Services | Professional Load Management – Freight Logistic LLC",
  description: "Complete truck dispatching services for owner-operators and small fleets. Load search, rate negotiation, paperwork management, broker communication, and 24/7 driver support. No forced dispatch, transparent fees.",
  keywords: "truck dispatching services, owner operator dispatch, load booking, rate negotiation, freight dispatch, trucking dispatch, carrier dispatch, transportation logistics",
};

export default function FullServiceDispatchPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Full-Service Truck Dispatching</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">We handle everything — finding top-paying loads, negotiating rates, completing paperwork, and managing broker communications.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/service1.jpg" alt="Full-Service Dispatching" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Complete Truck Dispatching Solutions</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our full-service truck dispatching handles every aspect of your freight operations, from initial load search to final delivery confirmation. 
              We work exclusively for you, ensuring maximum profitability and minimal administrative burden.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Load Search & Booking</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Daily market analysis across your preferred lanes</li>
                <li>• Direct relationships with vetted brokers and shippers</li>
                <li>• Load matching based on your equipment and schedule</li>
                <li>• Real-time load board monitoring and alerts</li>
                <li>• Backhaul optimization to reduce empty miles</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Rate Negotiation</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Market rate analysis and benchmarking</li>
                <li>• Professional rate negotiations with brokers</li>
                <li>• Detention and layover protection clauses</li>
                <li>• Fuel surcharge optimization</li>
                <li>• Rate confirmation and documentation</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Paperwork Management</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Rate confirmations and load details</li>
                <li>• Bill of lading coordination</li>
                <li>• Proof of delivery (POD) tracking</li>
                <li>• Invoice preparation and submission</li>
                <li>• Documentation filing and organization</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Our Full-Service Dispatch?</h2>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-lg">No Forced Dispatch Policy</h3>
                  <p>You maintain complete control over every load. We present options, you make the final decision. No pressure, no forced assignments.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Transparent Fee Structure</h3>
                  <p>Clear, upfront pricing with no hidden fees. Our success is tied to your success - we only earn when you do.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dedicated Dispatcher</h3>
                  <p>Your personal dispatcher learns your preferences, lanes, and schedule to provide tailored service and better results.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">24/7 Support</h3>
                  <p>Round-the-clock availability for emergencies, updates, and broker communication to keep your operations running smoothly.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Owner-Operators</h3>
                  <p className="text-neutral-700">Focus on driving while we handle the business side. Maximize your revenue with professional load management.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Small Fleets (2-10 trucks)</h3>
                  <p className="text-neutral-700">Scale your operations without scaling your administrative burden. Professional dispatch for growing fleets.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Independent Contractors</h3>
                  <p className="text-neutral-700">Maintain your independence while accessing professional dispatch services and better load opportunities.</p>
                </div>
              </div>
              <a href="/contact" className="mt-6 inline-flex items-center rounded-sm bg-black px-6 py-3 text-white text-lg hover:bg-neutral-800 transition-colors">Get Started Today</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How much does full-service dispatching cost?</h3>
                <p className="text-neutral-700">Our fees are transparent and performance-based. We typically charge a percentage of the load revenue, ensuring we only earn when you do. Contact us for specific pricing based on your operation size and needs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do I have to accept every load you find?</h3>
                <p className="text-neutral-700">Absolutely not. We operate on a "no forced dispatch" policy. You review and approve every load before we book it. You maintain complete control over your schedule and freight choices.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly can you find loads?</h3>
                <p className="text-neutral-700">We typically have load options within 24-48 hours of your request, often same-day for popular lanes. Our extensive broker network and real-time load board monitoring ensure quick turnaround.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">What if I have issues with a load?</h3>
                <p className="text-neutral-700">We handle all broker communication and problem resolution. From detention disputes to delivery issues, we advocate for you and work to resolve problems quickly.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I still work with my existing brokers?</h3>
                <p className="text-neutral-700">Yes! We can work with your existing broker relationships while introducing you to new opportunities. We coordinate with all your business partners to maintain continuity.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How do you ensure good rates?</h3>
                <p className="text-neutral-700">We monitor market rates daily, negotiate based on current conditions, and leverage our broker relationships for better pricing. Our success depends on your profitability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Join hundreds of successful owner-operators and small fleets who trust us with their dispatch needs. 
              Let us handle the business side while you focus on driving.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1: Consultation</h3>
              <p className="text-neutral-700">We discuss your lanes, equipment, schedule, and goals to understand your specific needs.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2: Setup</h3>
              <p className="text-neutral-700">Complete carrier setup, share preferences, and we'll begin load searching immediately.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 3: Dispatch</h3>
              <p className="text-neutral-700">Start receiving quality loads with better rates and professional support from day one.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center rounded-sm bg-black px-8 py-4 text-white text-lg hover:bg-neutral-800 transition-colors">
              Start Your Free Consultation
            </a>
            <p className="mt-4 text-sm text-neutral-600">No commitment required • Free initial consultation</p>
          </div>
        </div>
      </section>
    </main>
  );
}


