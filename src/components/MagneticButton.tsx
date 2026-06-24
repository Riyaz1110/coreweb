import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export function MagneticButton({ children, href, onClick, variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px * 0.25);
    y.set(py * 0.25);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-500 tracking-wide overflow-hidden group transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[#c9a84c] text-[#0d0d0d] hover:bg-[#f0d78c]"
      : "border border-[rgba(240,215,140,0.3)] text-foreground hover:bg-[rgba(240,215,140,0.06)] hover:border-[#c9a84c]";

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  const Comp: any = href ? motion.a : motion.button;
  return (
    <Comp
      ref={ref as any}
      href={href}
      onClick={onClick}
      data-magnet
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
    >
      {inner}
    </Comp>
  );
}
