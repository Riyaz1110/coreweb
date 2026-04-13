import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Cloudy Clutches',
    category: 'Online Shopping Website',
    image: '/cloudy-clutches.png',
    link: 'https://skop-up-5fp9.vercel.app/',
    color: 'purple'
  },
  {
    id: 2,
    title: 'Dr. S. Neelakandan',
    category: 'Portfolio',
    image: '/dr-neelakandan.png',
    link: 'https://www.drsneelakandan.com/',
    color: 'cyan'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-header">
        <h2>Featured <span className="text-gradient">Work</span></h2>
        <div className="section-line"></div>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            className="portfolio-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="portfolio-img-container">
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <a href={project.link} target={project.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="portfolio-link">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
            <div className="portfolio-info">
              <span className="portfolio-category">{project.category}</span>
              <h3 className="portfolio-title">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
