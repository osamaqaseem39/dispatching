export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-sm bg-black" />
            <div className="font-semibold tracking-tight">Freight Logistic LLC</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#benefits" className="hover:text-black">Why Us</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Get Started</a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              Truck Dispatch Services USA – Freight Logistic LLC
            </h1>
            <p className="mt-4 text-neutral-300 text-base md:text-lg">
              Your trusted partner for professional truck dispatching in the USA. We help owner-operators, small fleets, and independent drivers stay loaded, profitable, and stress-free.
            </p>
            <ul className="mt-6 text-sm text-neutral-300 space-y-2">
              <li>• Dry Van • Reefer • Flatbed • Hotshot • Box Truck</li>
              <li>• No forced dispatch • Transparent pricing • Nationwide coverage</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm font-medium hover:bg-neutral-200">Start Earning More</a>
              <a href="#services" className="inline-flex items-center rounded-sm border border-neutral-700 px-4 py-2 text-white text-sm hover:bg-neutral-900">Explore Services</a>
            </div>
          </div>
          <div className="h-64 md:h-80 rounded-md bg-neutral-900 border border-neutral-800" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Core Dispatch Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Full-Service Truck Dispatching",
                body:
                  "We manage load search, rate negotiation, paperwork, and driver support. No forced dispatch and complete transparency.",
                keywords:
                  "full truck dispatch services, dispatch company for owner-operators, dispatch services for small fleets USA",
              },
              {
                title: "Load Booking & Rate Negotiation",
                body:
                  "We secure top market rates and handle all broker communication, confirmations, and follow-ups to maximize income.",
                keywords:
                  "high-paying loads USA, load negotiation services, dispatch for independent truckers",
              },
              {
                title: "Carrier Setup & Paperwork Management",
                body:
                  "Carrier packets, contracts, insurance verification, and required docs to get you approved fast without delays.",
                keywords:
                  "carrier setup services, dispatch back-office support, trucking paperwork management",
              },
              {
                title: "Route Planning & Trip Optimization",
                body:
                  "Advanced planning to save fuel, reduce downtime, and improve delivery times for better profitability.",
                keywords:
                  "route optimization for truckers, fuel-efficient routes, dispatch planning services",
              },
              {
                title: "24/7 Dispatch Support",
                body:
                  "Round-the-clock updates, broker communication, and load tracking to keep operations smooth.",
                keywords:
                  "24/7 truck dispatch service, round-the-clock dispatch support, reliable trucking dispatch",
              },
              {
                title: "Invoicing & Billing Assistance",
                body:
                  "We manage invoicing, POD submission, and broker follow-ups so you get paid quickly and accurately.",
                keywords:
                  "trucking invoicing services, freight billing management, back-office dispatch support",
              },
              {
                title: "Compliance & Safety Support",
                body:
                  "Assistance with FMCSA, DOT, and ELD requirements to keep records and reports audit-ready.",
                keywords:
                  "trucking compliance support, DOT documentation, FMCSA dispatch compliance",
              },
              {
                title: "Personalized Dispatch Solutions",
                body:
                  "Custom plans built around your truck type, preferred lanes, and schedule to increase load opportunities.",
                keywords:
                  "custom dispatching services, personalized trucking dispatch, dispatch plans for owner-operators",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-md border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.body}</p>
                <p className="mt-4 text-[11px] text-neutral-500">Keywords: {item.keywords}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why Choose Freight Logistic LLC?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Transparent Pricing — No hidden fees, no forced dispatch",
              "Nationwide Coverage — Serving carriers across all U.S. states",
              "Experienced Dispatchers — Negotiation and support experts",
              "Reliable Loads — Partnered with top-rated brokers and shippers",
              "Long-Term Partnerships — We grow when our carriers grow",
            ].map((point) => (
              <div key={point} className="rounded-md border border-neutral-200 bg-white p-5">
                <p className="text-sm text-neutral-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Start Earning More with Freight Logistic LLC</h3>
            <p className="mt-2 text-neutral-300 text-sm">
              Join satisfied truckers who trust us to find profitable loads, manage paperwork, and keep their wheels turning every day.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a href="#contact" className="inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm font-medium hover:bg-neutral-200">Contact Dispatch</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact Freight Logistic LLC</h2>
            <ul className="mt-4 text-sm text-neutral-700 space-y-2">
              <li><span className="font-medium">Email:</span> freightlogistic01@gmail.com</li>
              <li><span className="font-medium">Phone:</span> +1 (949) 828 1756</li>
              <li><span className="font-medium">Location:</span> United States</li>
              <li><span className="font-medium">Website:</span> www.freightslogistic.com</li>
            </ul>
            <p className="mt-6 text-sm text-neutral-600">
              We respond quickly — dispatchers available 24/7.
            </p>
          </div>
          <form className="rounded-md border border-neutral-200 bg-white p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-800">Name</label>
              <input type="text" className="mt-1 w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-800">Email</label>
              <input type="email" className="mt-1 w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-800">Phone</label>
              <input type="tel" className="mt-1 w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800" placeholder="(###) ### ####" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-800">Message</label>
              <textarea className="mt-1 w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800" rows={4} placeholder="Tell us about your lanes, equipment, and goals" />
            </div>
            <button type="button" className="w-full rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Send Request</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div>© {new Date().getFullYear()} Freight Logistic LLC</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#benefits" className="hover:text-neutral-900">Why Us</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
