import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { internshipsData } from '../assets/data/internshipsData';
import '../styles/Internships.css';

const Internships = () => {
  const { language, t } = useLanguage();
  const [isMobileLayout, setIsMobileLayout] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(max-width: 968px)');
    const updateIsMobileLayout = (event) => {
      setIsMobileLayout(event.matches);
    };

    setIsMobileLayout(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateIsMobileLayout);
      return () => mediaQuery.removeEventListener('change', updateIsMobileLayout);
    }

    mediaQuery.addListener(updateIsMobileLayout);
    return () => mediaQuery.removeListener(updateIsMobileLayout);
  }, []);

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

  const headerMotionProps = isMobileLayout ? {} : {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const containerMotionProps = isMobileLayout ? {} : {
    variants: containerVariants,
    initial: 'hidden',
    animate: 'visible'
  };

  const itemMotionProps = isMobileLayout ? {} : { variants: itemVariants };

  const HeaderTag = isMobileLayout ? 'div' : motion.div;
  const ContainerTag = isMobileLayout ? 'div' : motion.div;
  const ItemTag = isMobileLayout ? 'div' : motion.div;

  return (
    <section className="internships" id="internships">
      <div className="max-width">
        <HeaderTag
          className="section-header"
          {...headerMotionProps}
        >
          <h2 className="title">{t.internships.title}</h2>
          <p className="subtitle">{t.internships.subtitle}</p>
        </HeaderTag>

        <ContainerTag
          className="timeline-wave-container"
          {...containerMotionProps}
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
              <ItemTag
                key={internship.id}
                className={`timeline-item-wave ${index % 2 === 0 ? 'top' : 'bottom'}`}
                {...itemMotionProps}
              >
                <div className="timeline-dot-wave">
                  <div className="dot-pulse"></div>
                </div>
                
                <div className="timeline-card-wave">
                  <div className="card-icon-wave">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  
                  <div className="card-content-wave">
                    <h3 className="position-title-wave">{internship.title[language]}</h3>
                    <h4 className="company-name-wave">{internship.company}</h4>
                    
                    <div className="internship-meta-wave">
                      <span className="internship-duration-wave">
                        <i className="fas fa-calendar-alt"></i>
                        {internship.duration}
                      </span>
                      <span className="internship-months-wave">
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
              </ItemTag>
            ))}
          </div>
        </ContainerTag>
      </div>
    </section>
  );
};

export default Internships;
