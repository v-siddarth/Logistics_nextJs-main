
"use client";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';


const TestimonialHomeTwo = () => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <>
      <div className="testimonial-area two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="testimonial-thumb">
                <img src="assets/images/testimonial/testi-img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="testimonial-slide">
                <Slider ref={sliderRef} className="testi_list owl-carousel">
                  <div className="col-lg-12">
                    <div className="testi-single">
                      <div className="testimonial-single-box style-two">
                        <div className="testi-rating style-two">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          {/* <i className="bi bi-star-fill"></i> */}
                        </div>
                        <div className="testi-icon style-two">
                          <img src="assets/images/testimonial/testi-icon2.png" alt="" />
                        </div>
                        <div className="testi-content style-two">
                          <p>From customs clearance to last-mile delivery, SG Logistics took care of everything for our textile exports. Their team is responsive, transparent, and truly customer-focused. </p>
                        </div>
                        <div className="testi-bottom style-two">
                          <div className="testi-details">
                            <div className="testi-name">
                              <h4>Ritu Sharma</h4>
                              <span>Export Manager, Arya Textiles India</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="testi-single">
                      <div className="testimonial-single-box style-two">
                        <div className="testi-rating style-two">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <div className="testi-icon style-two">
                          <img src="assets/images/testimonial/testi-icon2.png" alt="" />
                        </div>
                        <div className="testi-content style-two">
                          <p>We needed a logistics provider who understood the complexities of engineering cargo. SG Logistics handled our heavy equipment with professionalism and efficiency. </p>
                        </div>
                        <div className="testi-bottom style-two">
                          <div className="testi-details style-two">
                            <div className="testi-name">
                              <h4>Anil Deshmukh</h4>
                              <span>Logistics Head, Triveni Engineering Works</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>

                <div className="owl-nav">
                  <div className="owl-prev"
                  onClick={() => sliderRef.current?.slickPrev()}
                  style={{cursor: 'pointer'}}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </div>
                  <div className="owl-next"
                  onClick={() => sliderRef.current?.slickNext()}
                  style={{cursor: 'pointer'}}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeTwo;