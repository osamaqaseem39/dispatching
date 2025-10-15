export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <div>© {new Date().getFullYear()} Freight Logistic LLC</div>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-neutral-900">Services</a>
          <a href="#benefits" className="hover:text-neutral-900">Why Us</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}


