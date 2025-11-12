
"use client";
import VideoPopup from '@/modals/video-popup';
import Link from 'next/link';
import React, { useState } from 'react';

const AboutHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb wow fadeInUp" data-wow-delay="0.2s">
                <img src="assets/images/about/about1.png" alt="" />
                <div className="about-video">
                  <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  ><i className="bi bi-play-fill"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-single-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="about-content">
                  <h2>Delivering Promises Just Packages</h2>
                  <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply</p>
                  <div className="packpro-btn about">
                    <Link href="/about">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="about-single-counter wow fadeInUp" data-wow-delay="0.6s">
                <div className="about-counter">
                  <div className="about-icon">
                    <img src="assets/images/about/about-icon.png" alt="" />
                  </div>
                  <div className="about-content">
                    <div className="about-number">
                      <h4 className="counter">15</h4>
                      <span>+</span>
                      <h4>Years</h4>
                    </div>
                    <div className="about-text">
                      <p>of experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default AboutHomeOne;