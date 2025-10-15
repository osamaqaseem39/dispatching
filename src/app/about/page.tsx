export const metadata = {
  title: "About – Freight Logistic LLC",
  description: "Trusted partner for professional truck dispatching across the USA.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About Freight Logistic LLC</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">
            We provide carrier-first dispatch services focused on transparency, profitability, and long-term partnerships.
          </p>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Help owner-operators and small fleets stay loaded with top-paying freight while removing back-office friction.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What We Believe</h2>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Transparency and no forced dispatch</li>
              <li>Professional negotiation with broker partners</li>
              <li>Reliable 24/7 support</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


