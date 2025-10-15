export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
      <a
        href="tel:+19498281756"
        className="rounded-full bg-neutral-950 text-white h-12 w-12 flex items-center justify-center border border-neutral-800 hover:bg-black"
        aria-label="Call"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"><path d="M6 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2c-9.94 0-18-8.06-18-18a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5" /></svg>
      </a>
      <a
        href="mailto:freightlogistic01@gmail.com"
        className="rounded-full bg-white text-neutral-950 h-12 w-12 flex items-center justify-center border border-neutral-200 hover:bg-neutral-200"
        aria-label="Email"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" /></svg>
      </a>
    </div>
  );
}


