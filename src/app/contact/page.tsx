export const metadata = {
  title: "Contact – Freight Logistic LLC",
  description: "Get in touch for reliable truck dispatch services across the USA.",
};

import Glows from "@/components/Glows";

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <Glows count={3} colors={["blue"]} />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Get in Touch with Freight Logistic LLC</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">Ready to grow your trucking business with professional dispatch support? Contact our team today for a free consultation or to start dispatching immediately.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Reach Us</h2>
            <ul className="mt-4 text-sm text-neutral-700 space-y-2">
              <li><span className="font-medium">Email:</span> freightlogistic01@gmail.com</li>
              <li><span className="font-medium">Phone:</span> +1 (949) 828 1756</li>
              <li><span className="font-medium">Location:</span> United States</li>
              <li><span className="font-medium">Website:</span> www.freightslogistic.com</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+19498281756" className="inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Call Now</a>
              <a href="mailto:freightlogistic01@gmail.com" className="inline-flex items-center rounded-sm border border-neutral-300 px-4 py-2 text-neutral-900 text-sm hover:bg-neutral-100">Email Us</a>
            </div>
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
              <label className="block text-sm font-medium text-neutral-800">Truck Type</label>
              <input type="text" className="mt-1 w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800" placeholder="Dry Van, Reefer, Flatbed, Hotshot, Box Truck, etc." />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-800">Message</label>
              <textarea className="mt-1 w-full rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800" rows={4} placeholder="Tell us about your lanes, equipment, and goals" />
            </div>
            <button type="button" className="w-full rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Send Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}


