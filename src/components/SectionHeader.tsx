import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-16 max-w-3xl ${a}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        className={`flex items-center gap-3 mb-6 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="w-8 h-px bg-[#c9a84c]" />
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl md:text-6xl font-700 leading-[1.02] tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-muted-foreground leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
