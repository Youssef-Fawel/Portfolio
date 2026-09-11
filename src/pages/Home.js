import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Home.css';

// Import section content from other pages
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Internships from './Internships';
import Contact from './Contact';
import Certificates from './Certificates';
import ViewCV from './ViewCV';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        {/* Floating background shapes */}
        <div className="floating-shape shape1" aria-hidden="true"></div>
        <div className="floating-shape shape2" aria-hidden="true"></div>
        <div className="floating-shape shape3" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="home-content">
            <div className="text-1">{t.home.greeting}</div>
            <h1 className="text-2">{t.home.name}</h1>
            <p className="text-3">
              {t.home.tagline}{' '}
              <span className="typing-static">{t.home.titles[0]}</span>
            </p>
                        
            <div className="text-description">
              {t.home.description}
            </div>
                        
            <div className="buttons-container">
              <a href="#contact" className="hire-me-btn">{t.home.hireMeBtn}</a>
              <a href="#projects" className="portfolio-btn">{t.home.portfolioBtn}</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="section-title">
          </div>
          <About />
          <div className="section-link">
            <Link to="/about" className="view-more-btn">{t.home.learnMore}</Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Skills />
          <div className="section-link">
            <Link to="/skills" className="view-more-btn">{t.home.viewAllSkills}</Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Projects featured={true} />
          <div className="section-link">
            <Link to="/projects" className="view-more-btn">{t.home.viewAllProjects}</Link>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="internships-section">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Internships />
          <div className="section-link">
            <Link to="/internships" className="view-more-btn">{t.home.viewAllInternships}</Link>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Certificates featured={true} />
          <div className="section-link">
            <Link to="/certificates" className="view-more-btn">{t.home.viewAllCertificates}</Link>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="cv-section">
        <div className="section-container">
          <div className="section-title">
          </div>
          <ViewCV />
          <div className="section-link">
            <Link to="/cv" className="view-more-btn">{t.home.viewFullCV}</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;

