import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, ShoppingCart, Search } from 'lucide-react';

const servicesSet = [
  {
    title: 'Web Development',
    desc: 'High-performance, scalable web apps built with cutting-edge tech.',
    icon: <Code size={32} className="text-cyan" />,
    color: 'cyan'
  },
  {
    title: 'UI/UX Design',
    desc: 'Breathtaking interfaces providing the ultimate user experience.',
    icon: <Palette size={32} className="text-purple" />,
    color: 'purple'
  },
  {
    title: 'E-Commerce Solutions',
    desc: 'Custom online stores optimized for maximum conversion.',
    icon: <ShoppingCart size={32} className="text-blue" />,
    color: 'blue'
  },
  {
    title: 'SEO Optimization',
    desc: 'Data-driven SEO making sure you dominate search rankings.',
    icon: <Search size={32} className="text-cyan" />,
    color: 'cyan'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Core <span className="text-gradient">Services</span>
        </motion.h2>
        <motion.div 
          className="section-line"
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
        />
      </div>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {servicesSet.map((srv, idx) => (
          <motion.div key={idx} variants={cardVariants} className="service-card">
            <div className="icon-wrapper">
              {srv.icon}
            </div>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
