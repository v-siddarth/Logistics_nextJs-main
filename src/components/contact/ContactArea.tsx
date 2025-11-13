"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  option: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactArea = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    option: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your message! We will get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          option: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="contact-area inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-single-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="contact-title">
                  <h4>Lets Talk</h4>
                  <p>Customs Clearance Form · Quote Request Form · ICEGATE Integration</p>
                </div>
                <div className="contact-items">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-content">
                    <h4>Need help?</h4>
                    <h6>+91 9876543210</h6> 
                  </div>
                </div>
                <div className="contact-items">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-content">
                    <h4>Location</h4>
                    <h6>CBD Belapur, Navi Mumbai</h6>
                  </div>
                </div>
                <div className="contact-items">
                  <div className="contact-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-content">
                    <h4>Email</h4>
                    <h6>
                      <a 
                        href="mailto:docs@sglogsitics.net.in" 
                        style={{
                          color: 'inherit',
                          textDecoration: 'underline',
                          cursor: 'pointer'
                        }}
                      >
                        docs@sglogsitics.net.in
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="contact-box">
                <div className="row">
                  <div className="col-lg-12">
                    {submitStatus.type && (
                      <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
                        {submitStatus.message}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} id="tech-time">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.2s">
                            <input 
                              type="text" 
                              name="name" 
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.4s">
                            <input 
                              type="email" 
                              name="email" 
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.6s">
                            <select 
                              className="styled-select"
                              name="option"
                              value={formData.option}
                              onChange={handleInputChange}
                            >
                              <option value="">Choose an Option</option>
                              <option value="customs-clearance">Customs Clearance</option>
                              <option value="quote-request">Quote Request</option>
                              <option value="icegate-integration">ICEGATE Integration</option>
                              <option value="logistics-services">Logistics Services</option>
                              <option value="general-inquiry">General Inquiry</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.2s">
                            <textarea 
                              name="message" 
                              id="message" 
                              cols={30} 
                              rows={10} 
                              placeholder="Message here..."
                              value={formData.message}
                              onChange={handleInputChange}
                              className={errors.message ? 'error' : ''}
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-box-button wow fadeInUp" data-wow-delay="0.4s">
                            <button type="submit" disabled={isSubmitting}>
                              {isSubmitting ? 'Sending...' : 'Send Now'} 
                              <i className="bi bi-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .error-message {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          display: block;
        }
        
        .form-box input.error,
        .form-box textarea.error {
          border-color: #dc3545;
        }
        
        .alert {
          padding: 0.75rem 1.25rem;
          margin-bottom: 1rem;
          border: 1px solid transparent;
          border-radius: 0.25rem;
        }
        
        .alert-success {
          color: #155724;
          background-color: #d4edda;
          border-color: #c3e6cb;
        }
        
        .alert-danger {
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
        }
        
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default ContactArea;
