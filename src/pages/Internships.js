import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { internshipsData } from '../assets/data/internshipsData';
import '../styles/Internships.css';

const uiCopy = {
  en: {
    introduction: 'A reverse-chronological view of the products, platforms and technical environments that shaped my professional journey.',
    timelineLabel: 'Professional experience timeline',
    latest: 'Latest experience',
    period: 'Period',
    workMode: 'Working mode',
    technologies: 'Core technologies',
    project: 'Project',
    contributions: 'Key contributions',
    additionalTechnologies: 'Additional technologies',
    viewDetails: 'View contributions and full stack',
    hideDetails: 'Hide details',
    moreTechnology: 'more technology',
    moreTechnologies: 'more technologies'
  },
  fr: {
    introduction: 'Un parcours antéchronologique des produits, plateformes et environnements techniques qui ont façonné mon expérience professionnelle.',
    timelineLabel: 'Chronologie de l’expérience professionnelle',
    latest: 'Expérience la plus récente',
    period: 'Période',
    workMode: 'Mode de travail',
    technologies: 'Technologies principales',
    project: 'Projet',
    contributions: 'Contributions clés',
    additionalTechnologies: 'Technologies complémentaires',
    viewDetails: 'Voir les contributions et la stack complète',
    hideDetails: 'Masquer les détails',
    moreTechnology: 'technologie supplémentaire',
    moreTechnologies: 'technologies supplémentaires'
  }
};

const getCompanyInitials = (company) =>
  company
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();

const Internships = () => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const copy = uiCopy[language] || uiCopy.en;

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09
      }
    }
  };

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
        }
      };

  return (
    <section className="internships" id="internships" aria-labelledby="experience-title">
      <div className="experience-shell max-width">
        <motion.header
          className="experience-header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
        >
          <p className="experience-eyebrow">{t.internships.title}</p>
          <h1 id="experience-title">{t.internships.subtitle}</h1>
          <p className="experience-introduction">{copy.introduction}</p>
        </motion.header>

        <motion.ol
          className="experience-timeline"
          aria-label={copy.timelineLabel}
          variants={listVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {internshipsData.map((internship, index) => {
            const localizedDate = internship.date[language] || internship.date.en;
            const previewCount = internship.technologyPreviewCount || internship.technologies.length;
            const visibleTechnologies = internship.technologies.slice(0, previewCount);
            const additionalTechnologies = internship.technologies.slice(previewCount);
            const contributions = internship.contributions?.[language] || [];
            const hasDetails = contributions.length > 0 || additionalTechnologies.length > 0;
            const titleId = `experience-${internship.id}-title`;
            const detailsId = `experience-${internship.id}-details`;

            return (
              <motion.li
                className="experience-timeline-item"
                key={internship.id}
                variants={itemVariants}
              >
                <span className="experience-timeline-marker" aria-hidden="true">
                  <span>{index + 1}</span>
                </span>

                <article
                  className={`experience-card${internship.featured ? ' experience-card--featured' : ''}`}
                  aria-labelledby={titleId}
                >
                  <header className="experience-card-header">
                    <div className="experience-heading-group">
                      <div className="experience-company-row">
                        <span className="experience-company">{internship.company}</span>
                        <span className="experience-type">{internship.type[language]}</span>
                        {internship.featured && (
                          <span className="experience-latest">
                            <i className="fas fa-star" aria-hidden="true" />
                            {copy.latest}
                          </span>
                        )}
                      </div>
                      <h2 id={titleId}>{internship.title[language]}</h2>
                    </div>

                    <span className="experience-company-mark" aria-hidden="true">
                      {getCompanyInitials(internship.company)}
                    </span>
                  </header>

                  <ul className="experience-meta" aria-label={`${internship.company} — ${copy.period}`}>
                    <li className="experience-meta-item experience-meta-item--period">
                      <i className="far fa-calendar" aria-hidden="true" />
                      <span className="experience-meta-copy">
                        <span className="experience-meta-label">{copy.period}</span>
                        <span className="experience-date-range" title={internship.numericPeriod}>
                          <time dateTime={internship.date.start}>{localizedDate.startLabel}</time>
                          {localizedDate.endLabel && (
                            <>
                              <span aria-hidden="true">–</span>
                              <time dateTime={internship.date.end}>{localizedDate.endLabel}</time>
                            </>
                          )}
                        </span>
                      </span>
                    </li>

                    <li className="experience-meta-item">
                      <i className="far fa-clock" aria-hidden="true" />
                      <span className="experience-meta-copy">
                        <span className="experience-meta-label">{t.internships.duration}</span>
                        <span>{internship.duration[language]}</span>
                      </span>
                    </li>

                    <li className="experience-meta-item experience-meta-item--location">
                      <i className="fas fa-location-dot" aria-hidden="true" />
                      <span className="experience-meta-copy">
                        <span className="experience-meta-label">{t.internships.location}</span>
                        <span>{internship.location[language]}</span>
                      </span>
                    </li>

                    {internship.workMode && (
                      <li className="experience-meta-item">
                        <i className="fas fa-building" aria-hidden="true" />
                        <span className="experience-meta-copy">
                          <span className="experience-meta-label">{copy.workMode}</span>
                          <span>{internship.workMode[language]}</span>
                        </span>
                      </li>
                    )}
                  </ul>

                  {internship.project && (
                    <div className="experience-project">
                      <span className="experience-project-icon" aria-hidden="true">
                        <i className="fas fa-diagram-project" />
                      </span>
                      <span>
                        <span className="experience-project-label">{copy.project}</span>
                        <strong>{internship.project.name}</strong>
                        <small>{internship.project.context[language]}</small>
                      </span>
                    </div>
                  )}

                  {internship.image && (
                    <figure className="experience-visual">
                      <img
                        src={internship.image}
                        alt={internship.imageAlt?.[language] || `${internship.company} project preview`}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  )}

                  <p className="experience-description">{internship.description[language]}</p>

                  <div className="experience-technologies">
                    <h3>
                      <i className="fas fa-code" aria-hidden="true" />
                      {copy.technologies}
                    </h3>
                    <ul className="experience-tags" aria-label={copy.technologies}>
                      {visibleTechnologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>

                  {hasDetails && (
                    <details className="experience-details" id={detailsId}>
                      <summary>
                        <span className="experience-summary-label experience-summary-label--closed">
                          <i className="fas fa-plus" aria-hidden="true" />
                          {copy.viewDetails}
                        </span>
                        <span className="experience-summary-label experience-summary-label--open">
                          <i className="fas fa-minus" aria-hidden="true" />
                          {copy.hideDetails}
                        </span>
                        {additionalTechnologies.length > 0 && (
                          <span className="experience-more-count">
                            +{additionalTechnologies.length}{' '}
                            {additionalTechnologies.length === 1
                              ? copy.moreTechnology
                              : copy.moreTechnologies}
                          </span>
                        )}
                      </summary>

                      <div className="experience-details-content">
                        {contributions.length > 0 && (
                          <section aria-labelledby={`${detailsId}-contributions`}>
                            <h3 id={`${detailsId}-contributions`}>{copy.contributions}</h3>
                            <ul className="experience-contributions">
                              {contributions.map((contribution) => (
                                <li key={contribution}>{contribution}</li>
                              ))}
                            </ul>
                          </section>
                        )}

                        {additionalTechnologies.length > 0 && (
                          <section aria-labelledby={`${detailsId}-technologies`}>
                            <h3 id={`${detailsId}-technologies`}>{copy.additionalTechnologies}</h3>
                            <ul className="experience-tags experience-tags--additional">
                              {additionalTechnologies.map((technology) => (
                                <li key={technology}>{technology}</li>
                              ))}
                            </ul>
                          </section>
                        )}
                      </div>
                    </details>
                  )}
                </article>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
};

export default Internships;
