import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CertificateModal from '../components/CertificateModal';
import certificatesData from '../assets/data/certificatesData';
import '../styles/Certificates.css';

const copy = {
  en: {
    all: 'All',
    filters: 'Certificate categories',
    open: 'View certificate',
    noResults: 'No certificates found',
    noResultsHint: 'Try another category or search term.',
    clear: 'Clear search',
    showing: (visible, total) => `Showing ${visible} of ${total} certificates`
  },
  fr: {
    all: 'Tous',
    filters: 'Catégories de certificats',
    open: 'Voir le certificat',
    noResults: 'Aucun certificat trouvé',
    noResultsHint: 'Essayez une autre catégorie ou recherche.',
    clear: 'Effacer la recherche',
    showing: (visible, total) => `${visible} certificats affichés sur ${total}`
  }
};

const Certificates = ({ featured = false }) => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const labels = copy[language] || copy.en;
  const categories = useMemo(
    () => [...new Set(certificatesData.map((certificate) => certificate.category))],
    []
  );
  const [filter, setFilter] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCertificates = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return certificatesData.filter((certificate) => {
      const matchesCategory = filter === 'all' || certificate.category === filter;
      const matchesSearch = !normalizedSearch
        || certificate.title.toLowerCase().includes(normalizedSearch)
        || certificate.organization.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  const visibleCertificates = featured
    ? certificatesData.slice(0, 3)
    : filteredCertificates;
  const Wrapper = featured ? 'div' : 'section';

  return (
    <Wrapper
      className={`certificates-section${featured ? ' certificates-section--embedded' : ''}`}
      id={featured ? undefined : 'certificates'}
      aria-labelledby="certificates-title"
    >
      <div className="certificates-container">
        <header className="section-header">
          <h2 className="section-title" id="certificates-title">{t.certificates.title}</h2>
          <div className="underline" aria-hidden="true" />
          <p className="section-subtitle">{t.certificates.subtitle}</p>
        </header>

        {!featured && (
          <div className="certificates-controls">
            <div className="filter-buttons" role="group" aria-label={labels.filters}>
              {['all', ...categories].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                >
                  {category === 'all'
                    ? labels.all
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <label className="search-container">
              <span className="sr-only">{t.certificates.searchPlaceholder}</span>
              <input
                type="search"
                placeholder={t.certificates.searchPlaceholder}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="search-input"
              />
              <i className="fas fa-search search-icon" aria-hidden="true" />
            </label>
          </div>
        )}

        {visibleCertificates.length > 0 ? (
          <motion.div
            className="certificates-grid"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {visibleCertificates.map((certificate) => (
              <motion.button
                type="button"
                key={certificate.id}
                className="certificate-card"
                onClick={() => setSelectedCertificate(certificate)}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                aria-label={`${labels.open}: ${certificate.title}`}
              >
                <span className="certificate-image">
                  <img
                    src={certificate.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="certificate-badge">{certificate.category}</span>
                </span>
                <span className="certificate-content">
                  <span className="certificate-title">{certificate.title}</span>
                  <span className="certificate-organization">
                    <i className="fas fa-building" aria-hidden="true" />
                    <span>{certificate.organization}</span>
                  </span>
                  <span className="certificate-date">
                    <i className="fas fa-calendar-alt" aria-hidden="true" />
                    <span>{certificate.dateIssued}</span>
                  </span>
                  <span className="certificate-view">
                    <span>{labels.open}</span>
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <div className="no-certificates" role="status">
            <i className="fas fa-search" aria-hidden="true" />
            <h3>{labels.noResults}</h3>
            <p>{labels.noResultsHint}</p>
            <button type="button" className="reset-btn" onClick={() => setSearchTerm('')}>
              {labels.clear}
            </button>
          </div>
        )}

        {!featured && (
          <p className="certificates-count" aria-live="polite">
            {labels.showing(visibleCertificates.length, certificatesData.length)}
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Certificates;
