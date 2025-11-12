"use client";
import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // prevArrow: "<i className='bi bi-arrow-left''></i>",
  // nextArrow: "<i className='bi bi-arrow-right''></i>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};


const PortfolioHomeOne = () => {
  return (
    <>
      <div className="protfolio-area">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title">
                  <h2>photographs showcase</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Slider {...settings} className="project_list owl-carousel">
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p1.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p2.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p3.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p1.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p2.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p3.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p1.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p2.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p3.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p1.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p2.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="protfolio-box wow fadeInUp" data-wow-delay="0.6s">
                  <div className="protfolio-thumb">
                    <img src="assets/images/project/p3.png" alt="" />
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioHomeOne;