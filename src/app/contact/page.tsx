export const metadata = {
  title: "Contact Freights Logistic | 24/7 Truck Dispatching Support",
  description: "Get in touch with Freights Logistic for truck dispatching, load booking, or support. Our U.S.-based team is available 24/7 to help drivers and fleets nationwide.",
};

import Glows from "@/components/Glows";

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <Glows count={3} colors={["blue"]} />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Let's Get You Moving!</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">Our team is here to help you with load bookings, dispatch support, and all your freight needs.</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="mt-2 text-sm text-neutral-700 mb-4">Fill out the form below and our dispatching experts will reach out within 24 hours.</p>
            <ul className="mt-4 text-sm text-neutral-700 space-y-2">
              <li>📍 <span className="font-medium">Office Address:</span> Miami, Florida</li>
              <li>📞 <span className="font-medium">Phone:</span> (949) 828 1756</li>
              <li>📧 <span className="font-medium">Email:</span> freightlogistic01@gmail.com</li>
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
        <div className="text-center mt-12">
          <p className="text-lg text-neutral-700 font-medium">
            Start your dispatching journey with Freights Logistic today!
          </p>
        </div>
      </section>
    </main>
  );
}


