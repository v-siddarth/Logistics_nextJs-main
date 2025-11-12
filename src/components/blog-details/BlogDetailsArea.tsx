
import Link from 'next/link';
import React from 'react';

const BlogDetailsArea = () => {
  return (
    <>
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-items-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog-details1.png" alt="" />
                </div>
                <div className="blog-content details">
                  <div className="blog-meta details">
                    <span><i className="bi bi-calendar3"></i> October 19, 2022</span>
                    <span><i className="bi bi-person"></i> By admin</span>
                    <span><i className="bi bi-folder2-open"></i> Category</span>
                  </div>
                </div>
              </div>
              <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                <div className="section-main-title details">
                  <h2>Express Ease Transport</h2>
                </div>
                <div className="section-discription details">
                  <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling. Services typically include freight transportation, warehousing, distribution, and order fulfillment</p>
                </div>
              </div>
              <div className="blog-details-title">
                <h4>Pioneering Pathways in Delivery</h4>
              </div>
              <div className="blog-detials-discription">
                <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
              </div>
              <div className="blog-details-list">
                <span><i className="bi bi-chevron-double-right"></i> Speedy Shipments, Smiling Faces Logistically Speaking</span>
                <span><i className="bi bi-chevron-double-right"></i> Pioneering Pathways in Delivery Ship Smarter, Not Harder</span>
                <span><i className="bi bi-chevron-double-right"></i> Goods Guard Secure Logistics Express Ease Transport</span>
              </div>
              <div className="section-discription details">
                <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
              </div>
              <div className="blog-details-title">
                <h4>Opti Pack Logistics</h4>
              </div>
              <div className="blog-detials-discription">
                <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory handling</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="blog-details-thumb">
                    <img src="assets/images/blog/blog-details2.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="blog-details-thumb">
                    <img src="assets/images/blog/blog-details3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-12">
                  <div className="blog-details-tag">
                    <h6>Tags :</h6>
                    <Link href="/blog-details">Logistics</Link>
                    <Link href="/blog-details">Cargo Solutions</Link>
                    <Link href="/blog-details">ClearWay Logistics</Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="team-social blog">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-details-button">
                <div className="blog-details-btn">
                  <a href="#"><i className="bi bi-arrow-left"></i> Previous</a>
                </div>
                <div className="blog-details-btn two">
                  <a href="#">Next <i className="bi bi-arrow-right"></i></a>
                </div>
              </div>
              <div className="blog-details-comment">
                <h5>1 Comment</h5>
                <div className="blog-comment-box inner">
                  <div className="blog-comment-content">
                    <div className="content-main">
                      <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory
                      </p>
                    </div>
                    <div className="blog-commenst-bottom">
                      <div className="blog-title">
                        <h6>Dreabis Wind</h6>
                        <span>Cow Trainer</span>
                      </div>
                      <div className="text-sm-end">
                        <a className="replay-link" href="#">Replay</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-comment-box inner">
                  <div className="blog-comment-content">
                    <div className="content-main">
                      <p>Logistic services involve the movement, storage, and management of goods and materials. Providers ensure efficient supply chain operations, timely deliveries, and proper inventory
                      </p>
                    </div>
                    <div className="blog-commenst-bottom">
                      <div className="blog-title">
                        <h6>Chis Hawel</h6>
                        <span>Designer</span>
                      </div>
                      <div className="text-sm-end">
                        <a className="replay-link" href="#">Replay</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="widget_search box blog">
                <form action="#" method="get">
                  <input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
                  <button type="submit" className="icons">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="widget-recent-box blog">

                <div className="widget-recent-title blog">
                  <h4>Looking For The Next Shipment</h4>
                </div>
                <div className="sidber-widget-recent-post mb-30">
                  <div className="recent-widget-thumb">
                    <img src="assets/images/blog/recent1.png" alt="" />
                  </div>
                  <div className="recent-widget-content">
                    <div className="recent-widget-meta">
                      <span><i className="bi bi-calendar-event"></i>August 15, 2025</span>
                    </div>
                    <div className="recent-widget-title">
                      <h4><Link href="/blog-details">Fast & Reliable Cargo Services - Your Shipping Partner</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="sidber-widget-recent-post mb-30">
                  <div className="recent-widget-thumb">
                    <img src="assets/images/blog/recent2.png" alt="" />
                  </div>
                  <div className="recent-widget-content">
                    <div className="recent-widget-meta">
                      <span><i className="bi bi-calendar-event"></i>August 10, 2025</span>
                    </div>
                    <div className="recent-widget-title">
                      <h4><Link href="/blog-details">Express Logistics Solutions for Modern Business</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="sidber-widget-recent-post blog">
                  <div className="recent-widget-thumb">
                    <img src="assets/images/blog/recent3.png" alt="" />
                  </div>
                  <div className="recent-widget-content">
                    <div className="recent-widget-meta">
                      <span><i className="bi bi-calendar-event"></i>August 5, 2025</span>
                    </div>
                    <div className="recent-widget-title">
                      <h4><Link href="/blog-details">Seamless Supply Chain Management & Tracking</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-recent-box blog mt-60">

                <div className="widget-recent-title blog">
                  <h4> Service Details </h4>
                </div>

                <div className="widget-recent-menu">
                  <ul>
                    <li><Link href="/service"> <i className="bi bi-chevron-double-right"></i> Licensed CHA Customs Clearance <span>01</span></Link></li>
                    <li><Link href="/service-details"> <i className="bi bi-chevron-double-right"></i> Freight Forwarding Services <span>02</span></Link></li>
                    <li><Link href="/tracking"> <i className="bi bi-chevron-double-right"></i> Container Transportation <span>03</span></Link></li>
                    <li><Link href="/projects-gallery"> <i className="bi bi-chevron-double-right"></i> Last-Mile Delivery Solutions <span>04</span></Link></li>
                    <li><Link href="/contact"> <i className="bi bi-chevron-double-right"></i> Logistics Consultation <span>05</span></Link></li>
                  </ul>
                </div>
              </div>
              <div className="widget-recent-box blog mt-60">

                <div className="widget-recent-title blog">
                  <h4>Popular Tags</h4>
                </div>
                <div className="widget-tags">
								<li><Link href="/about">About Us</Link></li>
								<li><Link href="/service">Our Services</Link></li>
								<li><Link href="/projects-gallery">Project Gallery</Link></li>
								<li><Link href="/tracking">Package Tracking</Link></li>
								<li><Link href="/contact">Contact Us</Link></li>
                </div>
              </div>
              <div className="widget-contact-box mt-60">
                <div className="widget-contact-title">
                  <h4>Need Help? Call Us</h4>
                </div>
                <div className="widget-contact-icon">
                  <a href="#"><i className="bi bi-telephone-fill"></i></a>
                </div>
                <div className="widget-contact-content">
                  <a href="tel:+919876543210"> <h4>+91 98765 43210</h4></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;