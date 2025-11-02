import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/About.css';
import profileImage from '../assets/images/Me.jpg';
import cvPdf from '../assets/images/Resume.pdf';

const About = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: [
        "Software Engineering Student",
        "Web Developer",
        "Full-Stack Developer",
        "Problem Solver",
        "MERN Stack Developer",
        "Tech Enthusiast",
        "Exchange Student in France"
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
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
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
                As a dedicated software engineering student at EPI DIGITAL SCHOOL in Sousse, 
                I'm passionate about leveraging technology to solve complex problems. My academic 
                journey from 2021 to 2026 has equipped me with a strong foundation in various 
                programming languages and cutting-edge technologies.
              </p>
              <p>
                Currently, I'm expanding my horizons through an exciting exchange semester at 
                ESIEA - École d'Ingénieur·e·s d'un numérique utile in Paris, France. This 
                international experience is enriching my perspective and allowing me to develop 
                new skills in an innovative academic environment. I thrive in challenging 
                environments and am constantly seeking opportunities to expand my skill set.
              </p>
            </div>
            
            <div className="personal-info">
              <div className="info-column">
                <div className="info-item">
                  <span className="info-title">Name:</span>
                  <span className="info-value">Youssef Fawel</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Email:</span>
                  <span className="info-value">youssef.fawel@episousse.com.tn</span>
                </div>
                <div className="info-item">
                  <span className="info-title">ESIEA Email:</span>
                  <span className="info-value">youssef.fawel@et.esiea.fr</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Degree:</span>
                  <span className="info-value">Software Engineering</span>
                </div>
              </div>
              <div className="info-column">
                <div className="info-item">
                  <span className="info-title">Location:</span>
                  <span className="info-value">Paris, France</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Study:</span>
                  <span className="info-value">ESIEA (Exchange) / EPI DIGITAL SCHOOL</span>
                </div>
                <div className="info-item">
                  <span className="info-title">Graduation:</span>
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
                <span>Download CV</span>
              </a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
