export default function Contact() {
  return (
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
  );
}


