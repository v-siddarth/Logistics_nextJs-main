"use client"; 

const HeroHomeTwo = () => {
  return (
    <>
      <section className="banner-section style-two d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="slider-content style-two">
                <div className="slider-main-title style-two">
                  <h1 className="menu">Logistic services involve the <span>movement storage goods</span></h1>
                </div>
                <div className="slider-discription">
                   <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain. </p>                 </div>
                <div className="contact-box style-two  wow fadeInUp" data-wow-delay="0.2s">
                  <div className="row">
                    <div className="col-lg-12 ">
                       <img src="assets/images/hero/hero-left.jpg" alt="" style={{ width: "300px", height: "auto" }}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hero-main-img style-two">
                <div className="hero-img style-two ms-5">
                  <img src="assets/images/hero/hero-2.png" alt="" />
                  <div className="hero-shape-one style-two">
                    <img src="assets/images/hero/hero-shape3.png" alt="" style={{ width: "250px", height: "auto" }}/>
                  </div>
                </div>
                <div className="hero-brand">
                  <div className="brand-img">
                    <img src="assets/images/hero/brand1.png" alt="" style={{ width: "200px", height: "auto" }}/>
                  </div>
                  <div className="brand-img">
                    <img src="assets/images/hero/brand2.png" alt="" style={{ width: "200px", height: "auto" }}/>
                  </div>
                  <div className="brand-img">
                    <img src="assets/images/hero/brand3.png" alt="" style={{ width: "200px", height: "auto" }}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeTwo;