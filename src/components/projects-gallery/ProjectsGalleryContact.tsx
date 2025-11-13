"use client";
import React from 'react';

const ProjectsGalleryContact = () => {
  return (
    <>
      <div className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="contact-single-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="contact-title">
                  <h4>Get In Touch</h4>
                  <p>Logistic services involve movement storage, and management </p>
                </div>
                <div className="contact-items">
                  <div className="contact-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="contact-content">
                    <h4>Need help?</h4>
                    <h6>+91 95942 79131</h6>
                  </div>
                </div>
                <div className="contact-items">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-content">
                    <h4>Location</h4>
                    <h6>D-209, 2nd Floor, Tower No. 7, International Infotech Center, CBD Belapur, Navi Mumbai - 400614</h6>
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
														textDecoration: 'underline',														cursor: 'pointer'													}}												>													docs@sglogsitics.net.in												</a>											</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact-box">
                <div className="row">
                  <div className="col-lg-12">
                    <form onSubmit={(e) => e.preventDefault()} id="tech-time">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.2s">
                            <input type="text" name="name" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.4s">
                            <input type="text" name="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.6s">
                            <select className="styled-select">
                              <option>Choose an Option</option>
                              <option defaultValue="option1">Option 1</option>
                              <option defaultValue="option2">Option 2</option>
                              <option defaultValue="option3">Option 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-box wow fadeInUp" data-wow-delay="0.2s">
                            <textarea name="massage" id="massage" cols={30} rows={10} placeholder="Message here.."></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-box-button wow fadeInUp" data-wow-delay="0.4s">
                            <button>Sent Now <i className="bi bi-arrow-right"></i></button>
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
    </>
  );
};

export default ProjectsGalleryContact;