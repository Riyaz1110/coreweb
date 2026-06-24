import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import project1 from "@/assets/project-cloudy.jpg";
import project2 from "@/assets/project-neelakandan.jpg";

const projects = [
  { title: "Cloudy Clutches", category: "E-Commerce", year: "2025", img: project1, span: "lg:col-span-7", aspect: "aspect-[4/3]", href: "#", status: "Under Deployment", external: false },
  { title: "Dr. S. Neelakandan", category: "Personal Portfolio", year: "2025", img: project2, span: "lg:col-span-5", aspect: "aspect-[3/4]", href: "https://www.drsneelakandan.com", status: "Live", external: true },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32 px-5 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <SectionHeader eyebrow="Selected work" title="Featured Work" />
          <a href="#contact" className="hidden md:inline-flex items-baseline gap-2 text-sm text-foreground/70 hover:text-gold transition border-b border-[rgba(240,215,140,0.3)] hover:border-gold pb-1">
            <span className="serif-italic">view all</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group block ${p.span}`}
            >
              <div className={`relative ${p.aspect} overflow-hidden bg-[#161616] rounded-sm`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <span className="eyebrow">0{i + 1}</span>
                    <span className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${p.status === "Live" ? "border-gold/50 text-gold bg-gold/5" : "border-foreground/30 text-foreground/70 bg-[#0d0d0d]/60"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${p.status === "Live" ? "bg-gold animate-pulse" : "bg-foreground/50"}`} />
                      {p.status}
                    </span>
                  </div>

                  <div>
                    <div className="overflow-hidden mb-1">
                      <div className="eyebrow text-foreground/60">{p.category} — {p.year}</div>
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl font-600 mt-2">{p.title}</h3>

                    <div className="mt-5 flex items-center gap-3 text-sm text-gold opacity-80 group-hover:opacity-100 group-hover:gap-4 transition-all">
                      <span className="serif-italic">{p.external ? "visit site" : "coming soon"}</span>
                      <span className="w-10 h-px bg-gold transition-all group-hover:w-16" />
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
