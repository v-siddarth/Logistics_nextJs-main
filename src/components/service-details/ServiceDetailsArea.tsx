"use client";
import React, { useState } from 'react';
import VideoPopup from '@/modals/video-popup';

interface FormData {
  name: string;
  email: string;
  shipmentType: string;
  trackingNumber: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  trackingNumber?: string;
}

const ServiceDetailsArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      shipmentType: 'Custom Clearance',
      trackingNumber: ''
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

      if (!formData.trackingNumber.trim()) {
        newErrors.trackingNumber = 'Tracking number is required';
      }

      return newErrors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            option: formData.shipmentType,
            message: `Tracking Number: ${formData.trackingNumber}`
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: result.message || 'Tracking request submitted successfully!'
          });
          // Reset form
          setFormData({
            name: '',
            email: '',
            shipmentType: 'Custom Clearance',
            trackingNumber: ''
          });
          setErrors({});
        } else {
          setSubmitStatus({
            type: 'error',
            message: result.error || 'Failed to submit tracking request. Please try again.'
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
      <div className="service-details-area wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8">
              <div className="widget-contact-box">
                <div className="widget-contact-title">
                  <h4>Contact Us</h4>
                </div>
                <div className="widget-contact-icon">
                  <a href="#"><i className="bi bi-telephone-fill"></i></a>
                </div>
                <div className="widget-contact-content">
                  <h4><a href="tel:+919876543210">+91 98765 43210</a></h4>
                </div>
              </div>
              <div className="contact-box style-three">
                <div className="row">
                  <div className="col-lg-12">
                    <form onSubmit={handleSubmit} id="tech-time">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-box">
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className={errors.name ? 'error' : ''} />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box">
                            <input type="text" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className={errors.email ? 'error' : ''} />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box">
                            <input 
                              type="text" 
                              name="shipmentType" 
                              value="Custom Clearance" 
                              readOnly 
                              className="styled-select" 
                            />
                          </div>
                        </div>
                        <div className="form-box">
                          <input type="text" name="trackingNumber" placeholder="Tracking Number" value={formData.trackingNumber} onChange={handleInputChange} className={errors.trackingNumber ? 'error' : ''} />
                          {errors.trackingNumber && <span className="error-message">{errors.trackingNumber}</span>}
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box-button style-three">
                            <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Track Now'} <i className="bi bi-arrow-right"></i></button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {submitStatus.type && (
                      <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}>
                        {submitStatus.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title serviced">
                  <h2>Where Reliability Meets </h2>
                </div>
              </div>
              <div className="service-details-thumb">
                <img src="assets/images/service/service-details.png" alt="" />
              </div>
              <div className="service-detials-discription">
                <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling. Services typically include freight transportation, warehousing, distribution, and order fulfillment</p>
                <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-12">
                  <div className="service-details-thumb">
                    <img src="assets/images/service/service-details1.png" alt="" />
                    <div className="service-details-video">
                      <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"  
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                      ><i className="bi bi-play-fill"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="service-detials-list">
                    <span><i className="bi bi-chevron-double-right"></i> Speedy Shipments, Smiling Faces</span>
                    <span><i className="bi bi-chevron-double-right"></i> Delivering Promises, Not Just Packages</span>
                    <span><i className="bi bi-chevron-double-right"></i> Navigate the Logistics Journey With Us Where Reliability </span>
                    <span><i className="bi bi-chevron-double-right"></i> Speedy Shipments, Smiling Faces Logistically Speaking</span>
                    <span><i className="bi bi-chevron-double-right"></i> Pioneering Pathways in Delivery Ship Smarter, Not Harder</span>
                    <span><i className="bi bi-chevron-double-right"></i> Goods Guard Secure Logistics Express Ease Transport</span>
                  </div>
                </div>
                <div className="service-detials-discription-two">
                  <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-9 col-md-12">
                  <div className="section-main-title-two serviced">
                    <h2>Where Reliability Meets </h2>
                  </div>
                  <div className="service-detials-discription">
                    <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
                  </div>
                  <div className="section-main-title-two serviced">
                    <h2>Perfect Cargo Solutions </h2>
                  </div>
                  <div className="service-detials-discription">
                    <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling. Services typically include freight transportation, warehousing, distribution</p>
                  </div>
                  <div className="section-main-title-two serviced">
                    <h2>Perfect Cargo Solutions </h2>
                  </div>
                  <div className="service-detials-list">
                    <span><i className="bi bi-chevron-double-right"></i> Where Reliability Meets Efficiency</span>
                    <span><i className="bi bi-chevron-double-right"></i> Logistic services involve the movement, storage, and management</span>
                    <span><i className="bi bi-chevron-double-right"></i> Pioneering Pathways in Delivery Ship Smarter </span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="service-details-thumb">
                    <img src="assets/images/service/service-details2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* video modal start */}
            <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}


    </>
  );
};

export default ServiceDetailsArea;

<style jsx>{`
  .error-message {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
  }
  
  .form-box input.error,
  .form-box select.error {
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