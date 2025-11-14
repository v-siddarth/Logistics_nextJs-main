"use client"; 

const HeroHomeTwo = () => {
  return (
    <>
      <section className="banner-section style-two d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-12">
              <div className="slider-content style-two">

                {/* MAIN HEADING */}
                <div className="slider-main-title style-two">
                  <h1 className="menu">
                    Logistic services involve the <span>movement storage goods</span>
                  </h1>
                </div>

                {/*ADDED 3 TEXTS HERE*/}
                <div className="d-flex flex-wrap gap-4 mt-3 mb-3">
                  <span className="fw-bold fs-5 text-dark">CUSTOMS CLEARANCE</span>
                  <span className="fw-bold fs-5 text-dark">FREIGHT FORWARDER</span>
                  <span className="fw-bold fs-5 text-dark">TRANSPORTATION</span>
                </div>

                {/* DESCRIPTION */}
                <div className="slider-discription">
                  <p>
                    Logistic services involve the movement, storage, and management of goods 
                    and materials. Providers ensure efficient supply chain.
                  </p>
                </div>

                {/* LEFT IMAGE */}
                <div className="contact-box style-two wow fadeInUp" data-wow-delay="0.2s">
                  <div className="row">
                    <div className="col-lg-12">
                      <img 
                        src="assets/images/hero/hero-left.jpg" 
                        alt="" 
                        style={{ width: "300px", height: "auto" }} 
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 col-md-12">
              <div className="hero-main-img style-two">
                <div className="hero-img style-two ms-5">
                  <img src="assets/images/hero/hero-2.png" alt="" />
                  <div className="hero-shape-one style-two">
                    <img
                      src="assets/images/hero/hero-shape3.png"
                      alt=""
                      style={{ width: "250px", height: "auto" }}
                    />
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
