import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';
import profileImage from '../assets/images/Me.jpeg';
import cvPdf from '../assets/images/Resume.pdf';

const About = () => {
  const { t } = useLanguage();
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: t.home.titles,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
    
    const typed = new Typed(typedRef.current, options);
    
    return () => {
      typed.destroy();
    };
  }, [t.home.titles]);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src={profileImage} alt="Youssef Fawel" />
              <div className="image-outline"></div>
            </div>
          </div>
          
          <div className="about-info">
            <div className="about-heading">
              <h3>I'm <span className="name">Youssef Fawel</span> and I'm a</h3>
              <h3 className="typed-text"><span ref={typedRef}></span></h3>
            </div>
            
            <div className="about-description">
              <p>
                {t.about.description1}
              </p>
              <p>
                {t.about.description2}
              </p>
            </div>
            
            <div className="personal-info">
              <div className="info-column">
                <div className="info-item">
                  <span className="info-title">{t.about.name}:</span>
                  <span className="info-value">Youssef Fawel</span>
                </div>
                <div className="info-item">
                  <span className="info-title">{t.about.email}:</span>
                  <span className="info-value">fawelyou@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-title">{t.about.esieaEmail}:</span>
                  <span className="info-value">youssef.fawel@et.esiea.fr</span>
                </div>
                <div className="info-item">
                  <span className="info-title">{t.about.degree}:</span>
                  <span className="info-value">{t.about.degreeValue}</span>
                </div>
              </div>
              <div className="info-column">
                <div className="info-item">
                  <span className="info-title">{t.about.location}:</span>
                  <span className="info-value">{t.about.locationValue}</span>
                </div>
                <div className="info-item">
                  <span className="info-title">{t.about.study}:</span>
                  <span className="info-value">{t.about.studyValue}</span>
                </div>
                <div className="info-item">
                  <span className="info-title">{t.about.graduation}:</span>
                  <span className="info-value">2026</span>
                </div>
              </div>
            </div>
            
            <div className="about-buttons">
              <a
                href={cvPdf}
                className="btn btn-primary"
                download="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i>
                <span>{t.about.downloadCV}</span>
              </a>
              <a href="#projects" className="btn btn-secondary">{t.about.viewWork}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
