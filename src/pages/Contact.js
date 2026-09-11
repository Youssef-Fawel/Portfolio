import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    status: 'idle',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = t.contact.nameRequired;
    }
    
    if (!formData.email.trim()) {
      errors.email = t.contact.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.contact.emailInvalid;
    }
    
    if (!formData.message.trim()) {
      errors.message = t.contact.messageRequired;
    } else if (formData.message.trim().length < 10) {
      errors.message = t.contact.messageShort;
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      setFormStatus({
        submitted: true,
        status: 'pending',
        message: t.contact.sending
      });
      
      const submissionData = {
        'form-name': 'contact',
        ...formData,
      };
      
      const response = await fetch("/", {
        method: "POST",
        headers: {
           "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode(submissionData)
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setFormData({ name: '', email: '', message: '' });
      navigate('/thank-you');
    } catch (error) {
      console.error('Error in form submission:', error);
      setFormStatus({
        submitted: true,
        status: 'error',
        message: t.contact.sendError
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length > 0 && formRef.current) {
      const firstErrorField = document.querySelector('.error-message');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [formErrors]);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="contact-content">
          <motion.div
            className="contact-info-column"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="contact-heading">
              <h3>{t.contact.getInTouch}</h3>
              <p>
                {t.contact.description}
              </p>
            </div>
            
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="icon-container">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="contact-details">
                  <h4>{t.contact.emailLabel}</h4>
                  <a href="mailto:youssef.fawel@et.esiea.fr">
                    youssef.fawel@et.esiea.fr
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-container">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </div>
                <div className="contact-details">
                  <h4>{t.contact.locationLabel}</h4>
                  <p>Paris, France</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-container">
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                </div>
                <div className="contact-details">
                  <h4>{t.contact.phoneLabel}</h4>
                  <a href="tel:+33746495170">+33 7 46 49 51 70</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="contact-form-column"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            ref={formRef}
          >
            <div className="contact-form-container">
              <div className="form-header">
                <h3>{t.contact.sendMessage}</h3>
                <p>{t.contact.responseTime}</p>
              </div>
              
              {formStatus.submitted && (
                <motion.div
                  className={`form-status ${formStatus.status}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  role={formStatus.status === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                >
                  <i
                    className={`fas ${formStatus.status === 'error' ? 'fa-exclamation-circle' : 'fa-paper-plane'}`}
                    aria-hidden="true"
                  ></i>
                  <span>{formStatus.message}</span>
                </motion.div>
              )}
              
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className={isSubmitting ? 'submitting' : ''}
              >
                {/* These hidden inputs are required for Netlify forms */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
                <div className="form-group">
                  <label htmlFor="name">{t.contact.name}</label>
                  <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? 'error' : ''}
                      autoComplete="name"
                      required
                      aria-invalid={Boolean(formErrors.name)}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                    />
                  </div>
                  {formErrors.name && <div className="error-message" id="name-error" role="alert">{formErrors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t.contact.email}</label>
                  <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? 'error' : ''}
                      autoComplete="email"
                      required
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {formErrors.email && <div className="error-message" id="email-error" role="alert">{formErrors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t.contact.message}</label>
                  <div className="input-container textarea-container">
                    <i className="fas fa-comment-alt"></i>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'error' : ''}
                      required
                      minLength="10"
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? 'message-error' : undefined}
                    ></textarea>
                  </div>
                  {formErrors.message && <div className="error-message" id="message-error" role="alert">{formErrors.message}</div>}
                </div>
                
                <div className="form-submit">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                      </>
                    ) : (
                      <>
                        <span>{t.contact.sendBtn}</span>
                        <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
