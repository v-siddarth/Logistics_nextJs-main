
import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
  return (
    <>
      <div className="service-area style-two inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two inner-page wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details">Licensed CHA Customs Clearance Services</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon4.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>BOE Filing · HSN Classification · Duty Assessment · Case Study: Nhava Sheva Success</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two inner-page wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details"> Freight Forwarding (Sea & Air Cargo)</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon5.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Sea Freight · Air Freight · Door‑to‑Door Movement · Export Consolidation · Import Deconsolidation · Partner Shipping Lines</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two inner-page wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details">Container Transportation & Last‑Mile Deliverys</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon6.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Port‑to‑Destination Container Movement · Last‑Mile Delivery · GPS Tracking Support · Flexible Fleet Options</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="service-box style-two inner-page wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details">Logistics Made Simple</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon4.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Logistic services involve the movement a  storage, and management Logistic services involve the movement a  storage</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two inner-page wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details"> Speedy Shipments Smiling Faces Logistically</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon5.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Logistic services involve the movement a  storage, and management Logistic services involve the movement a  storage</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two inner-page wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details">Speaking We Deliver From A to Seamless Logistics</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon6.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Logistic services involve the movement a  storage, and management Logistic services involve the movement a  storage</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;