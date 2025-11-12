"use client";
import Count from "@/common/count";
import { useState } from "react";

const faq_data = [
  {
    question: "What industries do you specialize in?",
    answer: "We offer specialized customs and logistics solutions for diverse industries—pharma shipments with cold-chain and import license support, electronics requiring CES RC and EMC safety certification, engineering goods with heavy cargo and project logistics expertise, apparel and textiles managed through precise HS codes and quota controls, and chemicals handled with odourless, non-hazardous documentation support.",
  },
  {
    question: "Which major ports and logistics hubs do you cover?",
    answer:"Our extensive network covers all major Indian ports, including Nhava Sheva (JNPT), Mundra, Hazira, Chennai, and Kolkata, ensuring seamless logistics and reliable customs clearance across the country.",
  },
  {
    question: "Do you offer tailored solutions for individual clients?",
    answer: "We tailor our solutions to fit your unique logistics needs. Every client is assigned a dedicated support team that manages documentation, provides proactive updates, and offers direct access to experts at every stage",
  },
]

const FaqHomeTwo = ({style_2} : any) => {
    const [open, setOpen] = useState(0);
  
  return (
    <>
      <div className={`faq-area style-two ${style_2 ? "inner-page" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                <div className={`section-main-title ${style_2 ? "section-main-title" : "faq inner"}`}>
                  {style_2 ? 
                  <h2>Ask Some Question</h2>
                  :
                  <h2>Quick Answers</h2>
                  
                }
                </div>
                <div className="section-discription style-two">
                  <p>Have questions about our services? Explore our FAQ section for clear answers on our logistics capabilities, industry specialization, major port coverage, and how we customize solutions for your unique needs. We’re committed to providing transparency and support at every step of your logistics journey.</p>
                </div>
              </div>
              <div className="about-single-counter style-two wow fadeInUp" data-wow-delay="0.4s">
                <div className="about-counter style-two">
                  <div className="about-icon">
                    <img src="assets/images/about/about-icon2.png" alt="" />
                  </div>
                  <div className="about-content style-two">
                    <div className="about-number">
                      <h4 className="counter">
                        <Count number={4000} />
                      </h4>
                      <span>+</span>
                    </div>
                    <div className="about-text style-two">
                      <p>Satisfied Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-click-btn wow fadeInUp" data-wow-delay="0.4s">
                <ul className="accordion style-two">
                   
                  {faq_data.map((item, i) => (
                  <li key={i}>
                    <a className={`${open === i ? "active" : ""}`} onClick={() => setOpen(i)}><span> 0{i +1}. {item.question}</span></a>
                    <p style={open === i ? { display: "block" } : { display: "none" }}>{item.answer}</p>
                  </li> 
                  ))} 
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHomeTwo;