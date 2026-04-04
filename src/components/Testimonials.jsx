import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Cloudy Clutches',
    role: 'Online Shopping Website',
    text: 'CoreWeb Innovations crafted a stunning, high-performance shopping experience. Our customer engagement skyrocketed thanks to the incredible futuristic design.',
  },
  {
    id: 2,
    name: 'Dr. S. Neelakandan',
    role: 'Portfolio Project',
    text: 'The portfolio website built is incredibly professional, sleek, and perfectly represents my medical practice. Truly world-class digital craftsmanship.',
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header center">
        <h2>Client <span className="text-gradient">Testimonials</span></h2>
      </div>

      <div className="testimonial-container">
        <button className="nav-btn prev glass-panel" onClick={prev}><ChevronLeft /></button>
        
        <div className="testimonial-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="testimonial-card glass-panel"
            >
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">"{testimonials[current].text}"</p>
              <div className="testimonial-author">
                <div>
                  <h4>{testimonials[current].name}</h4>
                  <span>{testimonials[current].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="nav-btn next glass-panel" onClick={next}><ChevronRight /></button>
      </div>
    </section>
  );
};

export default Testimonials;
