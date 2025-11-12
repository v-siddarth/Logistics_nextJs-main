"use client";
import faq_data from '@/data/faq-data';
import React, { useState } from 'react';



const FaqHomeOne = () => {
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

export default FaqHomeOne;