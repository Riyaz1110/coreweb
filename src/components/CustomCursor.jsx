import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          filter: 'drop-shadow(0 0 5px rgba(0, 240, 255, 0.8))',
          x: cursorX,
          y: cursorY,
          translateX: '-2px',
          translateY: '-2px',
        }}
      >
        <path
          d="M 2 2 L 18 10 L 11 13 L 8 20 L 2 2 Z"
          fill="rgba(0, 240, 255, 0.2)"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>
      <motion.div
        className="cursor-glow"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-200px',
          translateY: '-200px',
        }}
      />
    </>
  );
};

export default CustomCursor;
