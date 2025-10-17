import Image from "next/image";

export const metadata = {
  title: "24/7 Dispatch Support Services | Round-the-Clock Trucking Support – Freight Logistic LLC",
  description: "Professional 24/7 dispatch support for trucking companies. Round-the-clock updates, broker communication, load tracking, and emergency support to keep your operations running smoothly.",
  keywords: "24/7 dispatch support, trucking support, emergency dispatch, round the clock support, freight dispatch, trucking assistance, logistics support",
};

export default function Dispatch247Page() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">24/7 Dispatch Support</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">Any time of day or night, we’re available with real-time updates and problem-solving.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/service5.jpg" alt="24/7 Dispatch Support" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">24/7 Professional Dispatch Support</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Never be alone on the road. Our dedicated 24/7 dispatch team provides round-the-clock support, 
              emergency assistance, and proactive monitoring to keep your operations running smoothly, 
              day and night, weekends and holidays.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Emergency Support</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• 24/7 emergency hotline availability</li>
                <li>• Immediate issue resolution</li>
                <li>• Breakdown and accident coordination</li>
                <li>• Weather and traffic alerts</li>
                <li>• Alternative route planning</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Broker Communication</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• After-hours broker negotiations</li>
                <li>• Load status updates and confirmations</li>
                <li>• Detention and layover disputes</li>
                <li>• Rate adjustments and modifications</li>
                <li>• Delivery appointment coordination</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Load Tracking</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Real-time shipment monitoring</li>
                <li>• Proactive delivery updates</li>
                <li>• ETA adjustments and notifications</li>
                <li>• Customer communication</li>
                <li>• Proof of delivery coordination</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why 24/7 Support Matters</h2>
              <div className="space-y-4 text-neutral-700">
                <div>
                  <h3 className="font-semibold text-lg">Minimize Downtime</h3>
                  <p>Issues don&apos;t wait for business hours. Our round-the-clock availability ensures problems are resolved quickly, keeping your trucks moving and earning.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Peace of Mind</h3>
                  <p>Drive with confidence knowing professional support is always available. Focus on driving while we handle the business side.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Competitive Advantage</h3>
                  <p>Access to after-hours load opportunities and broker relationships that give you an edge over competitors.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Emergency Response</h3>
                  <p>From breakdowns to weather delays, we coordinate solutions and keep all parties informed of status changes.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Support Channels</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">📞 Phone Support</h3>
                  <p className="text-neutral-700">Direct line to our dispatch team for immediate assistance and urgent matters.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">💬 Text & SMS</h3>
                  <p className="text-neutral-700">Quick updates and non-urgent communication via text messaging.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">📧 Email Support</h3>
                  <p className="text-neutral-700">Detailed documentation and follow-up communication for complex issues.</p>
                </div>
              </div>
              <a href="/contact" className="mt-6 inline-flex items-center rounded-sm bg-black px-6 py-3 text-white text-lg hover:bg-neutral-800 transition-colors">Get 24/7 Support</a>
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
                <h3 className="text-lg font-semibold mb-2">What hours is your 24/7 support available?</h3>
                <p className="text-neutral-700">Our support is truly 24/7/365. We have dedicated dispatchers working around the clock, including nights, weekends, and holidays. There&apos;s never a time when you can&apos;t reach us.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly do you respond to emergencies?</h3>
                <p className="text-neutral-700">Emergency calls are answered immediately. Our average response time for urgent matters is under 2 minutes, and we have escalation procedures for critical situations.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can you help with breakdowns and accidents?</h3>
                <p className="text-neutral-700">Absolutely. We coordinate with towing services, repair shops, insurance companies, and brokers to get you back on the road as quickly as possible while keeping all parties informed.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you charge extra for after-hours support?</h3>
                <p className="text-neutral-700">No additional charges for 24/7 support. Our comprehensive service includes round-the-clock availability as part of our standard dispatch package.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I contact you for urgent matters?</h3>
                <p className="text-neutral-700">Call our emergency hotline for immediate assistance. We also provide text and email options for non-urgent matters, with guaranteed response times for each channel.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What if I need support in a different time zone?</h3>
                <p className="text-neutral-700">Our team is trained to handle operations across all US time zones. We understand the logistics of cross-country hauls and provide appropriate support regardless of your location.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready for 24/7 Support?</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Join hundreds of drivers who rely on our round-the-clock support. 
              Never face the road alone again.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1: Setup</h3>
              <p className="text-neutral-700">Provide your contact preferences and emergency procedures for immediate support access.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2: Test</h3>
              <p className="text-neutral-700">We&apos;ll test all communication channels to ensure seamless 24/7 connectivity.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 3: Support</h3>
              <p className="text-neutral-700">Start receiving round-the-clock professional support from day one.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center rounded-sm bg-black px-8 py-4 text-white text-lg hover:bg-neutral-800 transition-colors">
              Get 24/7 Support Now
            </a>
            <p className="mt-4 text-sm text-neutral-600">Always available • No extra charges • Professional support</p>
          </div>
        </div>
      </section>
    </main>
  );
}


