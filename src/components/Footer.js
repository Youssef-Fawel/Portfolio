import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Youssef<span>Fawel</span></h3>
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> youssef.fawel@et.esiea.fr</p>
            <p><i className="fas fa-map-marker-alt"></i> Sousse, Tunisia</p>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/youssef-fawel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:youssef.fawel@et.esiea.fr" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/Youssef-Fawel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/youssef.fawel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com/YusufFawel/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="copyright">
            <span>© {currentYear} | Developed and Designed by <Link to="/cv">Youssef Fawel</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
