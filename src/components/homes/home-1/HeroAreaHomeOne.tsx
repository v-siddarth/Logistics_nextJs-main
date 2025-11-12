"use client"
import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import { useState } from "react";

const HeroAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="banner-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="slider-content">
                <div className="hero-social-icon animated fadeInLeft" data-wow-delay="0.2s">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                  </ul>
                </div>
                <div className="slider-main-title">
                  <h1 className="menu">LOGISTIC SERVICES <br /><span>INVOLVE THE</span><br />MOVEMENT</h1>
                </div>
                <div className="slider-discription">
                  <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain. </p>
                </div>
                <div className="slider-bottom">
                  <div className="video-icon">
                    <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                    ><i className="bi bi-play-fill"></i></a>
                  </div>
                  <div className="packpro-btn slider1">
                    <Link href="/service-details">Watch Video</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="hero-main-img">
                <div className="hero-img">
                  <img src="assets/images/hero/hero-img.png" alt="" />
                </div>
                <div className="hero-shape-one">
                  <img src="assets/images/hero/hero-shape1.png" alt="" />
                </div>
                <div className="hero-shape-two">
                  <img src="assets/images/hero/hero-shape2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeOne;