import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuActive(false);
  }, [location]);

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuActive(!isMenuActive);
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
    <nav className="navbar always-blue">
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            <svg width="30" height="30" viewBox="0 0 50 50" className="logo-icon">
              <circle cx="25" cy="25" r="20" fill="#4db5ff" />
              <text x="25" y="32" fontFamily="Arial" fontSize="24" fill="white" textAnchor="middle">YF</text>
            </svg>
            Youssef<span>Fawel</span>
          </Link>
        </div>
        
        <div
          className={`menu-btn ${isMenuActive ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <i className={`fas ${isMenuActive ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        
        <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              className={isActive('/')}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isActive('/about')}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={isActive('/skills')}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={isActive('/projects')}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              className={isActive('/certificates')}
              onClick={closeMenu}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="/cv"
              className={isActive('/cv')}
              onClick={closeMenu}
            >
              View CV
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive('/contact')}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
