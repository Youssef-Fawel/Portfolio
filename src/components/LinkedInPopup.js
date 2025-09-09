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
      'https://www.linkedin.com/posts/youssef-fawel_exchangesemester-esiea-engineering-activity-7368930855508934658-jzuN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfv7ysBSAA3OYiTAPtRQV8Z0J2uJWssXYA',
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
                  <span>Check out my Academic Journey !</span>
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
                    <p>🚀 Début d'un nouveau chapitre académique et professionnel</p>
                    <p>Je suis heureux d'entamer ma 5ᵉ et dernière année d'études en ingénierie en France, dans le cadre d'un semestre d'échange à l'ESIEA...</p>
                    <div className="post-tags">
                      <span className="tag">#ExchangeSemester</span>
                      <span className="tag">#ESIEA</span>
                      <span className="tag">#Engineering</span>
                      <span className="tag">#Digital</span>
                      <span className="tag">#Innovation</span>
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
