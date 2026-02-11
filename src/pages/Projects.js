import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from '../components/ProjectModal';
import projectsData from '../assets/data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const autoPlayRef = useRef(null);
  const sliderRef = useRef(null);
  
  // Get unique categories from projects data
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on category
  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);
  
  const totalSlides = filteredProjects.length;
  
  // Use useCallback to memoize these functions so they don't change on every render
  const handlePrevSlide = useCallback(() => {
    if (totalSlides === 0) return; // Guard clause to prevent errors with empty arrays
    
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    // Pause auto-play temporarily when user interacts
    setIsAutoPlaying(false);
    clearTimeout(autoPlayRef.current);
    autoPlayRef.current = setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [totalSlides]);
  
  const handleNextSlide = useCallback(() => {
    if (totalSlides === 0) return; // Guard clause to prevent errors with empty arrays
    
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    // Pause auto-play temporarily when user interacts
    setIsAutoPlaying(false);
    clearTimeout(autoPlayRef.current);
    autoPlayRef.current = setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [totalSlides]);
  
  // Reset current slide when category changes or when filtered projects change
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory, filteredProjects.length]);
  
  // Auto-slide effect
  useEffect(() => {
    if (isAutoPlaying && totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Reset auto-play when changing categories
    setIsAutoPlaying(true);
  };
  
  const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    setSelectedProject(project);
    setModalOpen(true);
    // Pause auto-play when modal is open
    setIsAutoPlaying(false);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    // Resume auto-play when modal is closed
    setIsAutoPlaying(true);
  };
  
  // Keyboard navigation effect
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNextSlide, handlePrevSlide]);
  
  // Touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrevSlide();
    }
  };
  
  // Progress indicator calculation
  const progressPercentage = totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  // Safety check to ensure currentSlide is valid
  if (currentSlide >= totalSlides && totalSlides > 0) {
    setCurrentSlide(0);
  }
  
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">{t.projects.title}</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>
        
        <div className="projects-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {t.projects[category] || category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-content">
          <div
            className="projects-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key={currentSlide}
                  className="project-slide"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="project-card">
                    <div className="project-image-container">
                      {filteredProjects[currentSlide] && filteredProjects[currentSlide].image && (
                        <div className="project-image-wrapper">
                          <img
                            src={filteredProjects[currentSlide].image}
                            alt={filteredProjects[currentSlide].title || 'Project image'}
                            className="project-image"
                          />
                          <div className="image-overlay">
                            <div className="overlay-content">
                              <button
                                className="preview-btn"
                                onClick={() => openModal(filteredProjects[currentSlide]?.id)}
                              >
                                <i className="fas fa-search-plus"></i>
                                <span>View Details</span>
                              </button>
                              {filteredProjects[currentSlide]?.liveUrl && (
                                <a
                                  href={filteredProjects[currentSlide].liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="preview-link"
                                >
                                  <i className="fas fa-external-link-alt"></i>
                                  <span>{t.projects.liveDemo}</span>
                                </a>
                              )}
                              {filteredProjects[currentSlide]?.linkedinPostUrl && 
                               filteredProjects[currentSlide].linkedinPostUrl !== "null" && (
                                <a
                                  href={filteredProjects[currentSlide].linkedinPostUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="linkedin-link"
                                >
                                  <i className="fab fa-linkedin"></i>
                                  <span>{t.projects.linkedinPost}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="project-category">
                        <span>{filteredProjects[currentSlide]?.category || 'Uncategorized'}</span>
                      </div>
                    </div>
                    <div className="project-info">
                      <div className="project-header">
                        <h3 className="project-title">{filteredProjects[currentSlide]?.title?.[language] || filteredProjects[currentSlide]?.title || 'Untitled Project'}</h3>
                        <div className="project-status">
                          <span className="status-badge">{t.projects.featured}</span>
                        </div>
                      </div>
                      <p className="project-description">
                        {filteredProjects[currentSlide]?.shortDescription?.[language] || 
                          filteredProjects[currentSlide]?.shortDescription ||
                          (filteredProjects[currentSlide]?.description?.[language] && 
                            filteredProjects[currentSlide].description[language].substring(0, 150) + '...') ||
                          (filteredProjects[currentSlide]?.description && 
                            filteredProjects[currentSlide].description.substring(0, 150) + '...') || 
                          'No description available'}
                      </p>
                      <div className="project-tags">
                        {filteredProjects[currentSlide]?.technologies?.map((tech, i) => (
                          <span key={i} className="project-tag">{tech}</span>
                        )) || <span className="project-tag">No technologies specified</span>}
                      </div>
                      <div className="project-actions">
                        <button
                          className="view-project-btn primary"
                          onClick={() => openModal(filteredProjects[currentSlide]?.id)}
                        >
                          <span>{t.projects.learnMore}</span>
                          <i className="fas fa-arrow-right"></i>
                        </button>
                        {filteredProjects[currentSlide]?.liveUrl && (
                          <a
                            href={filteredProjects[currentSlide].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-demo-btn secondary"
                          >
                            <i className="fas fa-external-link-alt"></i>
                            <span>{t.projects.liveDemo}</span>
                          </a>
                        )}
                        {filteredProjects[currentSlide]?.linkedinPostUrl && 
                         filteredProjects[currentSlide].linkedinPostUrl !== "null" && (
                          <a
                            href={filteredProjects[currentSlide].linkedinPostUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-post-btn"
                          >
                            <i className="fab fa-linkedin"></i>
                            <span>{t.projects.linkedinPost}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="no-projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <i className="fas fa-folder-open"></i>
                  <h3>{t.projects.noProjects}</h3>
                  <p>{t.projects.noProjectsDesc}</p>
                  <button
                    className="reset-filter-btn"
                    onClick={() => setActiveCategory('all')}
                  >
                    {t.projects.viewAllProjects}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {filteredProjects.length > 0 && (
              <>
                <button
                  className="nav-button prev-button"
                  onClick={handlePrevSlide}
                  aria-label="Previous project"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  className="nav-button next-button"
                  onClick={handleNextSlide}
                  aria-label="Next project"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
          </div>
          
          {filteredProjects.length > 0 && (
            <div className="slider-controls">
              <div className="slider-dots">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                      clearTimeout(autoPlayRef.current);
                      autoPlayRef.current = setTimeout(() => setIsAutoPlaying(true), 5000);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <div className="slider-progress">
                <div className="progress-text">
                  {currentSlide + 1} / {totalSlides}
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-indicator"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <button
                className={`autoplay-toggle ${isAutoPlaying ? 'active' : ''}`}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                <i className={`fas ${isAutoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </button>
            </div>
          )}
        </div>
        
        {filteredProjects.length > 0 && (
          <div className="projects-cta">
            <a
              href="https://github.com/Youssef-Fawel"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="fab fa-github"></i>
              <span>View More on GitHub</span>
            </a>
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
