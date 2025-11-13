
"use client"

import Link from 'next/link';
import React, { useState } from 'react';

// Newsletter subscription function
const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    const response = await fetch('https://formsubmit.co/docs@sglogsitics.net.in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Newsletter Subscriber',
        email: email,
        _subject: 'New Newsletter Subscription',
        message: `
New Newsletter Subscription:

Email: ${email}

Subscribed: ${new Date().toLocaleString()}
        `,
        _captcha: 'false',
        _template: 'table',
      }),
    });

    console.log('Newsletter subscription response status:', response.status);

    if (response.ok) {
      console.log('✅ Newsletter subscription successful');
      return true;
    } else {
      console.error('❌ Newsletter subscription error:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ Newsletter subscription service error:', error);
    return false;
  }
};

const FooterTwo = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (message) setMessage(''); // Clear message when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Send newsletter subscription email
      const success = await subscribeToNewsletter(email);
      
      if (success) {
        setMessage('Thank you for subscribing! We\'ll keep you updated.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="row footer align-items-center mb-100">
            <div className="col-lg-8 col-md-12">
              <div className="footer-content">
                <h2>Looking For The Next Shipment</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer-btn">
                <div className="packpro-btn footer">
                  <a href="/contact">Get A Flight Quote <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget">
                <div className="footer-wiget-log">
                  <Link href="/"><img src="assets/images/foter-logo.png" alt="" /></Link>
                </div>
                <div className="footer-wiget-text">
                  <h4>Logistic services involve the movement the storage, and of amanagement</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget box">
                <div className="footer-wiget-title">
                  <h4>Pages</h4>
                </div>
                <div className="footer-wiget-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget respon">
                <div className="footer-wiget-title">
                  <h4>Contact</h4>
                </div>
                <div className="footer-wiget-contact">
                  <ul>
                    <li>
                      <div className="contact-items">
                        <div className="contact-icon">
                          <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <div className="contact-content">
                          <h4>Address</h4>
                          <h6>Navi Mumbai, Maharashtra</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-items">
                        <div className="contact-icon">
                          <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="contact-content">
                          <h4>Phone Number</h4>
                          <h6><a href="tel:+919594279131" style={{
														color: 'inherit',
														textDecoration: 'none',
														fontWeight: 'bold',
														cursor: 'pointer'
													}}>+919594279131</a>/
                          <a href="tel:+919137674355" style={{
														color: 'inherit',
														textDecoration: 'none',
														fontWeight: 'bold',
														cursor: 'pointer'
													}}>9137674355</a></h6> 
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-items">
                        <div className="contact-icon">
                          <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div className="contact-content">
                          <h4>Email</h4>
                          <h6>
                            <a href="mailto:docs@sglogsitics.net.in"
                            				style={{
														color: 'inherit',
														textDecoration: 'none',
														fontWeight: 'bold',
														cursor: 'pointer'
													}}
                                                    >
                                                docs@sglogsitics.net.in
                                                </a>

                          </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 pr-0">
              <div className="footer-wiget">
                <div className="footer-wiget-title">
                  <h4>Stay Connected</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <input 
                      type="email" 
                      name="EMAIL" 
                      placeholder="Enter E-mail" 
                      required 
                      value={email}
                      onChange={handleEmailChange}
                      disabled={isSubmitting}
                    />
                    <button 
                      className="submit-button" 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <i className="bi bi-hourglass-split"></i>
                      ) : (
                        <i className="bi bi-send"></i>
                      )}
                    </button>
                  </div>
                  {message && (
                    <div className="form-message" style={{
                      marginTop: '10px',
                      fontSize: '14px',
                      color: message.includes('Thank you') ? '#28a745' : '#dc3545'
                    }}>
                      {message}
                    </div>
                  )}
                </form>
                <div className="footer-social">
                  <ul>
                    {/* <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row line mt-90">
            <div className="col-lg-6 col-md-12">
              <div className="copyright-text">
                <p>© SG Logistics  {new Date().getFullYear()} | All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="footer-condition">
                <ul>
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTwo;