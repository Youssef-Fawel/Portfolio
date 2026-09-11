import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuActive(false);
  }, [location]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuActive);

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuActive(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuActive]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 100px
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuActive((isActive) => !isActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.menu');
      const menuBtn = document.querySelector('.menu-btn');
      
      if (isMenuActive && menu && menuBtn && 
          !menu.contains(event.target) && 
          !menuBtn.contains(event.target)) {
        setIsMenuActive(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuActive]);

  // Function to determine if a link is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return 'active';
    }
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label={language === 'en' ? 'Primary navigation' : 'Navigation principale'}>
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            <svg width="30" height="30" viewBox="0 0 50 50" className="logo-icon">
              <circle cx="25" cy="25" r="20" fill="#4db5ff" />
              <text x="25" y="32" fontFamily="Arial" fontSize="24" fill="white" textAnchor="middle">YF</text>
            </svg>
            {!scrolled && (
              <span className="logo-text">
                <span className="logo-first">Youssef</span>
                <span className="logo-last">Fawel</span>
              </span>
            )}
          </Link>
        </div>
        
        <button
          type="button"
          className={`menu-btn ${isMenuActive ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={language === 'en' ? 'Toggle navigation menu' : 'Ouvrir ou fermer le menu'}
          aria-expanded={isMenuActive}
          aria-controls="primary-menu"
        >
          <i className={`fas ${isMenuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <ul id="primary-menu" className={`menu ${isMenuActive ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              className={isActive('/')}
              onClick={closeMenu}
            >
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive('/about')}
              onClick={closeMenu}
            >
              {t.nav.about}
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={isActive('/skills')}
              onClick={closeMenu}
            >
              {t.nav.skills}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={isActive('/projects')}
              onClick={closeMenu}
            >
              {t.nav.projects}
            </Link>
          </li>
          <li>
            <Link
              to="/internships"
              className={isActive('/internships')}
              onClick={closeMenu}
            >
              {t.nav.internships}
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className={isActive('/certificates')}
              onClick={closeMenu}
            >
              {t.nav.certificates}
            </Link>
          </li>
          <li>
            <Link
              to="/cv"
              className={isActive('/cv')}
              onClick={closeMenu}
            >
              {t.nav.viewCV}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive('/contact')}
              onClick={closeMenu}
            >
              {t.nav.contact}
            </Link>
          </li>
          <li className="language-switcher">
            <button 
              className="language-btn" 
              onClick={(e) => {
                e.stopPropagation();
                toggleLanguage();
              }}
              aria-label={language === 'en' ? 'Afficher le site en français' : 'View the site in English'}
            >
              <i className="fas fa-globe"></i>
              <span className="lang-text">{language === 'en' ? 'FR' : 'EN'}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
