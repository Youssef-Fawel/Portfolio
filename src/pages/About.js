import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';
import profileImage from '../assets/images/Me.jpeg';
import cvPdf from '../assets/images/Resume.pdf';

const About = () => {
  const { t } = useLanguage();

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
              <h3><span className="name">Youssef Fawel</span></h3>
              <h3 className="typed-text"><span>{t.home.titles[0]}</span></h3>
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
                  <span className="info-value">{t.about.graduationValue}</span>
                </div>
                <div className="info-item distinction-item">
                  <span className="info-title">{t.about.distinction}:</span>
                  <span className="info-value">{t.about.distinctionValue}</span>
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
              <Link to="/projects" className="btn btn-secondary">{t.about.viewWork}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
