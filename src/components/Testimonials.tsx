import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    quote: "CoreWeb crafted a stunning, high-performance shopping experience. Our customer engagement increased thanks to the considered design and feel.",
    author: "Cloudy Clutches",
    role: "E-Commerce Client",
  },
  {
    quote: "Their attention to detail turned my personal site into a true showcase. Every interaction felt intentional and quietly impressive.",
    author: "Dr. S. Neelakandan",
    role: "Portfolio Client",
  },
  {
    quote: "Working with CoreWeb felt rare — a studio that cares about typography, weight, and pace as much as the code beneath it.",
    author: "Studio Partner",
    role: "Founder",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, []);
  const c = items[i];

  return (
    <section id="testimonials" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Voices" title="Client Testimonials" align="center" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="serif-italic text-gold/30 text-[10rem] leading-none mb-[-3rem] select-none">"</div>

          <div className="min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-2xl md:text-4xl leading-snug tracking-tight max-w-3xl">
                  {c.quote}
                </p>
                <div className="mt-10 flex flex-col items-center gap-2">
                  <span className="w-10 h-px bg-[#c9a84c]" />
                  <div className="font-display font-600 text-lg">{c.author}</div>
                  <div className="serif-italic text-gold text-sm">{c.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
              className="w-12 h-12 rounded-full border border-[rgba(240,215,140,0.3)] grid place-items-center hover:bg-[#c9a84c] hover:text-[#0d0d0d] hover:border-[#c9a84c] transition"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-px transition-all duration-500 ${idx === i ? "w-12 bg-[#c9a84c]" : "w-6 bg-[rgba(240,215,140,0.25)]"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((v) => (v + 1) % items.length)}
              className="w-12 h-12 rounded-full border border-[rgba(240,215,140,0.3)] grid place-items-center hover:bg-[#c9a84c] hover:text-[#0d0d0d] hover:border-[#c9a84c] transition"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
