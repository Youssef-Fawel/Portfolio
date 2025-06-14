import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LinkedInPopup.css';

const LinkedInPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('linkedinPopupShown');
    
    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('linkedinPopupShown', 'true');
      }, 20000); // 20 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleVisitLinkedIn = () => {
    window.open('https://www.linkedin.com/posts/youssef-fawel_finalyearproject-mernstack-webapp-activity-7336013938741993473-4uxa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA', '_blank');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="linkedin-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Popup */}
          <motion.div
            className="linkedin-popup"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="popup-header">
              <div className="popup-title">
                <i className="fab fa-linkedin linkedin-icon"></i>
                <span>Check out my latest project!</span>
              </div>
              <button className="close-btn" onClick={handleClose}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="popup-content">
              <div className="post-preview">
                <div className="author-info">
                  <div className="author-avatar">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="author-details">
                    <h4>Youssef Fawel</h4>
                    <p>Software Engineering Student</p>
                  </div>
                </div>
                
                <div className="post-content">
                  <p>🚀 Excited to share my Final Year Project!</p>
                  <p>Built a comprehensive web application using the MERN Stack...</p>
                  
                  <div className="post-tags">
                    <span className="tag">#FinalYearProject</span>
                    <span className="tag">#MERNStack</span>
                    <span className="tag">#WebApp</span>
                  </div>
                </div>
              </div>
              
              <div className="popup-actions">
                <button className="visit-linkedin-btn" onClick={handleVisitLinkedIn}>
                  <i className="fab fa-linkedin"></i>
                  <span>Visit My LinkedIn</span>
                </button>
                <button className="maybe-later-btn" onClick={handleClose}>
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LinkedInPopup;
