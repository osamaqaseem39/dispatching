const faqs = [
  {
    q: "Do you force dispatch?",
    a: "No. We are 100% no-forced-dispatch. You choose your loads and lanes.",
  },
  {
    q: "What equipment types do you work with?",
    a: "Dry van, reefer, flatbed, hotshot, and box truck.",
  },
  {
    q: "How do I get started?",
    a: "Reach out via the contact form or call us. We'll handle carrier setup and paperwork.",
  },
  {
    q: "When do I get paid?",
    a: "We help submit PODs and invoicing promptly so brokers can pay you per their terms.",
  },
];

export default function Faq() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-md border border-neutral-200 bg-white p-6">
              <div className="font-semibold text-neutral-900">{f.q}</div>
              <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


