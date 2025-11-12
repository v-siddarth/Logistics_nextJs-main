"use client"
import Link from 'next/link'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  dots: false,
  centerMode: false,
  arrows: false, 
  slidesToShow: 4,
  slidesToScroll: 1,   
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        centerMode: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        centerMode: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 2
      }
    }
  ]
}


const ProjectHomeTwo = () => {
  return (
    <>
      <div className="project-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title project">
                  <h2>Logistics for development</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row">

            <Slider {...settings} className="project_list2 owl-carousel">
              <div className="col-lg-12 col-md-12 mix ios mar des">
                <div className="portfolio-single-box" data-wow-delay="0.2s" data-wow-duration="1s">
                  <div className="portfolio-thumb">
                    <img src="assets/images/project/project1.png" alt="" />
                    <div className="portfolio-icon">
                      <a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/project/project1.png"></a>
                    </div>
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12  mix and app ios">
                <div className="portfolio-single-box" data-wow-delay="0.4s" data-wow-duration="1s">
                  <div className="portfolio-thumb">
                    <img src="assets/images/project/project2.png" alt="" />
                    <div className="portfolio-icon">
                      <a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/project/project2.png"></a>
                    </div>
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12  mix and mar app">
                <div className="portfolio-single-box" data-wow-delay="0.6s" data-wow-duration="1s">
                  <div className="portfolio-thumb">
                    <img src="assets/images/project/project3.png" alt="" />
                    <div className="portfolio-icon">
                      <a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/project/project3.png"></a>
                    </div>
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12  app and ios app">
                <div className="portfolio-single-box" data-wow-delay="0.6s" data-wow-duration="1s">
                  <div className="portfolio-thumb">
                    <img src="assets/images/project/project4.png" alt="" />
                    <div className="portfolio-icon">
                      <a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/project/project4.png"></a>
                    </div>
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12  mix and mar app">
                <div className="portfolio-single-box" data-wow-delay="0.6s" data-wow-duration="1s">
                  <div className="portfolio-thumb">
                    <img src="assets/images/project/project5.png" alt="" />
                    <div className="portfolio-icon">
                      <a className="portfolio-icon venobox vbox-item" data-gall="myportfolio" href="assets/images/project/project5.png"></a>
                    </div>
                  </div>
                  <div className="protfolio-content">
                    <p>SwiftFlow Logistics</p>
                    <h4><Link href="/projects-details">Ship Smarter Not Harder</Link></h4>
                  </div>
                </div>
              </div>
            </Slider>


          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHomeTwo;