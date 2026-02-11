import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LinkedInPopup.css';

const LinkedInPopup = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);
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
    }, 10000); // 10 seconds

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
      'https://www.linkedin.com/in/youssef-fawel/',
      '_blank'
    );
    setIsVisible(false);
  };

  return (
    <>
      {showCountdown && countdown > 0 && !isVisible && (
        <div className="countdown-indicator">
          {t.linkedin.countdown} {countdown}s
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
                  <span>{t.linkedin.title}</span>
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
                      <h4>{t.linkedin.author}</h4>
                      <p>{t.linkedin.subtitle}</p>
                    </div>
                  </div>

                  <div className="post-content">
                    <p className="linkedin-over-text">LinkedIn Over</p>
                  </div>
                </div>

                <div className="popup-actions">
                  <button className="visit-linkedin-btn" onClick={handleVisitLinkedIn}>
                    <i className="fab fa-linkedin"></i>
                    <span>{t.linkedin.visitBtn}</span>
                  </button>
                  <button className="maybe-later-btn" onClick={handleClose}>
                    {t.linkedin.closeBtn}
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
