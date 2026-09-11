import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Skills.css';

const Skills = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('technical');
  const [isVisible, setIsVisible] = useState(false);
  
  // Skills data organized by categories
  const skillsData = {
    technical: [
      {
        category: t.skills.frontend || 'Frontend',
        skills: [
          { name: 'TypeScript', level: 88 },
          { name: 'Next.js', level: 88 },
          { name: 'React', level: 85 },
          { name: 'Angular', level: 82 },
          { name: 'JavaScript', level: 88 },
          { name: 'Tailwind CSS', level: 82 },
        ]
      },
      {
        category: t.skills.backend || 'Backend',
        skills: [
          { name: 'NestJS', level: 88 },
          { name: 'Node.js', level: 88 },
          { name: 'FastAPI', level: 82 },
          { name: 'Python', level: 85 },
          { name: 'Spring Boot', level: 80 },
          { name: 'Java', level: 75 },
        ]
      },
      {
        category: t.skills.mobile || 'Mobile Development',
        skills: [
          { name: 'Flutter / Dart', level: 80 },
          { name: 'React Native / Expo', level: 76 },
          { name: 'Android (Kotlin)', level: 75 },
        ]
      },
      {
        category: t.skills.database || 'Database',
        skills: [
          { name: 'PostgreSQL', level: 88 },
          { name: 'Supabase', level: 85 },
          { name: 'MySQL / TiDB', level: 82 },
          { name: 'MongoDB', level: 80 },
          { name: 'Firebase', level: 75 },
        ]
      },
    ],
    soft: [
      {
        category: t.skills.communication,
        skills: [
          { name: t.skills.writtenCommunication, level: 90 },
          { name: t.skills.verbalCommunication, level: 85 },
          { name: t.skills.presentation, level: 80 },
          { name: t.skills.documentation, level: 85 },
        ]
      },
      {
        category: t.skills.collaboration,
        skills: [
          { name: t.skills.teamwork, level: 90 },
          { name: t.skills.leadership, level: 75 },
          { name: t.skills.conflictResolution, level: 80 },
          { name: t.skills.mentoring, level: 70 },
        ]
      },
      {
        category: t.skills.problemSolving,
        skills: [
          { name: t.skills.criticalThinking, level: 85 },
          { name: t.skills.analyticalSkills, level: 90 },
          { name: t.skills.creativity, level: 80 },
          { name: t.skills.attentionToDetail, level: 85 },
        ]
      },
    ],
    tools: [
      {
        category: t.skills.devTools,
        skills: [
          { name: t.skills.gitGithub, level: 85 },
          { name: t.skills.postman, level: 85 },
          { name: t.skills.vsCode, level: 90 },
          { name: 'Docker', level: 78 },
          { name: 'pnpm / npm', level: 84 },
          { name: 'Vercel / Netlify / Render', level: 82 },
        ]
      },
      {
        category: t.skills.designTools,
        skills: [
          { name: t.skills.figma, level: 75 },
          { name: t.skills.adobeXd, level: 70 },
          { name: t.skills.photoshop, level: 65 },
          { name: t.skills.illustrator, level: 60 },
        ]
      },
      {
        category: t.skills.projectManagement,
        skills: [
          { name: t.skills.jira, level: 80 },
          { name: t.skills.trello, level: 85 },
          { name: t.skills.agileScrum, level: 75 },
        ]
      },
    ]
  };
  
  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  // Get level class based on skill level
  const getLevelClass = (level) => {
    if (level >= 85) return 'advanced';
    if (level >= 70) return 'intermediate';
    return 'beginner';
  };
  
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {t.skills.title}
          </motion.h2>
          <div className="underline"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.skills.subtitle}
          </motion.p>
        </div>
        
        <motion.div
          className="skills-tabs"
          role="tablist"
          aria-label={t.skills.title}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            type="button"
            role="tab"
            id="skills-tab-technical"
            aria-selected={activeTab === 'technical'}
            aria-controls="skills-tabpanel"
            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            <i className="fas fa-code"></i>
            <span>{t.skills.technicalSkills}</span>
          </button>
          <button
            type="button"
            role="tab"
            id="skills-tab-soft"
            aria-selected={activeTab === 'soft'}
            aria-controls="skills-tabpanel"
            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            <i className="fas fa-users"></i>
            <span>{t.skills.softSkills}</span>
          </button>
          <button
            type="button"
            role="tab"
            id="skills-tab-tools"
            aria-selected={activeTab === 'tools'}
            aria-controls="skills-tabpanel"
            className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <i className="fas fa-tools"></i>
            <span>{t.skills.toolsTech}</span>
          </button>
        </motion.div>
        
        <div className="skills-content">
          <motion.div
            className="skills-overview"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>{t.skills.myExpertise}</h3>
            <p>
              {t.skills.expertiseDesc1}
            </p>
            <p>
              {t.skills.expertiseDesc2}
            </p>
            <div className="skills-cta">
              <Link to="/projects" className="cta-btn">
                <span>{t.skills.viewProjects}</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="cta-btn outline">
                <span>{t.skills.getInTouch}</span>
                <i className="fas fa-envelope"></i>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="skills-details"
            id="skills-tabpanel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeTab}`}
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="tab-content">
              {skillsData[activeTab].map((group, groupIndex) => (
                <div key={groupIndex} className="skill-category">
                  <h3 className="category-title">
                    <span>{group.category}</span>
                  </h3>
                  <div className="skills-grid">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skill-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + (skillIndex * 0.1)
                        }}
                      >
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className={`skill-level ${getLevelClass(skill.level)}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className={`skill-progress ${getLevelClass(skill.level)}`}
                            role="progressbar"
                            aria-label={skill.name}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={skill.level}
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.7 + (skillIndex * 0.1) }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="skills-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="skill-levels-legend">
            <div className="legend-item">
              <span className="legend-color beginner" aria-hidden="true"></span>
              <span className="legend-text">{t.skills.beginner}</span>
            </div>
            <div className="legend-item">
              <span className="legend-color intermediate" aria-hidden="true"></span>
              <span className="legend-text">{t.skills.intermediate}</span>
            </div>
            <div className="legend-item">
              <span className="legend-color advanced" aria-hidden="true"></span>
              <span className="legend-text">{t.skills.advanced}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
