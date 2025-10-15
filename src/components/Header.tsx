export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-sm bg-black" />
          <div className="font-semibold tracking-tight">Freight Logistic LLC</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-black">Services</a>
          <a href="#benefits" className="hover:text-black">Why Us</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-sm bg-black px-4 py-2 text-white text-sm hover:bg-neutral-800">Get Started</a>
      </div>
    </header>
  );
}


