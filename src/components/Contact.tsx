function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M6 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2c-9.94 0-18-8.06-18-18a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact Freight Logistic LLC</h2>
          <ul className="mt-4 text-sm text-neutral-700 space-y-2">
            <li className="flex items-center gap-2"><MailIcon /><span className="font-medium">Email:</span> freightlogistic01@gmail.com</li>
            <li className="flex items-center gap-2"><PhoneIcon /><span className="font-medium">Phone:</span> +1 (949) 828 1756</li>
            <li className="flex items-center gap-2"><LocationIcon /><span className="font-medium">Location:</span> United States</li>
            <li className="flex items-center gap-2"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none"><path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.5" /><path d="M7 8h10v8H7z" stroke="currentColor" strokeWidth="1.5" /></svg><span className="font-medium">Website:</span> www.freightslogistic.com</li>
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


