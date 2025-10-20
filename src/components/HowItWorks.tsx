import ScrollAnimation from "./ScrollAnimation";

export default function HowItWorks() {
  const steps = [
    {
      title: "Quick Consultation",
      body: "Tell us about your equipment, lanes, RPM goals, and schedule. We align on preferences before booking anything.",
      icon: "💬",
      color: "bg-blue-500"
    },
    {
      title: "Carrier Setup",
      body: "Complete carrier packets and insurance verification so you're approved fast with trusted brokers.",
      icon: "📋",
      color: "bg-green-500"
    },
    {
      title: "Load Search & Negotiation",
      body: "We source high-quality freight and negotiate top market rates based on your targets.",
      icon: "🔍",
      color: "bg-purple-500"
    },
    {
      title: "Booking & Dispatch",
      body: "You approve every load. We handle rate cons, pickup details, and clear instructions for each stop.",
      icon: "📦",
      color: "bg-orange-500"
    },
    {
      title: "On‑Road Support 24/7",
      body: "We manage updates, detention/TONU requests, and broker comms so you can stay focused on driving.",
      icon: "🚛",
      color: "bg-red-500"
    },
    {
      title: "Invoicing & Follow‑Up",
      body: "We assist with POD submission, invoicing, and payment follow‑ups for smooth cash flow.",
      icon: "💰",
      color: "bg-indigo-500"
    },
  ];

  return (
    <section className="bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <ScrollAnimation direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              A clear, no‑pressure process designed for owner‑operators and small fleets. 
              No forced dispatch — you stay in control at every step.
            </p>
          </div>
        </ScrollAnimation>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.title} direction="up" delay={index * 100}>
                <div 
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 h-80 flex flex-col"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-black transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed flex-1">
                    {step.body}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-500/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={600}>
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
              <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of successful owner-operators who trust us with their dispatch needs. 
                Start your journey to higher revenue and less stress today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-black px-8 py-4 text-white text-lg font-medium hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Free Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center rounded-lg border-2 border-black px-8 py-4 text-black text-lg font-medium hover:bg-black hover:text-white transition-colors"
                >
                  View All Services
                </a>
              </div>
              <p className="mt-4 text-sm text-neutral-500">No commitment required • Free initial consultation</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}


