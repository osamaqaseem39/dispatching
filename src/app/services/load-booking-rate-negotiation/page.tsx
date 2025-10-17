import Image from "next/image";

export const metadata = {
  title: "Load Booking & Rate Negotiation Services | Professional Freight Management – Freight Logistic LLC",
  description: "Professional load booking and rate negotiation for trucking companies. Secure high-paying loads nationwide with expert broker communication, market analysis, and freight optimization.",
  keywords: "load booking services, rate negotiation, freight booking, trucking loads, broker communication, freight rates, transportation logistics, load optimization",
};

export default function LoadBookingNegotiationPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Load Booking & Rate Negotiation</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">We connect you with trusted brokers and shippers and secure strong market rates daily.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/service2.jpg" alt="Load Booking and Negotiation" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Professional Load Booking & Rate Negotiation</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our expert team specializes in securing high-paying loads through strategic broker relationships, 
              market analysis, and professional rate negotiations. We maximize your revenue per mile while 
              minimizing administrative burden.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Real-time rate monitoring across all lanes</li>
                <li>• Historical rate trending and forecasting</li>
                <li>• Seasonal demand pattern analysis</li>
                <li>• Fuel surcharge optimization</li>
                <li>• Regional market intelligence</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Broker Relationships</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Vetted broker network with payment history</li>
                <li>• Direct shipper connections</li>
                <li>• Preferred carrier status negotiations</li>
                <li>• Load priority and first-call opportunities</li>
                <li>• Long-term partnership development</li>
              </ul>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Rate Negotiation</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Professional rate negotiations</li>
                <li>• Detention and layover protection</li>
                <li>• Fuel surcharge negotiations</li>
                <li>• Accessorial fee optimization</li>
                <li>• Rate confirmation documentation</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Load Booking Process</h2>
              <div className="space-y-4 text-neutral-700">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold">Lane Analysis</h3>
                    <p>We analyze your preferred lanes, equipment specs, and schedule to identify optimal load opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold">Market Research</h3>
                    <p>Daily market rate analysis ensures we target loads with the best revenue potential for your operation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold">Load Presentation</h3>
                    <p>We present you with vetted load options including rate, timeline, and broker information for your approval.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold">Booking & Confirmation</h3>
                    <p>Once approved, we handle all broker communication, rate confirmations, and load documentation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Rate Negotiation Expertise</h2>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Market-Based Pricing</h3>
                  <p className="text-neutral-700">We leverage current market data and broker relationships to secure rates that reflect true market value.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Protection Clauses</h3>
                  <p className="text-neutral-700">Every load includes detention, layover, and accessorial protection to maximize your earnings.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Long-term Relationships</h3>
                  <p className="text-neutral-700">We build lasting partnerships with brokers and shippers for consistent, high-quality freight opportunities.</p>
                </div>
              </div>
              <a href="/contact" className="mt-6 inline-flex items-center rounded-sm bg-black px-6 py-3 text-white text-lg hover:bg-neutral-800 transition-colors">Start Booking Loads</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Service Highlights</h3>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Daily market checks and lane-specific targets</li>
              <li>Negotiation playbook to protect RPM</li>
              <li>Real-time updates and confirmations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Who It’s For</h3>
            <p className="mt-3 text-sm text-neutral-700">Carriers needing consistent freight with strong rates and clear communication.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Getting Started</h3>
            <p className="mt-3 text-sm text-neutral-700">Share your preferred lanes and equipment specs—we’ll align loads to your goals.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


