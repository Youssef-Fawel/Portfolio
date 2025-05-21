import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
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
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Sending your message...'
      });
      
      // Prepare form data with form-name included
      const submissionData = {
        'form-name': 'contact',
        ...formData,
      };
      
      // This is the key part for Netlify forms
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(submissionData)
      })
        .then(() => {
          console.log("Form submission successful!");
          setFormStatus({
            submitted: true,
            success: true,
            message: 'Thank you! Your message has been sent successfully.'
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          
          // Reset status after 5 seconds
          setTimeout(() => {
            setFormStatus({
              submitted: false,
              success: false,
              message: ''
            });
          }, 5000);
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          setFormStatus({
            submitted: true,
            success: false,
            message: 'Oops! Something went wrong. Please try again later.'
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error('Error in form submission:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      });
      setIsSubmitting(false);
    }
  };

  // Scroll to form errors
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
          <h2 className="section-title">Contact Me</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Let's work together on your next project
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
              <h3>Get in Touch</h3>
              <p>
                I'm always open to new opportunities and collaborations.
                Feel free to reach out to me using the form or through my contact information below.
              </p>
            </div>
            
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="icon-container">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:youssef.fawel.it@episousse.com.tn">
                    youssef.fawel.it@episousse.com.tn
                  </a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-container">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Sousse, Tunisia</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="icon-container">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+216 96275573</p>
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
                <h3>Send Me a Message</h3>
                <p>I'll get back to you as soon as possible</p>
              </div>
              
              {formStatus.submitted && (
                <motion.div
                  className={`form-status ${formStatus.success ? 'success' : 'error'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`fas ${formStatus.success ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  <span>{formStatus.message}</span>
                </motion.div>
              )}
              
              {/* Simplified form structure for Netlify */}
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
                  <label htmlFor="name">Name</label>
                  <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? 'error' : ''}
                    />
                  </div>
                  {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? 'error' : ''}
                    />
                  </div>
                  {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <div className="input-container textarea-container">
                    <i className="fas fa-comment-alt"></i>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                  </div>
                  {formErrors.message && <div className="error-message">{formErrors.message}</div>}
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
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
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
