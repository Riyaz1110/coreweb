import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

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
        }}
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
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
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};

export default CustomCursor;
