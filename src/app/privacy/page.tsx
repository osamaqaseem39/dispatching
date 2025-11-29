export const metadata = {
  title: "Privacy Policy | Freight Logistic",
  description: "Freight Logistic respects your privacy. Read our policy on how we collect, use, and protect personal information of clients and visitors.",
};

import Glows from "@/components/Glows";

export default function PrivacyPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-neutral-950 text-white relative overflow-hidden">
        <Glows count={3} colors={["blue"]} />
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="prose prose-neutral max-w-none">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              At Freight Logistic, your privacy is important to us. We collect basic information 
              (name, contact details, business data) only to improve our dispatching and 
              customer experience.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              We never sell or share your data with third parties.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              All transactions and communications are protected with secure encryption.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              For any concerns, contact us at{" "}
              <a href="mailto:freightlogistic01@gmail.com" className="text-black font-medium hover:underline">
                freightlogistic01@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

