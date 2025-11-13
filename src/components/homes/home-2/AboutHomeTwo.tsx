 "use client";

import Count from "@/common/count";


 const counter_data = [
  {
    value: 60,
    suffix: "+",
    title: "Team member",
    delay: "0.2s",
  },
  {
    value: 1,
    suffix: "K+",
    title: "Client Review",
    delay: "0.4s",
  },
  {
    value: 53,
    suffix: "+",
    title: "Winning award",
    delay: "0.6s",
  },
  {
    value: 3,
    suffix: "K+",
    title: "Complete Project",
    delay: "0.8s",
  },
];



const AboutHomeTwo = ({style_2} : any) => {
  return (
    <>
      <div className={`about-area style-two ${style_2 ? "inner-page" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title style-two">
                  <h2>We Make Logistics Smooth and Dependable</h2>
                </div>
                <div className="section-title-discription style-two">
                  <p>Company Overview · Customs Compliance Experience · Port & Depot Coverage · Mission & Values · Licenses & Certifications</p>
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
            <div className="col-lg-6 col-md-12">
              <div className="row">
                {counter_data.map((item,i) => (
                  <div key={i} className="col-xl-6 col-sm-6">
                  <div className="counter-single-box style-two wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="counter-numbar style-two">
                      <h4 className="counter">
                        <Count number={item.value} add_style={true} />
                      </h4>
                      <span>{item.suffix}</span>
                    </div>
                    <div className="counter-content style-two">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;