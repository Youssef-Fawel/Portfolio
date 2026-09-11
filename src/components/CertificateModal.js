import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import '../styles/CertificateModal.css';

const copy = {
  en: {
    close: 'Close',
    closeDialog: 'Close certificate details',
    details: 'Certificate details',
    organization: 'Issuing organization',
    issued: 'Date issued',
    credential: 'Credential ID',
    expiration: 'Expiration date',
    description: 'Description',
    skills: 'Skills',
    zoomIn: 'Enlarge certificate',
    zoomOut: 'Exit enlarged view',
    verify: 'Verify certificate'
  },
  fr: {
    close: 'Fermer',
    closeDialog: 'Fermer les détails du certificat',
    details: 'Détails du certificat',
    organization: 'Organisme émetteur',
    issued: 'Date d’obtention',
    credential: 'Identifiant',
    expiration: 'Date d’expiration',
    description: 'Description',
    skills: 'Compétences',
    zoomIn: 'Agrandir le certificat',
    zoomOut: 'Quitter la vue agrandie',
    verify: 'Vérifier le certificat'
  }
};

const CertificateModal = ({ certificate, onClose }) => {
  const { language } = useLanguage();
  const labels = copy[language] || copy.en;
  const shouldReduceMotion = useReducedMotion();
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const imageZoomedRef = useRef(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  imageZoomedRef.current = isImageZoomed;

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (imageZoomedRef.current) setIsImageZoomed(false);
        else onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusableElements = Array.from(dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => element.getClientRects().length > 0);
      if (focusableElements.length === 0) return;

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

  const details = [
    { icon: 'fa-building', label: labels.organization, value: certificate.organization },
    { icon: 'fa-calendar-alt', label: labels.issued, value: certificate.dateIssued },
    { icon: 'fa-id-card', label: labels.credential, value: certificate.credentialId },
    { icon: 'fa-hourglass-end', label: labels.expiration, value: certificate.expirationDate }
  ].filter((detail) => detail.value);

  return (
    <motion.div
      className="certificate-dialog-overlay"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        className="certificate-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={certificate.description ? descriptionId : undefined}
        tabIndex={-1}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
      >
        <header className="certificate-dialog__header">
          <h2 id={titleId}>{certificate.title}</h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="certificate-dialog__icon-button"
            onClick={onClose}
            aria-label={labels.closeDialog}
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </header>

        <div className="certificate-dialog__layout">
          <div className="certificate-dialog__visual">
            <button
              type="button"
              className="certificate-dialog__image-button"
              onClick={() => setIsImageZoomed(true)}
              aria-label={labels.zoomIn}
            >
              <img src={certificate.image} alt={certificate.title} />
            </button>
            <div className="certificate-dialog__visual-actions">
              <button type="button" onClick={() => setIsImageZoomed(true)}>
                <i className="fas fa-search-plus" aria-hidden="true" />
                {labels.zoomIn}
              </button>
              {certificate.verificationLink && (
                <a href={certificate.verificationLink} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                  {labels.verify}
                </a>
              )}
            </div>
          </div>

          <div className="certificate-dialog__content">
            <section aria-labelledby={`${titleId}-details`}>
              <h3 id={`${titleId}-details`}>{labels.details}</h3>
              <dl className="certificate-dialog__facts">
                {details.map((detail) => (
                  <div key={detail.label}>
                    <i className={`fas ${detail.icon}`} aria-hidden="true" />
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {certificate.description && (
              <section aria-labelledby={`${titleId}-description`}>
                <h3 id={`${titleId}-description`}>{labels.description}</h3>
                <p id={descriptionId}>{certificate.description}</p>
              </section>
            )}

            {certificate.skills?.length > 0 && (
              <section aria-labelledby={`${titleId}-skills`}>
                <h3 id={`${titleId}-skills`}>{labels.skills}</h3>
                <ul className="certificate-dialog__skills">
                  {certificate.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </section>
            )}

            <div className="certificate-dialog__footer">
              {certificate.verificationLink && (
                <a href={certificate.verificationLink} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                  {labels.verify}
                </a>
              )}
              <button type="button" onClick={onClose}>{labels.close}</button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isImageZoomed && (
            <motion.div
              className="certificate-dialog__zoom"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.14 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setIsImageZoomed(false);
              }}
            >
              <img src={certificate.image} alt={certificate.title} />
              <button
                type="button"
                className="certificate-dialog__zoom-close"
                onClick={() => setIsImageZoomed(false)}
                aria-label={labels.zoomOut}
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
