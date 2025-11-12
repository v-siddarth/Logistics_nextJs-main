
import Link from 'next/link';
import React from 'react';

const ServiceHomeOne = () => {
  return (
    <>
      <div className="service-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title">
                  <h2>Service tailored to your needs</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-top">
                  <div className="service-icon">
                    <img src="assets/images/service/service-icon1.png" alt="" />
                  </div>
                  <div className="service-number">
                    <h4>01</h4>
                  </div>
                </div>
                <div className="service-content">
                  <h2><Link href="/service-details">Logistics Made Simple</Link></h2>
                  <p>Logistic services involve the movement a  storage, and management</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-top">
                  <div className="service-icon">
                    <img src="assets/images/service/service-icon2.png" alt="" />
                  </div>
                  <div className="service-number">
                    <h4>02</h4>
                  </div>
                </div>
                <div className="service-content">
                  <h2><Link href="/service-details"> Speedy Shipments Smiling Faces Logistically</Link></h2>
                  <p>Logistic services involve the movement a  storage, and management</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-top">
                  <div className="service-icon">
                    <img src="assets/images/service/service-icon3.png" alt="" />
                  </div>
                  <div className="service-number">
                    <h4>03</h4>
                  </div>
                </div>
                <div className="service-content">
                  <h2><Link href="/service-details">Speaking We Deliver From A to Seamless Logistics</Link></h2>
                  <p>Logistic services involve the movement a  storage, and management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHomeOne;