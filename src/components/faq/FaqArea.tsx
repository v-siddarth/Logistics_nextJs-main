"use client";
import React, { useState } from 'react';

const faq_data = [
  {
    question: "What safety measures do you have transportation?",
    answer: "Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain",
  },
  {
    question: "Are there options for students with specific mobility needs?",
    answer: "Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain",
  },
  {
    question: "How can parents track the location of the school buses?",
    answer: "Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain",
  },
  {
    question: "How can parents track the location of the school buses?",
    answer: "Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain",
  },
]

const FaqArea = () => {
      const [open, setOpen] = useState(0);
  
  return (
    <>
      <div className="faq-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title faq">
                  <h2>Why Choose Us?</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 col-md-12">
              <div className="faq-click-btn wow fadeInUp" data-wow-delay="0.4s">
                <ul className="accordion">
                {faq_data.map((item, i) => (
                  <li key={i}>
                    <a className={`${open === i ? "active" : ""}`} onClick={() => setOpen(i)}><span> 0{i +1}. {item.question}</span></a>
                    <p style={open === i ? { display: "block" } : { display: "none" }}>{item.answer}</p>
                  </li> 
                  ))}  
                </ul>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;