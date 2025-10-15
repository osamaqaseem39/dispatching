export default function Cta() {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Start Earning More with Freight Logistic LLC</h3>
          <p className="mt-2 text-neutral-300 text-sm">
            Join satisfied truckers who trust us to find profitable loads, manage paperwork, and keep their wheels turning every day.
          </p>
        </div>
        <div className="flex md:justify-end">
          <a href="#contact" className="inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm font-medium hover:bg-neutral-200">Contact Dispatch</a>
        </div>
      </div>
    </section>
  );
}


