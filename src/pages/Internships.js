import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { internshipsData } from '../assets/data/internshipsData';
import '../styles/Internships.css';

const Internships = () => {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="internships" id="internships">
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="title">{t.internships.title}</h2>
          <p className="subtitle">{t.internships.subtitle}</p>
        </motion.div>

        <motion.div
          className="timeline-wave-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <svg className="wave-line" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <path
              d="M0,150 Q200,50 400,150 T800,150 T1200,150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4db5ff" />
                <stop offset="50%" stopColor="#6a5acd" />
                <stop offset="100%" stopColor="#4db5ff" />
              </linearGradient>
            </defs>
          </svg>

          <div className="timeline-items-wave">
            {internshipsData.map((internship, index) => (
              <motion.div
                key={internship.id}
                className={`timeline-item-wave ${index % 2 === 0 ? 'top' : 'bottom'}`}
                variants={itemVariants}
              >
                <div className="timeline-dot-wave">
                  <div className="dot-pulse"></div>
                </div>
                
                <div className="timeline-card-wave">
                  <div className="card-icon-wave">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  
                  <div className="card-content-wave">
                    <div className="timeline-date-wave">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{internship.duration}</span>
                    </div>
                    
                    <h3 className="company-name-wave">{internship.company}</h3>
                    <h4 className="position-title-wave">{internship.title[language]}</h4>
                    
                    <div className="internship-meta-wave">
                      <span className="internship-type-wave">
                        <i className="fas fa-tag"></i>
                        {internship.type[language]}
                      </span>
                      <span className="internship-duration-wave">
                        <i className="fas fa-clock"></i>
                        {internship.months} {internship.months > 1 ? t.internships.months : t.internships.month}
                      </span>
                    </div>
                    
                    <div className="location-info-wave">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{internship.location[language]}</span>
                    </div>
                    
                    <p className="internship-description-wave">
                      {internship.description[language]}
                    </p>
                    
                    <div className="skills-list-wave">
                      <div className="skills-label-wave">
                        <i className="fas fa-code"></i>
                        <span>{t.internships.skills}:</span>
                      </div>
                      <div className="skills-tags-wave">
                        {internship.skills.map((skill, idx) => (
                          <span key={idx} className="skill-tag-wave">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
