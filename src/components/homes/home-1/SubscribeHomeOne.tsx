"use client";
import React from 'react';

const SubscribeHomeOne = () => {
  return (
    <>
      <div className="subscribe-area">
        <div className="container">
          <div className="row subscribe align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title subscribe">
                  <h2>Subscribe for any  information</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-10 col-md-12">
                      <div className="subscribe-box wow fadeInUp" data-wow-delay="0.4s">
                        <input type="text" name="Email" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-12">
                      <div className="subscribe-button wow fadeInUp" data-wow-delay="0.6s">
                        <button>Subscribe <i className="bi bi-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeHomeOne;