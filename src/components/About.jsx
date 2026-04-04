import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, duration, text }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 16); 
      const timer = setInterval(() => {
        start += increment;
        if (start > target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [target, duration, isInView]);

  return (
    <div className="stat-item" ref={ref}>
      <h3 className="stat-number text-gradient">{count}+</h3>
      <p className="stat-text">{text}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="about-section">
       <div className="about-content glass-panel">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>About <span className="text-gradient">CoreWeb</span></h2>
            <p>
              We are a team of visionary developers and designers engineering the future of the web. 
              Our mission is to seamlessly merge artistic aesthetics with high-performance functionality, 
              delivering ultra-premium digital products that leave lasting impressions.
            </p>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Counter target={150} duration={2000} text="Projects Delivered" />
            <Counter target={85} duration={2000} text="Happy Clients" />
            <Counter target={10} duration={2000} text="Years Experience" />
          </motion.div>
       </div>
    </section>
  );
};

export default About;
