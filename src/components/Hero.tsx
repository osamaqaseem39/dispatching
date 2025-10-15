export default function Hero() {
  return (
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
        <div className="h-64 md:h-80 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M3 13h2l3 6h8l3-8h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 13V7h10l4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="20" r="1.5" fill="currentColor" />
            <circle cx="17" cy="20" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}


