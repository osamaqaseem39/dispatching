import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt="Freight Logistic LLC" width={36} height={36} className="rounded-sm object-cover" />
          <div className="font-semibold tracking-tight">Freight Logistic LLC</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/compliance" className="hover:text-white">Compliance</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="/contact" className="inline-flex items-center rounded-sm bg-white px-4 py-2 text-neutral-950 text-sm hover:bg-neutral-200">Get Started</a>
      </div>
    </header>
  );
}


