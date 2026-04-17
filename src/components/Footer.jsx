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
        <a href="https://drive.google.com/file/d/1SicsMWkUMj6m2F7beyd8n9N-1uM4jdTb/view?usp=sharing">Link</a>
        <br />
        <a href="https://drive.google.com/file/d/1Ds1OmZYPUjU_yj0_299PjdNoKBZWY9VV/view?usp=sharing">2</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://drive.google.com/file/d/1ndS57xWWSkUsKMpSAkfdorn6-TtRmPQM/view?usp=sharing">3</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://drive.google.com/file/d/1A5q1rCUyje0yEyyWIgiISKAPW_WMSN5I/view?usp=sharing">4</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://drive.google.com/file/d/1jFXBaPJZZQw5Nj59pLoMfOTQ4x5gXpJn/view?usp=sharing">5</a>
      </div>
    </footer>
  );
};

export default Footer;
