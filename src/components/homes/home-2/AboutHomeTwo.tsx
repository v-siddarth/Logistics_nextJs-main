"use client";

import Count from "@/common/count";

const AboutHomeTwo = ({ style_2 }: any) => {
  return (
    <>
      <div className={`about-area style-two ${style_2 ? "inner-page" : ""}`}>
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-6 col-md-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title style-two">
                  <h2>We Make Logistics Smooth and Dependable</h2>
                </div>
                <div className="section-title-discription style-two">
                  <p>
                    Company Overview · Customs Compliance Experience · Port & Depot Coverage · Mission & Values · Licenses & Certifications
                  </p>
                </div>
              </div>

              <div className="about-text wow fadeInUp" data-wow-delay="0.4s">
                <div className="about-text-icon">
                  <img src="assets/images/resource/deliver-icon.png" alt="" />
                </div>
                <div className="about-text-title">
                  <h4>Delivering Excellence in Every Shipment</h4>
                </div>
              </div>
            </div>

            {/* Right Side Replaced with Image */}
            <div className="col-lg-6 col-md-12">
              <div className="about-image wow fadeInUp" data-wow-delay="0.4s">
                <img
                  src="assets/images/company.jpg"
                  alt="Company"
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;
