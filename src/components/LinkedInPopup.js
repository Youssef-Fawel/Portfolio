import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/LinkedInPopup.css';

const LinkedInPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(20);
  const [showCountdown] = useState(true);

  useEffect(() => {
    let timer;
    let countdownTimer;

    if (showCountdown) {
      countdownTimer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownTimer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    timer = setTimeout(() => {
      setIsVisible(true);
      if (countdownTimer) clearInterval(countdownTimer);
    }, 20000); // 20 seconds

    return () => {
      clearTimeout(timer);
      if (countdownTimer) clearInterval(countdownTimer);
    };
  }, [showCountdown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleVisitLinkedIn = () => {
    window.open(
      'https://www.linkedin.com/posts/youssef-fawel_cv-activity-7378006809162268672-hlVL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA',
      '_blank'
    );
    setIsVisible(false);
  };

  return (
    <>
      {showCountdown && countdown > 0 && !isVisible && (
        <div className="countdown-indicator">
          LinkedIn post in: {countdown}s
        </div>
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="linkedin-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="linkedin-popup"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-header">
                <div className="popup-title">
                  <i className="fab fa-linkedin linkedin-icon"></i>
                  <span>I'm Looking for an Internship !</span>
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
                    <p>🚀 À la recherche d'un stage de fin d'études – Développement Full Stack - Intelligence Artificielle</p>
                    <p>Je suis actuellement étudiant en 5ᵉ année de cycle ingénieur en génie logiciel, et je recherche un stage de fin d'études à partir de février 2026...</p>
                    <div className="post-tags">
                      <span className="tag">#Stage</span>
                      <span className="tag">#FullStack</span>
                      <span className="tag">#AI</span>
                      <span className="tag">#Développement</span>
                      <span className="tag">#Opportunité</span>
                    </div>
                  </div>
                </div>

                <div className="popup-actions">
                  <button className="visit-linkedin-btn" onClick={handleVisitLinkedIn}>
                    <i className="fab fa-linkedin"></i>
                    <span>See the LinkedIn Post</span>
                  </button>
                  <button className="maybe-later-btn" onClick={handleClose}>
                    Maybe Later
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LinkedInPopup;
