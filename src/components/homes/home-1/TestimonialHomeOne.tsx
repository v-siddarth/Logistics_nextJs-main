"use client";
import React, { useRef } from 'react';
import Slider from 'react-slick';


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  dots: false,
  arrows: true, 
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialHomeOne = () => {

  const sliderRef = useRef<Slider | null>(null);


  return (
    <>
      <div className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title">
                  <h2>Clients Testimonial</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row testimonial">
            <Slider {...settings} ref={sliderRef} className="testi_list owl-carousel">
              <div className="col-lg-12">
                <div className="testimonial-single-box">
                  <div className="testi-content">
                    <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling. Services typically include freight transportation, warehousing, distribution, and order fulfillment to meet diverse business needs</p>
                  </div>
                  <div className="testi-bottom">
                    <div className="testi-details">
                      <div className="testi-thumb">
                        <img src="assets/images/testimonial/testi-thumb.png" alt="" />
                      </div>
                      <div className="testi-name">
                        <h4>Ronald Richards</h4>
                        <span>Web Designer</span>
                      </div>
                    </div>
                    <div className="testi-icon">
                      <img src="assets/images/testimonial/testi-icon.png" alt="" />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-single-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="testi-content">
                    <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling. Services typically include freight transportation, warehousing, distribution, and order fulfillment to meet diverse business needs</p>
                  </div>
                  <div className="testi-bottom">
                    <div className="testi-details">
                      <div className="testi-thumb">
                        <img src="assets/images/testimonial/testi-thumb.png" alt="" />
                      </div>
                      <div className="testi-name">
                        <h4>Ronald Richards</h4>
                        <span>Web Designer</span>
                      </div>
                    </div>
                    <div className="testi-icon">
                      <img src="assets/images/testimonial/testi-icon.png" alt="" />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="owl-nav">
              <div
                className="owl-prev"
                onClick={() => sliderRef.current?.slickPrev()}
                style={{cursor: 'pointer'}}
              >
                <i className="fas fa-chevron-left"></i>
              </div>
              <div
                className="owl-next"
                onClick={() => sliderRef.current?.slickNext()}
                style={{cursor: 'pointer'}}
              >
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeOne;