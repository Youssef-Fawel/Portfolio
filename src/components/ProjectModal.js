import React, { useEffect, useId, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/ProjectModal.css';

const copy = {
  en: {
    close: 'Close',
    closeDialog: 'Close project details',
    overview: 'Project overview',
    features: 'Key capabilities',
    technologies: 'Technology stack',
    architecture: 'Technical architecture',
    projectDetails: 'Project details',
    client: 'Client',
    date: 'Date',
    duration: 'Duration',
    role: 'Role',
    challenges: 'Engineering notes',
    liveDemo: 'Live demo',
    viewCode: 'View on GitHub',
    linkedinPost: 'View LinkedIn post',
    projectPreview: 'project preview',
    brandedCover: (title) => `Branded case-study cover for ${title}`,
    category: {
      web: 'Web application',
      mobile: 'Mobile application',
      html: 'Web interface',
      javascript: 'JavaScript application',
      react: 'React application',
      fullstack: 'Full-stack application',
      java: 'Java application',
      python: 'Python application',
      data: 'Data analysis',
      design: 'Product design'
    }
  },
  fr: {
    close: 'Fermer',
    closeDialog: 'Fermer les détails du projet',
    overview: 'Présentation du projet',
    features: 'Fonctionnalités clés',
    technologies: 'Stack technique',
    architecture: 'Architecture technique',
    projectDetails: 'Détails du projet',
    client: 'Client',
    date: 'Date',
    duration: 'Durée',
    role: 'Rôle',
    challenges: 'Notes techniques',
    liveDemo: 'Démo en ligne',
    viewCode: 'Voir sur GitHub',
    linkedinPost: 'Voir la publication LinkedIn',
    projectPreview: 'aperçu du projet',
    brandedCover: (title) => `Couverture graphique de l’étude de cas ${title}`,
    category: {
      web: 'Application web',
      mobile: 'Application mobile',
      html: 'Interface web',
      javascript: 'Application JavaScript',
      react: 'Application React',
      fullstack: 'Application Full-stack',
      java: 'Application Java',
      python: 'Application Python',
      data: 'Analyse de données',
      design: 'Design produit'
    }
  }
};

const getLocalizedValue = (value, language, fallback = '') => {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] || value.en || fallback;
  }

  return value || fallback;
};

const isUsableLink = (value) => (
  typeof value === 'string'
  && value.trim().length > 0
  && value.trim().toLowerCase() !== 'null'
);

const getProjectLinks = (project) => ({
  live: [project.liveUrl, project.demoLink].find(isUsableLink),
  code: [project.githubUrl, project.codeLink].find(isUsableLink),
  linkedin: isUsableLink(project.linkedinPostUrl) ? project.linkedinPostUrl : null
});

