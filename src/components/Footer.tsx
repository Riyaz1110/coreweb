export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(240,215,140,0.12)] mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="font-display text-3xl md:text-5xl font-700 leading-[1.05] max-w-xl">
              Innovating the <span className="serif-italic text-gold">Core</span> of the Web.
            </div>
          </div>
          <div className="md:col-span-5 md:text-right space-y-3 text-sm text-foreground/70">
            <div className="break-all">info@corewebinnovations.online</div>
            <div className="serif-italic text-gold">CoreWeb Innovations</div>
            <div>Remote · Worldwide</div>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-[rgba(240,215,140,0.08)] flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/40">
          <div>© {new Date().getFullYear()} CoreWeb Innovations. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition">Instagram</a>
            <a href="#" className="hover:text-gold transition">LinkedIn</a>
            <a href="#" className="hover:text-gold transition">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
