import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [isVisible, setIsVisible] = useState(false);
  
  // Skills data organized by categories
  const skillsData = {
    technical: [
      {
        category: 'Frontend',
        skills: [
          { name: 'HTML5', level: 95 },
          { name: 'CSS3', level: 95 },
          { name: 'JavaScript', level: 85 },
          { name: 'React', level: 85 },
          { name: 'Vue.js', level: 75 },
          { name: 'Bootstrap', level: 85 },
          { name: 'Tailwind CSS', level: 75 },
        ]
      },
      {
        category: 'Backend',
        skills: [
          { name: 'Node.js', level: 85 },
          { name: 'Spring Boot', level: 80 }, 
          { name: 'PHP', level: 85 },
          { name: 'Python', level: 85 },
          { name: 'Java', level: 75 },
          { name: 'Express', level: 80 },
          
        ]
      },
      {
        category: 'Mobile Development',
        skills: [
          { name: 'Android (Kotlin)', level: 75 }, 
        ]
      },
      {
        category: 'Database',
        skills: [
          { name: 'MySQL', level: 85 },
          { name: 'MongoDB', level: 85 },
          { name: 'Firebase', level: 70 },
        ]
      },
    ],
    soft: [
      {
        category: 'Communication',
        skills: [
          { name: 'Written Communication', level: 90 },
          { name: 'Verbal Communication', level: 85 },
          { name: 'Presentation', level: 80 },
          { name: 'Documentation', level: 85 },
        ]
      },
      {
        category: 'Collaboration',
        skills: [
          { name: 'Teamwork', level: 90 },
          { name: 'Leadership', level: 75 },
          { name: 'Conflict Resolution', level: 80 },
          { name: 'Mentoring', level: 70 },
        ]
      },
      {
        category: 'Problem Solving',
        skills: [
          { name: 'Critical Thinking', level: 85 },
          { name: 'Analytical Skills', level: 90 },
          { name: 'Creativity', level: 80 },
          { name: 'Attention to Detail', level: 85 },
        ]
      },
    ],
    tools: [
      {
        category: 'Development Tools',
        skills: [
          { name: 'Git & GitHub', level: 85 },
          { name: 'VS Code', level: 90 },
          { name: 'Android Studio', level: 78 }, // Added Android Studio
          { name: 'Webpack', level: 65 },
          { name: 'npm/yarn', level: 80 },
        ]
      },
      {
        category: 'Design Tools',
        skills: [
          { name: 'Figma', level: 75 },
          { name: 'Adobe XD', level: 70 },
          { name: 'Photoshop', level: 65 },
          { name: 'Illustrator', level: 60 },
        ]
      },
      {
        category: 'Project Management',
        skills: [
          { name: 'Jira', level: 80 },
          { name: 'Trello', level: 85 },
          { name: 'Agile/Scrum', level: 75 },
        ]
      },
    ]
  };
  
  // Intersection Observer to trigger animations when section is visible
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
            My Skills
          </motion.h2>
          <div className="underline"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expertise and proficiencies I've developed over the years
          </motion.p>
        </div>
        
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            <i className="fas fa-code"></i>
            <span>Technical Skills</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            <i className="fas fa-users"></i>
            <span>Soft Skills</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <i className="fas fa-tools"></i>
            <span>Tools & Technologies</span>
          </button>
        </motion.div>
        
        <div className="skills-content">
          <motion.div
            className="skills-overview"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>My Expertise</h3>
            <p>
              As a dedicated software engineering student with a passion for development since {new Date().getFullYear() - 2022}, 
              I've been building a diverse skill set that allows me to tackle interesting problems and deliver 
              quality solutions. I'm enthusiastic about creating clean, efficient, and user-friendly 
              applications that address real-world challenges.
            </p>
            <p>
              I continuously expand my knowledge through coursework, personal projects, and staying updated with 
              the latest technologies and industry trends. My approach combines growing technical expertise with 
              strong communication and problem-solving abilities, preparing me for success in the professional world.
            </p>
            <div className="skills-cta">
              <a href="#projects" className="cta-btn">
                <span>View My Projects</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#contact" className="cta-btn outline">
                <span>Get In Touch</span>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="skills-details"
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
              <span className="legend-color beginner"></span>
              <span className="legend-text">Beginner (0-69%)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color intermediate"></span>
              <span className="legend-text">Intermediate (70-84%)</span>
            </div>
            <div className="legend-item">
              <span className="legend-color advanced"></span>
              <span className="legend-text">Advanced (85-100%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
