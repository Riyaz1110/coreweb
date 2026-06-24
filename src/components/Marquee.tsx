import { motion } from "framer-motion";
import mockup from "@/assets/services-mockup.jpg";

export function Marquee() {
  const items = ["Brand Sites", "E-Commerce", "Portfolios", "Web Apps", "Landing Pages", "SEO", "Web Design", "Development"];
  const row = [...items, ...items, ...items];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-y border-[rgba(240,215,140,0.1)]">
      <div className="mx-auto max-w-7xl px-5 md:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#c9a84c]" />
            <span className="eyebrow">What we make</span>
          </div>
          <h3 className="font-display text-3xl md:text-5xl font-700 leading-tight">
            Websites that <span className="serif-italic text-gold">work</span> — and look the part.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
            <img
              src={mockup}
              alt="Website mockup showcase"
              loading="lazy"
              width={1280}
              height={800}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/40 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className="mt-16 relative flex whitespace-nowrap">
        <div className="flex animate-[scroll_40s_linear_infinite] gap-12">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl font-600 text-foreground/30 hover:text-gold transition-colors">
              {t}
              <span className="serif-italic text-gold/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
