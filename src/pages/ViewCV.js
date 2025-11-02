import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cvPdf from '../assets/images/Resume.pdf';
import '../styles/ViewCV.css';

const ViewCV = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('view-cv');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const personalInfo = [
    { icon: 'fas fa-graduation-cap', label: 'Education', value: 'Computer Science Engineering' },
    { icon: 'fas fa-language', label: 'Languages', value: 'English, Arabic, French' },
    { icon: 'fas fa-phone-alt', label: 'Phone', value: '+33 780765291' }
  ];
  
  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/youssef-fawel/', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:youssef.fawel@episousse.com.tn', label: 'Email' },
    { icon: 'fab fa-github', url: 'https://github.com/Youssef-Fawel', label: 'GitHub' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/youssef.fawel/', label: 'Instagram' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com/YusufFawel/', label: 'Facebook' }
  ];
  
  const cvHighlights = [
    { title: 'Professional Experience', description: 'Detailed work history with key achievements and responsibilities.' },
    { title: 'Technical Skills', description: 'Comprehensive list of programming languages, frameworks, and tools.' },
    { title: 'Education & Certifications', description: 'Academic background and professional certifications.' },
    { title: 'Projects', description: 'Showcase of significant projects with technologies used and outcomes.' }
  ];
  
  const closePreview = () => {
    setShowPreview(false);
  };
  
  return (
    <section className="cv-section" id="view-cv">
      <div className="cv-container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            My Curriculum Vitae
          </motion.h2>
          <div className="underline"></div>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get to know my professional journey and qualifications
          </motion.p>
        </div>
        
        <div className="cv-content">
          <motion.div 
            className="cv-overview"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="cv-card">
              <div className="cv-description">
                <h3>Professional Summary</h3>
                <p>
                  I'm a passionate software developer with expertise in web development, 
                  specializing in building responsive and user-friendly applications. 
                  My CV provides a comprehensive overview of my professional experience, 
                  technical skills, educational background, and notable projects.
                </p>
                <p>
                  I'm constantly learning and adapting to new technologies to stay at the 
                  forefront of the industry. My goal is to create innovative solutions that 
                  make a positive impact and deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="cv-highlights">
                <h3>What's Inside</h3>
                <div className="highlights-grid">
                  {cvHighlights.map((highlight, index) => (
                    <motion.div 
                      key={index}
                      className="highlight-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    >
                      <div className="highlight-icon">
                        <i className={index === 0 ? "fas fa-briefcase" :
                                      index === 1 ? "fas fa-code" :
                                      index === 2 ? "fas fa-graduation-cap" :
                                      "fas fa-project-diagram"}></i>
                      </div>
                      <div className="highlight-content">
                        <h4>{highlight.title}</h4>
                        <p>{highlight.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="cv-actions">
                <a 
                  href={cvPdf}
                  className="download-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                  download="Youssef_Fawel_Resume.pdf"
                >
                  <i className="fas fa-download"></i>
                  <span>Download CV</span>
                </a>
                <button 
                  className="preview-btn"
                  onClick={() => setShowPreview(true)}
                >
                  <i className="fas fa-eye"></i>
                  <span>Preview CV</span>
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="personal-details"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="details-card">
              <div className="profile-header">
                <div className="profile-image">
                <img src={require("../assets/images/Me.png")} alt="Youssef Fawel" />
                </div>
                <h3>Youssef Fawel</h3>
                <p className="profile-title">Software Developer - Full-stack developer</p>
              </div>
              
              <div className="personal-info-list">
                {personalInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="info-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="info-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="info-content">
                      <h4>{info.label}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="social-links">
                <h3>Connect With Me</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {showPreview && (
        <div className="cv-preview-overlay" onClick={closePreview}>
          <div className="cv-preview-container" onClick={e => e.stopPropagation()}>
            <div className="preview-header">
              <h3>CV Preview</h3>
              <button className="close-preview" onClick={closePreview}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="preview-content">
              <iframe 
                src={`${cvPdf}#view=FitH`}
                title="CV Preview"
                width="100%"
                height="100%"
              ></iframe>
            </div>
            <div className="preview-footer">
              <a 
                href={cvPdf}
                className="download-btn"
                target="_blank" 
                rel="noopener noreferrer"
                download="Resume.pdf"
              >
                <i className="fas fa-download"></i>
                <span>Download</span>
              </a>
              <button className="close-btn" onClick={closePreview}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ViewCV;
