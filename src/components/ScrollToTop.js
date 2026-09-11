import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label={t.nav.backToTop}
    >
      <i className="fas fa-angle-up" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTop;
