import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight, Check } from "lucide-react";
import devImg from "@/assets/service-dev.jpg";
import designImg from "@/assets/service-design.jpg";
import ecomImg from "@/assets/service-ecom.jpg";
import seoImg from "@/assets/service-seo.jpg";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance, scalable websites engineered with modern stacks and an obsession for craft.",
    tag: "Engineering",
    img: devImg,
    bullets: ["React, Next.js & TanStack stacks", "Lightning-fast Core Web Vitals", "Clean, maintainable codebase", "CMS & API integrations"],
  },
  {
    num: "02",
    title: "UI / UX Design",
    desc: "Considered interfaces with a premium feel — every detail intentional, every interaction earned.",
    tag: "Design",
    img: designImg,
    bullets: ["Brand-led visual systems", "Wireframes & prototypes in Figma", "Accessible, human-centred flows", "Motion & micro-interactions"],
  },
  {
    num: "03",
    title: "E-Commerce",
    desc: "Conversion-focused storefronts with refined architecture and seamless checkout journeys.",
    tag: "Commerce",
    img: ecomImg,
    bullets: ["Shopify & custom storefronts", "Optimised product pages", "Frictionless checkout flows", "Payments & inventory wiring"],
  },
  {
    num: "04",
    title: "SEO Optimisation",
    desc: "Data-driven strategy that compounds. Lasting visibility, not vanity metrics.",
    tag: "Growth",
    img: seoImg,
    bullets: ["Technical SEO audits", "Keyword & content strategy", "On-page & schema markup", "Performance & analytics setup"],
  },
];

function Card({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const trx = useTransform(srx, (v) => `${v}deg`);
  const try_ = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 4);
    rx.set(-(py - 0.5) * 4);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: trx, rotateY: try_, transformPerspective: 1200 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="What we do" title={"Our Core Services"} />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-20">
            <p className="text-muted-foreground leading-relaxed">
              Four disciplines. One studio. Each engagement is led by senior craft
              and shaped around the brand it serves.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[rgba(240,215,140,0.08)] border border-[rgba(240,215,140,0.08)]">
          {services.map((s, i) => (
            <Card key={s.num} index={i}>
              <div className="group relative h-full bg-[#0d0d0d] transition-colors duration-500 hover:bg-[#111] overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={896}
                    height={504}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                    <span className="serif-italic text-gold text-xl">{s.num}</span>
                    <span className="eyebrow bg-[#0d0d0d]/60 backdrop-blur px-3 py-1 rounded-full border border-[rgba(240,215,140,0.2)]">{s.tag}</span>
                  </div>
                </div>

                <div className="p-7 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl font-600 mb-4 transition-colors group-hover:text-gold">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check size={14} className="text-gold mt-1 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 text-sm text-gold border-b border-[rgba(240,215,140,0.3)] hover:border-gold pb-1 transition-all group/btn"
                  >
                    <span className="serif-italic">Discover {s.title}</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>

                <span className="absolute left-7 right-7 bottom-0 md:left-10 md:right-10 h-px bg-gradient-to-r from-[#c9a84c] to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
