"use client";

import { useState } from "react";

const faq_data = [
  {
    question: "What industries do you specialize in?",
    answer: "Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain",
  },
  {
    question: "Which major ports and logistics hubs do you cover?",
    answer: "Nhava Sheva (JNPT) · Mundra · Hazira · Chennai · Kolkata",
  },
  {
    question: "How are drivers screened and trained?",
    answer: "Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain",
  },
]

const ProjectsDetailsArea = () => {

  const [open, setOpen] = useState(0);



  return (
    <>
      <div className="project-detials-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title projects-de">
                  <h2>Your Partner in Logistics Excellence</h2>
                </div>
                <div className="section-discription project">
                  <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-thumb">
                <img src="assets/images/project/project-details.png" alt="" />
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="project-details-title">
                    <h4>Where Reliability Meets Efficiency</h4>
                  </div>
                  <div className="porject-detials-discription">
                    <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
                    <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling. Services typically include freight transportation, warehousing, distribution, and order fulfillment</p>
                  </div>
                  <div className="project-order">
                    <div className="project-order-informaton">
                      <div className="project-order-content">
                        <span>Clients:</span>
                        <h4>Jonh Jorden</h4>
                      </div>
                    </div>
                    <div className="project-order-informaton">
                      <div className="project-order-content">
                        <span>Catagory:</span>
                        <h4>SG Logistics</h4>
                      </div>
                    </div>
                    <div className="project-order-box">
                      <div className="project-order-content inner">
                        <span>Complete:</span>
                        <h4>25 Octabar</h4>
                      </div>
                    </div>
                  </div>
                  <div className="project-details-title">
                    <h4>Perfect Cargo Solutions</h4>
                  </div>
                  <div className="porject-detials-discription">
                    <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="project-informaton-box">
                    <div className="project-information-title">
                      <h4>Project Information</h4>
                    </div>
                    <div className="project-information">
                      <h4>Category:</h4>
                      <span>SG Logistics</span>
                    </div>
                    <div className="project-information">
                      <h4>Customer:</h4>
                      <span>Cody Fisher</span>
                    </div>
                    <div className="project-information">
                      <h4>Start date:</h4>
                      <span>21 August 2024</span>
                    </div>
                    <div className="project-information">
                      <h4>End date:</h4>
                      <span>28 October 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title projects-de">
                  <h2>Pioneering Pathways in Delivery</h2>
                </div>
                <div className="section-discription project-inner">
                  <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling. Services typically include freight transportation, warehousing, distribution, and order fulfillment</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="project-details-list">
                <span><i className="bi bi-chevron-double-right"></i> Speedy Shipments, Smiling Faces</span>
                <span><i className="bi bi-chevron-double-right"></i> Delivering Promises, Not Just Packages</span>
                <span><i className="bi bi-chevron-double-right"></i> Navigate the Logistics Journey With Us Where Reliability </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="project-details-list">
                <span><i className="bi bi-chevron-double-right"></i> Speedy Shipments, Smiling Faces Logistically Speaking</span>
                <span><i className="bi bi-chevron-double-right"></i> Pioneering Pathways in Delivery Ship Smarter, Not Harder</span>
                <span><i className="bi bi-chevron-double-right"></i> Goods Guard Secure Logistics Express Ease Transport </span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="project-details-thumb">
                      <img src="assets/images/project/projectst-details2.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="faq-click-btn wow fadeInUp" data-wow-delay="0.4s">
                      <ul className="accordion">
                        {faq_data.map((item, i) => (
                          <li key={i}>
                            <a className={`${open === i ? "active" : ""}`} onClick={() => setOpen(i)}><span> 0{i + 1}. {item.question}</span></a>
                            <p style={open === i ? { display: "block" } : { display: "none" }}>{item.answer}</p>
                          </li>
                        ))} 
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-details-button">
              <div className="blog-details-btn">
                <a href="#"><i className="bi bi-arrow-left"></i> Previous</a>
              </div>
              <div className="blog-details-btn two">
                <a href="#">Next <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsDetailsArea;