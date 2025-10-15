import Image from "next/image";

export const metadata = {
  title: "24/7 Dispatch Support – Freight Logistic LLC",
  description: "Round-the-clock updates, broker communication, and load tracking to keep operations smooth.",
};

export default function Dispatch247Page() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">24/7 Dispatch Support</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl">Any time of day or night, we’re available with real-time updates and problem-solving.</p>
          </div>
          <div className="h-56 md:h-64 rounded-md overflow-hidden border border-neutral-800 bg-neutral-900">
            <Image src="/images/services/service5.jpg" alt="24/7 Dispatch Support" width={1200} height={800} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Always On</h2>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2 list-disc pl-5">
              <li>After-hours broker communication</li>
              <li>Issue escalation and support</li>
              <li>Tracking and status updates</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Stay Moving</h2>
            <p className="mt-2 text-sm text-neutral-700">We resolve issues quickly to minimize delays and keep your trucks earning.</p>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Talk to Dispatch</a>
          </div>
        </div>
      </section>
    </main>
  );
}


