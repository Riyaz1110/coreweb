import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const imgX = useTransform(sx, (v) => v * 12);
  const imgY = useTransform(sy, (v) => v * 12);
  const orbX = useTransform(sx, (v) => v * -25);
  const orbY = useTransform(sy, (v) => v * -25);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 md:pt-32 pb-16 px-5 md:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(201,168,76,0.12), transparent 70%)" }}
      />
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute -top-32 right-0 w-[30rem] h-[30rem] rounded-full opacity-30 blur-3xl pointer-events-none bg-[#c9a84c]/30"
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-10 h-px bg-[#c9a84c]" />
          <span className="eyebrow">Web Design & Development Studio</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Headline */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] leading-[0.96] font-700 tracking-tight">
              {["Innovating", "the"].map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-4"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="serif-italic text-gold mr-4 inline-block"
              >
                Core
              </motion.span>
              {["of", "the", "Web"].map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.85 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-4"
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              We design and build modern, scalable, high-performance websites for
              founders and brands who treat the web as the front door of their business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <MagneticButton href="#services" variant="primary">
                Explore Services <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Start a Project
              </MagneticButton>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              style={{ x: imgX, y: imgY }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={heroImg}
                alt="A premium web design workspace"
                width={1536}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="eyebrow text-foreground/80">Studio</div>
                  <div className="serif-italic text-gold text-lg">est. craft</div>
                </div>
                <div className="serif-italic text-foreground/80 text-sm">/2025</div>
              </div>
            </motion.div>

            {/* Caption card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="hidden md:block absolute -bottom-8 -left-8 max-w-[18rem] p-5 bg-[#161616] border border-[rgba(240,215,140,0.12)]"
            >
              <div className="serif-italic text-gold text-3xl leading-none">"</div>
              <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
                Websites shouldn't feel like templates. They should feel like a brand
                walked into the room.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-24 pt-8 border-t border-[rgba(240,215,140,0.12)] grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
        >
          {[
            ["01", "Design"],
            ["02", "Development"],
            ["03", "Commerce"],
            ["04", "Optimisation"],
          ].map(([n, label]) => (
            <div key={n} className="flex items-baseline gap-3">
              <span className="serif-italic text-gold text-lg">{n}</span>
              <span className="text-foreground/80">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
