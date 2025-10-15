import Image from "next/image";

export const metadata = {
  title: "Personalized Dispatch Solutions – Freight Logistic LLC",
  description: "Tailored dispatching for your truck type, preferred lanes, and schedule.",
};

export default function PersonalizedDispatchSolutionsPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Personalized Dispatch Solutions</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">Every carrier runs differently — we adapt to your equipment, goals, and schedule.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/services/service8.jpg" alt="Personalized Dispatch Solutions" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Customization</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>Equipment-specific strategies</li>
              <li>Preferred lanes and regions</li>
              <li>Home time and scheduling needs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Get a Plan</h2>
            <p className="mt-2 text-sm text-neutral-700">We’ll create a dispatch approach that balances rate, reliability, and lifestyle.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Build My Plan</a>
          </div>
        </div>
      </section>
    </main>
  );
}


