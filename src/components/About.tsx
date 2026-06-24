import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import aboutImg from "@/assets/about-hands.jpg";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const v = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(v, to, { duration: 2, ease: "easeOut" });
    const u = v.on("change", (val) => {
      if (ref.current) ref.current.textContent = Math.round(val).toString();
    });
    return () => { c.stop(); u(); };
  }, [inView, to, v]);

  return (
    <span className="font-display text-6xl md:text-7xl font-700 inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span className="serif-italic text-gold text-3xl md:text-4xl ml-1">+</span>
    </span>
  );
}

const stats = [
  { n: 10, label: "Projects Delivered" },
  { n: 7, label: "Happy Clients" },
  { n: 1, label: "Year of Craft" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Designer hands working on a laptop"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/70 via-transparent to-transparent" />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="serif-italic text-gold">/ in the studio</span>
              <span className="text-foreground/50">— established craft</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <SectionHeader eyebrow="About the studio" title="A small studio with a serious craft." />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a team of developers and designers building beautiful websites —
              quietly, deliberately, and with care. Our mission is to merge{" "}
              <span className="serif-italic text-gold">creativity</span>, technology, and
              performance to create digital work that lasts.
            </p>

            <div className="mt-8 hairline w-32" />

            <p className="mt-8 text-muted-foreground leading-relaxed">
              No templates, no trends. Every project begins with a question and ends
              with an experience. We work with founders and brands who treat the web
              as the front door of their company.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(240,215,140,0.12)] border border-[rgba(240,215,140,0.12)]">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#0d0d0d] p-6">
                  <Counter to={s.n} />
                  <div className="mt-3 text-sm text-foreground/70">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
