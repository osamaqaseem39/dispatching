import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Your Trusted Truck Dispatch Partner Across the USA
          </h1>
          <p className="mt-5 text-neutral-300 text-lg md:text-xl">
            Stay loaded. Stay profitable. Stay stress-free.
          </p>
          <p className="mt-3 text-neutral-300 text-base md:text-lg max-w-2xl">
            From load booking to paperwork, rate negotiation to route optimization — we keep your trucks moving and your business growing.
          </p>
          <ul className="mt-7 text-base text-neutral-300 space-y-2">
            <li>• Dry Van • Reefer • Flatbed • Step Deck • Hotshot • Box Truck</li>
            <li>• No forced dispatch • Transparent pricing • Nationwide coverage</li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="tel:+19498281756" className="inline-flex items-center rounded-sm bg-white px-5 py-2.5 text-neutral-950 text-base font-medium hover:bg-neutral-200">Call Now: +1 (949) 828-1756</a>
            <a href="/contact" className="inline-flex items-center rounded-sm border border-neutral-700 px-5 py-2.5 text-white text-base hover:bg-neutral-900">Get Started Today</a>
            <a href="/contact" className="inline-flex items-center rounded-sm border border-neutral-700 px-5 py-2.5 text-white text-base hover:bg-neutral-900">Request a Free Consultation</a>
          </div>
        </div>
        <div className="h-96 md:h-[560px] w-full md:w-[380px] rounded-md overflow-hidden border border-neutral-800 bg-neutral-900 mx-auto md:mx-0">
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


