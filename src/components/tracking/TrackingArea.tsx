"use client";
import React from 'react';

const TrackingArea = () => {
  return (
    <>
      <div className="tracking-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="widget_search box">
                <div className="widget-title-tracking-title">
                  <h4>Tracking Delivery</h4>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
                  <button type="submit" className="icons">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="widget_order box">
                <div className="widget-order-top">
                  <div className="widget-order-title">
                    <h4>Order Id:#kLKJHYUJ25KL</h4>
                  </div>
                  <div className="packpro-btn widget">
                    <a href="#">In Process</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="widget-order">
                      <span>22-9-2024</span>
                      <span>Check In 12.05Pm</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="widget-order">
                      <span>23-9-2024</span>
                      <span>In Process</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="widget-order">
                      <span>24-9-2024</span>
                      <span>Shift</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="widget-order">
                      <span>25-9-2024</span>
                      <span>Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-information">
                <div className="widget-information-box">
                  <div className="widget-information-content">
                    <div className="project-order-content">
                      <h4>Location</h4>
                      <span>Dhaka, 45 house of street</span>
                    </div>
                  </div>
                  <div className="project-order-content">
                    <h4>Clients</h4>
                    <span>Cody Fisher</span>
                  </div>
                </div>
                <div className="widget-information-box">
                  <div className="widget-information-content">
                    <div className="project-order-content">
                      <h4>Website</h4>
                      <span>www.transportion.com</span>
                    </div>
                  </div>
                  <div className="project-order-content">
                    <h4>Date</h4>
                    <span>10 June 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="tracking-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496149.95373021!2d85.84621250756469!3d23.452185887261447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1635150422284!5m2!1sen!2sbd" width="521" height="887" style={{ border: "0" }} allowFullScreen={true} loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingArea;