import React, { useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import '../styles/Home.css';

// Import section content from other pages
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Certificates from './Certificates';
import ViewCV from './ViewCV';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: [
        "Software Engineering Student",
        "Web Developer",
        "Full-Stack Developer",
        "Problem Solver",
        "MERN Stack Developer",
        "Tech Enthusiast"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
    
    const typed = new Typed(typedRef.current, options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-page">
      {/* Add ScrollToTop component here */}
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        {/* Floating background shapes */}
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="hero-container">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Youssef Fawel</div>
            <div className="text-3">And I'm a <span ref={typedRef} className="typing"></span></div>
            
            <div className="text-description">
              I'm passionate about creating elegant solutions through code.
              As a software engineering student, I combine technical skills with
              creative problem-solving to build impactful digital experiences.
            </div>
            
            <div className="buttons-container">
              <a href="#contact" className="hire-me-btn">Get In Touch</a>
              <a href="#projects" className="portfolio-btn">View Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-container">
          <div className="section-title">
          </div>
          <About />
          <div className="section-link">
            <Link to="/about" className="view-more-btn">Learn More About Me</Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Skills />
          <div className="section-link">
            <Link to="/skills" className="view-more-btn">View All Skills</Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Projects featured={true} />
          <div className="section-link">
            <Link to="/projects" className="view-more-btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="certificates-section" id="certificates">
        <div className="section-container">
          <div className="section-title">
          </div>
          <Certificates featured={true} />
          <div className="section-link">
            <Link to="/certificates" className="view-more-btn">View All Certificates</Link>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="cv-section" id="cv">
        <div className="section-container">
          <div className="section-title">
          </div>
          <ViewCV />
          <div className="section-link">
            <Link to="/cv" className="view-more-btn">View Full CV</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
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
