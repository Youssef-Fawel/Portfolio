import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/CertificateModal.css';

const CertificateModal = ({ certificate, onClose }) => {
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  
  useEffect(() => {
    // Close modal on escape key press
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isImageZoomed) {
          setIsImageZoomed(false);
        } else {
          onClose();
        }
      }
    };
    
    // Close modal when clicking outside
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('certificate-modal')) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, isImageZoomed]);

  const toggleImageZoom = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  return (
    <motion.div 
      className="certificate-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="certificate-modal-content"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="modal-header">
          <h2>{certificate.title}</h2>
          <button className="close-certificate-modal" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="certificate-details">
          <div className="certificate-image-container">
            <img
              src={certificate.image}
              alt={certificate.title}
              className={`certificate-full-image ${isImageZoomed ? 'zoomed' : ''}`}
              onClick={toggleImageZoom}
            />
            <div className="image-controls">
              <button className="zoom-button" onClick={toggleImageZoom}>
                <i className={`fas ${isImageZoomed ? 'fa-search-minus' : 'fa-search-plus'}`}></i>
                {isImageZoomed ? 'Zoom Out' : 'Zoom In'}
              </button>
              {certificate.verificationLink && (
                <a
                  href={certificate.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-button"
                >
                  <i className="fas fa-download"></i>
                  Download
                </a>
              )}
            </div>
          </div>
          
          <div className="certificate-info">
            <div className="info-section">
              <h3>Certificate Details</h3>
              
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-building"></i>
                    <span>Issuing Organization</span>
                  </div>
                  <div className="info-value">{certificate.organization}</div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Date Issued</span>
                  </div>
                  <div className="info-value">{certificate.dateIssued}</div>
                </div>
                
                <div className="info-item">
                  <div className="info-label">
                    <i className="fas fa-id-card"></i>
                    <span>Credential ID</span>
                  </div>
                  <div className="info-value">{certificate.credentialId}</div>
                </div>
                
                {certificate.expirationDate && (
                  <div className="info-item">
                    <div className="info-label">
                      <i className="fas fa-hourglass-end"></i>
                      <span>Expiration Date</span>
                    </div>
                    <div className="info-value">{certificate.expirationDate}</div>
                  </div>
                )}
              </div>
            </div>
            
            {certificate.description && (
              <div className="info-section">
                <h3>Description</h3>
                <p className="certificate-description">{certificate.description}</p>
              </div>
            )}
            
            {certificate.skills && certificate.skills.length > 0 && (
              <div className="info-section">
                <h3>Skills</h3>
                <div className="skills-tags">
                  {certificate.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      <i className="fas fa-check-circle"></i>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="modal-actions">
              {certificate.verificationLink && (
                <a
                  href={certificate.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-certificate-btn"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Verify Certificate
                </a>
              )}
              <button className="close-btn" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div 
            className="zoomed-image-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleImageZoom}
          >
            <div className="zoomed-image-container">
              <img 
                src={certificate.image} 
                alt={certificate.title} 
                className="zoomed-image"
              />
              <button className="close-zoom-btn" onClick={toggleImageZoom}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CertificateModal;
