import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/logo-mark.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Work" },
  { href: "#testimonials", label: "Voices" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const l of links) {
        const el = document.getElementById(l.href.slice(1));
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(l.href.slice(1));
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "px-6 py-3 rounded-full bg-[#0d0d0d]/80 backdrop-blur-xl border border-[rgba(240,215,140,0.1)]" : ""
        }`}>
          <a href="#home" className="flex items-center gap-2.5 group">
            <img src={logoMark} alt="CoreWeb Innovations" width={36} height={36} className="w-8 h-8 md:w-9 md:h-9 object-contain" />
            <span className="font-display font-700 text-base md:text-lg tracking-tight">CoreWeb</span>
            <span className="serif-italic text-gold text-sm md:text-base">innovations</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-magnet
                className="relative px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="relative">
                  {l.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-px bg-[#c9a84c] origin-left transition-transform duration-500 ${
                      active === l.href.slice(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            data-magnet
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-[rgba(240,215,140,0.3)] text-foreground hover:bg-[#c9a84c] hover:text-[#0d0d0d] hover:border-[#c9a84c] transition-all rounded-full"
          >
            Start Project
          </a>

          <button className="lg:hidden text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-3 rounded-2xl bg-[#0d0d0d]/95 backdrop-blur-xl border border-[rgba(240,215,140,0.12)] overflow-hidden"
          >
            <div className="flex flex-col p-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 text-base text-foreground/80 hover:text-gold transition"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
