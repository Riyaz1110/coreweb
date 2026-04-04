import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';

const FloatingShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2, 1, -3]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#00f0ff" wireframe />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[-3, -1, -5]}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial color="#8a2be2" wireframe />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[3, -2, -4]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#0066ff" transparent opacity={0.7} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
         <mesh position={[-2, 2, -4]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#ffffff" wireframe />
        </mesh>
      </Float>
    </>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="canvas-container">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00f0ff" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#8a2be2" intensity={2} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <FloatingShapes />
        </Canvas>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            Innovating the <span className="text-gradient">Core</span> of the Web
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="hero-subtitle">
            We build modern, scalable, and high-performance websites infused with futuristic digital experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-cta-wrapper"
        >
          <button 
            className="btn-glow hero-btn"
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Started
            <div className="btn-glow-effect"></div>
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
