import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import '../styles/ThankYou.css';

const copy = {
  en: {
    title: 'Thank you!',
    message: 'Your message has been received successfully. Thank you for taking the time to get in touch.',
    response: "I'll review it and reply as soon as possible.",
    back: 'Back to home'
  },
  fr: {
    title: 'Merci !',
    message: 'Votre message a bien été reçu. Merci d’avoir pris le temps de me contacter.',
    response: 'Je le consulterai et vous répondrai dans les meilleurs délais.',
    back: 'Retour à l’accueil'
  }
};

const ThankYou = () => {
  const { language } = useLanguage();
  const labels = copy[language] || copy.en;
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <motion.div 
          className="thank-you-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="thank-you-icon">
            <i className="fas fa-check-circle" aria-hidden="true"></i>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {labels.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="thank-you-message"
          >
            {labels.message}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="response-message"
          >
            {labels.response}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="button-container"
          >
            <Link to="/" className="back-button">
              <i className="fas fa-arrow-left" aria-hidden="true"></i>
              <span>{labels.back}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
