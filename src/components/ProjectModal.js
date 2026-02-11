import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const { t } = useLanguage();
  const modalRef = useRef(null);
  
  useEffect(() => {
    // Prevent scrolling of background content when modal is open
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('project-modal-overlay')) {
        onClose();
      }
    };
    
    // Focus trap inside modal for accessibility
    const handleTabKey = (e) => {
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('click', handleClickOutside);
    
    // Focus the modal when it opens
    if (modalRef.current) {
      modalRef.current.focus();
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);
  
  // Format the date if available
  const formatDate = (dateString) => {
    if (!dateString) return null;
    
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div 
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="project-modal-container"
        ref={modalRef}
        tabIndex={-1}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 0.4, type: 'spring', damping: 25 }}
      >
        <div className="project-modal-header">
          <h2 className="project-modal-title">{project.title}</h2>
          <button 
            className="close-modal-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="project-modal-content">
          <div className="project-modal-image-container">
            <img 
              className="project-modal-image" 
              src={project.image} 
              alt={project.title} 
            />
            {project.category && (
              <div className="project-modal-category">
                <span>{project.category}</span>
              </div>
            )}
          </div>
          
          <div className="project-modal-details">
            <div className="project-modal-info">
              <div className="project-modal-description">
                <h3>{t.projects.projectOverview}</h3>
                <p>{project.description}</p>
              </div>
              
              {project.features && project.features.length > 0 && (
                <div className="project-modal-features">
                  <h3>{t.projects.keyFeatures}</h3>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="project-modal-meta">
                {project.client && (
                  <div className="meta-item">
                    <i className="fas fa-user-tie"></i>
                    <div>
                      <h4>{t.projects.client}</h4>
                      <p>{project.client}</p>
                    </div>
                  </div>
                )}
                
                {project.date && (
                  <div className="meta-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div>
                      <h4>{t.projects.date}</h4>
                      <p>{formatDate(project.date)}</p>
                    </div>
                  </div>
                )}
                
                {project.duration && (
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <h4>{t.projects.duration}</h4>
                      <p>{project.duration}</p>
                    </div>
                  </div>
                )}
                
                {project.role && (
                  <div className="meta-item">
                    <i className="fas fa-user-cog"></i>
                    <div>
                      <h4>{t.projects.myRole}</h4>
                      <p>{project.role}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="project-modal-technologies">
                <h3>{t.projects.technologiesUsed}</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.challenges && (
                <div className="project-modal-challenges">
                  <h3>{t.projects.challengesSolutions}</h3>
                  <p>{project.challenges}</p>
                </div>
              )}
            </div>
            
            <div className="project-modal-actions">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <i className="fab fa-github"></i>
                  <span>{t.projects.viewCode}</span>
                </a>
              )}
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>{t.projects.liveDemo}</span>
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-modal-footer">
          <button 
            className="close-btn" 
            onClick={onClose}
          >
            {t.projects.close}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