const ProjectVisual = ({ project, language, labels, title }) => {
  if (project.image) {
    const customAlt = getLocalizedValue(project.imageAlt, language);
    const presentation = project.imagePresentation || 'browser';

    return (
      <div className={`project-image-frame project-image-frame--modal project-image-frame--${presentation}`}>
        {presentation === 'browser' && (
          <span className="project-image-frame__toolbar" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        )}
        <img
          className="project-modal__image"
          src={project.image}
          alt={customAlt || `${title} — ${labels.projectPreview}`}
          decoding="async"
        />
      </div>
    );
  }

  const cover = project.cover || {};

  return (
    <div
      className={`project-generated-cover project-generated-cover--modal project-generated-cover--${cover.variant || 'default'}`}
      role="img"
      aria-label={labels.brandedCover(title)}
    >
      <span className="project-generated-cover__grid" aria-hidden="true" />
      <span className="project-generated-cover__orb" aria-hidden="true" />
      <span className="project-generated-cover__eyebrow">
        {getLocalizedValue(cover.eyebrow, language)}
      </span>
      <span className="project-generated-cover__mark" aria-hidden="true">
        {cover.mark || title.charAt(0)}
      </span>
      <strong className="project-generated-cover__label">{cover.label || title}</strong>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const { language } = useLanguage();
  const labels = copy[language] || copy.en;
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  const title = getLocalizedValue(project.title, language, 'Untitled project');
  const description = getLocalizedValue(project.description, language);
  const context = getLocalizedValue(
    project.context,
    language,
    labels.category[project.category] || project.category
  );
  const features = getLocalizedValue(project.features, language, []);
  const architecture = getLocalizedValue(project.architecture, language, []);
  const links = getProjectLinks(project);
  const hasLinks = links.live || links.code || links.linkedin;
  const details = [
    { icon: 'fa-user-tie', label: labels.client, value: getLocalizedValue(project.client, language) },
    { icon: 'fa-calendar', label: labels.date, value: getLocalizedValue(project.date, language) },
    { icon: 'fa-clock', label: labels.duration, value: getLocalizedValue(project.duration, language) },
    { icon: 'fa-code', label: labels.role, value: getLocalizedValue(project.role, language) }
  ].filter((item) => item.value);

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = Array.from(modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));

      if (focusableElements.length === 0) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement?.focus?.();
    };
  }, [onClose]);

  const handleBackdropMouseDown = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div className="project-modal-overlay" onMouseDown={handleBackdropMouseDown}>
      <div
        className="project-modal"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        <header className="project-modal__header">
          <div className="project-modal__heading">
            <p>{context}</p>
            <h2 id={titleId}>
              {title}
              {project.arabicBrand && (
                <span className="project-modal__arabic" lang="ar" dir="rtl">
                  {project.arabicBrand}
                </span>
              )}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="project-modal__close"
            onClick={onClose}
            aria-label={labels.closeDialog}
          >
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </header>

        <div className="project-modal__scroll">
          <div className="project-modal__visual">
            <ProjectVisual
              project={project}
              language={language}
              labels={labels}
              title={title}
            />
          </div>

          <div className="project-modal__content">
            <section className="project-modal__section project-modal__overview">
              <p className="project-modal__section-label">01 · {labels.overview}</p>
              <p id={descriptionId} className="project-modal__description">{description}</p>
            </section>

            {details.length > 0 && (
              <section className="project-modal__section" aria-labelledby={`${titleId}-details`}>
                <h3 id={`${titleId}-details`}>{labels.projectDetails}</h3>
                <dl className="project-modal__facts">
                  {details.map((detail) => (
                    <div key={detail.label}>
                      <i className={`fas ${detail.icon}`} aria-hidden="true" />
                      <dt>{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {Array.isArray(architecture) && architecture.length > 0 && (
              <section className="project-modal__section" aria-labelledby={`${titleId}-architecture`}>
                <h3 id={`${titleId}-architecture`}>{labels.architecture}</h3>
                <ol className="project-modal__architecture">
                  {architecture.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{step}</strong>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {Array.isArray(features) && features.length > 0 && (
              <section className="project-modal__section" aria-labelledby={`${titleId}-features`}>
                <h3 id={`${titleId}-features`}>{labels.features}</h3>
                <ul className="project-modal__features">
                  {features.map((feature) => (
                    <li key={feature}>
                      <i className="fas fa-check" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {Array.isArray(project.technologies) && project.technologies.length > 0 && (
              <section className="project-modal__section" aria-labelledby={`${titleId}-technologies`}>
                <h3 id={`${titleId}-technologies`}>{labels.technologies}</h3>
                <div className="project-modal__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </section>
            )}

            {project.challenges && (
              <section className="project-modal__section" aria-labelledby={`${titleId}-challenges`}>
                <h3 id={`${titleId}-challenges`}>{labels.challenges}</h3>
                <p className="project-modal__description">
                  {getLocalizedValue(project.challenges, language)}
                </p>
              </section>
            )}

            {hasLinks && (
              <nav className="project-modal__actions" aria-label={labels.projectDetails}>
                {links.live && (
                  <a href={links.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                    {labels.liveDemo}
                  </a>
                )}
                {links.code && (
                  <a href={links.code} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" aria-hidden="true" />
                    {labels.viewCode}
                  </a>
                )}
                {links.linkedin && (
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                    {labels.linkedinPost}
                  </a>
                )}
              </nav>
            )}
          </div>
        </div>

        <footer className="project-modal__footer">
          <button type="button" onClick={onClose}>{labels.close}</button>
        </footer>
      </div>
    </div>
  );
};

export default ProjectModal;
