import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from '../components/ProjectModal';
import projectsData from '../assets/data/projectsData';
import '../styles/Projects.css';

const copy = {
  en: {
    eyebrow: 'Selected engineering work',
    title: 'Projects',
    subtitle: 'Full-stack, AI-integrated and mobile products designed around real workflows and measurable user needs.',
    featuredTitle: 'Featured projects',
    featuredDescription: 'Recent, technically substantial work across web, AI and mobile engineering.',
    otherTitle: 'Other projects',
    otherDescription: 'Earlier applications, coursework and focused technical explorations.',
    featured: 'Featured',
    keyCapabilities: 'Key capabilities',
    technologies: 'Technologies',
    viewDetails: 'View details',
    liveDemo: 'Live demo',
    viewCode: 'GitHub',
    linkedinPost: 'LinkedIn post',
    moreTechnologies: (count) => `+${count} more`,
    projectPreview: 'project preview',
    brandedCover: (title) => `Branded case-study cover for ${title}`,
    caseStudy: 'Engineering case study',
    githubProfile: 'More work on GitHub',
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
    eyebrow: 'Sélection de projets techniques',
    title: 'Projets',
    subtitle: 'Des produits Full-stack, mobiles et intégrant l’IA, conçus autour de parcours concrets et de besoins utilisateurs mesurables.',
    featuredTitle: 'Projets à la une',
    featuredDescription: 'Des réalisations récentes et techniquement abouties en ingénierie web, IA et mobile.',
    otherTitle: 'Autres projets',
    otherDescription: 'Applications antérieures, travaux académiques et explorations techniques ciblées.',
    featured: 'À la une',
    keyCapabilities: 'Fonctionnalités clés',
    technologies: 'Technologies',
    viewDetails: 'Voir les détails',
    liveDemo: 'Démo en ligne',
    viewCode: 'GitHub',
    linkedinPost: 'Publication LinkedIn',
    moreTechnologies: (count) => `+${count} autres`,
    projectPreview: 'aperçu du projet',
    brandedCover: (title) => `Couverture graphique de l’étude de cas ${title}`,
    caseStudy: 'Étude de cas technique',
    githubProfile: 'Plus de projets sur GitHub',
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

const ProjectCover = ({ project, language, labels, title }) => {
  if (project.image) {
    const customAlt = getLocalizedValue(project.imageAlt, language);
    const presentation = project.imagePresentation || 'browser';

    return (
      <div className={`project-image-frame project-image-frame--${presentation}`}>
        {presentation === 'browser' && (
          <span className="project-image-frame__toolbar" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        )}
        <img
          className="project-card__image"
          src={project.image}
          alt={customAlt || `${title} — ${labels.projectPreview}`}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  const cover = project.cover || {};
  const coverVariant = cover.variant || 'default';
  const coverLabel = cover.label || title;
  const coverEyebrow = getLocalizedValue(cover.eyebrow, language, labels.caseStudy);

  return (
    <div
      className={`project-generated-cover project-generated-cover--${coverVariant}`}
      role="img"
      aria-label={labels.brandedCover(title)}
    >
      <span className="project-generated-cover__grid" aria-hidden="true" />
      <span className="project-generated-cover__orb" aria-hidden="true" />
      <span className="project-generated-cover__eyebrow">{coverEyebrow}</span>
      <span className="project-generated-cover__mark" aria-hidden="true">
        {cover.mark || title.charAt(0)}
      </span>
      <strong className="project-generated-cover__label">{coverLabel}</strong>
    </div>
  );
};

const ProjectCard = ({ project, language, labels, onOpen }) => {
  const title = getLocalizedValue(project.title, language, 'Untitled project');
  const description = getLocalizedValue(project.description, language);
  const context = getLocalizedValue(
    project.context,
    language,
    labels.category[project.category] || project.category
  );
  const highlightedFeatures = getLocalizedValue(project.cardFeatures, language, []);
  const allFeatures = getLocalizedValue(project.features, language, []);
  const cardFeatures = Array.isArray(highlightedFeatures) && highlightedFeatures.length > 0
    ? highlightedFeatures
    : allFeatures;
  const selectedFeatures = Array.isArray(cardFeatures) ? cardFeatures.slice(0, 2) : [];
  const visibleTechnologies = (
    project.cardTechnologies || project.technologies || []
  ).slice(0, project.featured ? 8 : 5);
  const totalTechnologyCount = Array.isArray(project.technologies)
    ? project.technologies.length
    : visibleTechnologies.length;
  const remainingTechnologyCount = Math.max(totalTechnologyCount - visibleTechnologies.length, 0);
  const links = getProjectLinks(project);

  return (
    <article className={`project-case-card${project.featured ? ' project-case-card--featured' : ''}`}>
      <div className="project-case-card__media">
        <ProjectCover
          project={project}
          language={language}
          labels={labels}
          title={title}
        />
        {project.featured && (
          <span className="project-case-card__featured-badge">
            <i className="fas fa-star" aria-hidden="true" />
            {labels.featured}
          </span>
        )}
      </div>

      <div className="project-case-card__body">
        <p className="project-case-card__context">{context}</p>
        <h3 className="project-case-card__title">
          {title}
          {project.arabicBrand && (
            <span className="project-case-card__arabic" lang="ar" dir="rtl">
              {project.arabicBrand}
            </span>
          )}
        </h3>
        <p className="project-case-card__description">{description}</p>

        {selectedFeatures.length > 0 && (
          <div className="project-case-card__capabilities">
            <span className="project-case-card__capabilities-label">{labels.keyCapabilities}</span>
            <ul>
              {selectedFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-case-card__technologies" aria-label={labels.technologies}>
          {visibleTechnologies.map((technology) => (
            <span className="project-tech-badge" key={technology}>{technology}</span>
          ))}
          {remainingTechnologyCount > 0 && (
            <span className="project-tech-badge project-tech-badge--more">
              {labels.moreTechnologies(remainingTechnologyCount)}
            </span>
          )}
        </div>

        <div className="project-case-card__actions">
          <button
            type="button"
            className="project-action project-action--primary"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
          >
            {labels.viewDetails}
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>

          {links.live && (
            <a className="project-action project-action--secondary" href={links.live} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
              {labels.liveDemo}
            </a>
          )}
          {links.code && (
            <a className="project-action project-action--secondary" href={links.code} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" aria-hidden="true" />
              {labels.viewCode}
            </a>
          )}
          {links.linkedin && (
            <a className="project-action project-action--secondary" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
              {labels.linkedinPost}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = ({ featured = false }) => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const labels = copy[language] || copy.en;
  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);
  const Wrapper = featured ? 'div' : 'section';

  return (
    <Wrapper
      className={`projects-showcase${featured ? ' projects-showcase--embedded' : ''}`}
      id={featured ? undefined : 'projects'}
      aria-labelledby="projects-showcase-title"
    >
      <div className="projects-showcase__shell">
        <header className="projects-showcase__header">
          <p className="projects-showcase__eyebrow">{labels.eyebrow}</p>
          <h2 id="projects-showcase-title">{labels.title}</h2>
          <p>{labels.subtitle}</p>
        </header>

        <section className="project-group" aria-labelledby="featured-projects-title">
          <div className="project-group__header">
            <div>
              <h3 id="featured-projects-title">{labels.featuredTitle}</h3>
              <p>{labels.featuredDescription}</p>
            </div>
            <span className="project-group__count" aria-label={`${featuredProjects.length} ${labels.featuredTitle}`}>
              {String(featuredProjects.length).padStart(2, '0')}
            </span>
          </div>
          <div className="project-grid project-grid--featured">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                labels={labels}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </section>

        {!featured && otherProjects.length > 0 && (
          <section className="project-group project-group--other" aria-labelledby="other-projects-title">
            <div className="project-group__header">
              <div>
                <h3 id="other-projects-title">{labels.otherTitle}</h3>
                <p>{labels.otherDescription}</p>
              </div>
              <span className="project-group__count" aria-label={`${otherProjects.length} ${labels.otherTitle}`}>
                {String(otherProjects.length).padStart(2, '0')}
              </span>
            </div>
            <div className="project-grid project-grid--other">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  language={language}
                  labels={labels}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          </section>
        )}

        {!featured && (
          <div className="projects-showcase__footer">
            <a
              className="projects-showcase__github"
              href="https://github.com/Youssef-Fawel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" aria-hidden="true" />
              {labels.githubProfile}
              <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </Wrapper>
  );
};

export default Projects;
