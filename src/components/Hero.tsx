import Image from "next/image";

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


