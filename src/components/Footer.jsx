import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#" className="logo">
            CoreWeb <span className="text-gradient">Innovations</span>
          </a>
          <p>Innovating the digital horizon.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CoreWeb Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
