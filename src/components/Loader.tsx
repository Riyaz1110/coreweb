import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => Math.min(100, p + Math.random() * 14)), 90);
    const hide = setTimeout(() => setShow(false), 1700);
    return () => { clearInterval(t); clearTimeout(hide); };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] bg-[#0d0d0d] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="font-display text-4xl md:text-5xl font-700 mb-2">
              CoreWeb <span className="serif-italic text-gold">innovations</span>
            </div>
            <div className="eyebrow opacity-60">Innovating the Core of the Web</div>
          </motion.div>
          <div className="mt-12 w-56 h-px bg-[rgba(240,215,140,0.15)] overflow-hidden">
            <div className="h-full bg-[#c9a84c] transition-all duration-150" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3 text-xs text-foreground/40 tabular-nums">{Math.round(progress)}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
