import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Testimonials – Freight Logistic LLC",
  description: "Real feedback from carriers we support.",
};

export default function TestimonialsPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Testimonials</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">Hear from owner-operators and fleets who trust us.</p>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}


