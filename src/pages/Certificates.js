import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CertificateModal from '../components/CertificateModal';
import certificatesData from '../assets/data/certificatesData';
import '../styles/Certificates.css';

const Certificates = () => {
  const { t } = useLanguage();
  const categories = [...new Set(certificatesData.map(cert => cert.category))];
  
  const [filter, setFilter] = useState(categories[0]); 
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter certificates based on category and search term
  const filteredCertificates = certificatesData
    .filter(cert => cert.category === filter)
    .filter(cert =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.organization.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; 
  };
  
  const handleFilterChange = (category) => {
    setIsLoading(true);
    setFilter(category);
    
    // Simulate loading when changing filters
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <div className="section-header">
          <h2 className="section-title">{t.certificates.title}</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            {t.certificates.subtitle}
          </p>
        </div>
        
        <div className="certificates-controls">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => handleFilterChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="search-container">
            <input
              type="text"
              placeholder={t.certificates.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
        
        {isLoading ? (
          <div className="certificates-loading">
            <div className="spinner"></div>
            <p>Loading certificates...</p>
          </div>
        ) : (
          <>
            <AnimatePresence>
              <motion.div
                className="certificates-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {filteredCertificates.map(certificate => (
                  <motion.div
                    key={certificate.id}
                    className="certificate-card"
                    onClick={() => openModal(certificate)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                      y: -10,
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="certificate-image">
                      <img src={certificate.image} alt={certificate.title} />
                      <div className="certificate-badge">
                        <span>{certificate.category}</span>
                      </div>
                    </div>
                    
                    <div className="certificate-content">
                      <h3 className="certificate-title">{certificate.title}</h3>
                      <div className="certificate-organization">
                        <i className="fas fa-building"></i>
                        <span>{certificate.organization}</span>
                      </div>
                      <div className="certificate-date">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{certificate.dateIssued}</span>
                      </div>
                      <div className="certificate-view">
                        <span>View Certificate</span>
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            
            {filteredCertificates.length === 0 && (
              <motion.div
                className="no-certificates"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-search-minus"></i>
                <h3>No certificates found</h3>
                <p>Try adjusting your search criteria</p>
                <button
                  className="reset-btn"
                  onClick={() => {
                    setSearchTerm('');
                  }}
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </>
        )}
        
        <div className="certificates-count">
          Showing {filteredCertificates.length} of {certificatesData.filter(cert => cert.category === filter).length} certificates in {filter}
        </div>
      </div>
      
      <AnimatePresence>
        {modalOpen && selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
