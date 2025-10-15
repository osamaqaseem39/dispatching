import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            Your Trusted Truck Dispatch Partner Across the USA
          </h1>
          <p className="mt-4 text-neutral-300 text-base md:text-lg">
            Stay loaded. Stay profitable. Stay stress-free.
          </p>
          <p className="mt-2 text-neutral-300 text-sm md:text-base max-w-2xl">
            From load booking to paperwork, rate negotiation to route optimization — we keep your trucks moving and your business growing.
          </p>
          <ul className="mt-6 text-sm text-neutral-300 space-y-2">
            <li>• Dry Van • Reefer • Flatbed • Step Deck • Hotshot • Box Truck</li>
            <li>• No forced dispatch • Transparent pricing • Nationwide coverage</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+19498281756" className="inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm font-medium hover:bg-neutral-200">Call Now: +1 (949) 828-1756</a>
            <a href="/contact" className="inline-flex items-center rounded-sm border border-neutral-700 px-4 py-2 text-white text-sm hover:bg-neutral-900">Get Started Today</a>
            <a href="/contact" className="inline-flex items-center rounded-sm border border-neutral-700 px-4 py-2 text-white text-sm hover:bg-neutral-900">Request a Free Consultation</a>
          </div>
        </div>
        <div className="h-64 md:h-80 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
          <Image
            src="/images/heroimage.jpg"
            alt="Freight Logistic LLC - truck dispatching"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}


