import Faq from "@/components/Faq";

export const metadata = {
  title: "FAQ – Freight Logistic LLC",
  description: "Answers to common questions about our dispatch services.",
};

export default function FaqPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-3 text-neutral-300 max-w-3xl">Everything you need to know to get started.</p>
        </div>
      </section>
      <Faq />
    </main>
  );
}


