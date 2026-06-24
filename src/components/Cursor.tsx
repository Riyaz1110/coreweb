import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      requestAnimationFrame(loop);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a,button,[data-magnet]");
      if (ringRef.current) {
        if (interactive) {
          ringRef.current.style.width = "56px";
          ringRef.current.style.height = "56px";
          ringRef.current.style.borderColor = "#c9a84c";
        } else {
          ringRef.current.style.width = "36px";
          ringRef.current.style.height = "36px";
          ringRef.current.style.borderColor = "rgba(201,168,76,0.5)";
        }
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
