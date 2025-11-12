
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-items-box style-two blog-inner wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-thumb style-two">
                  <img src="assets/images/blog/blog7.png" alt="" />
                </div>
                <div className="blog-content style-two blog">
                  <div className="blog-meta style-two">
                    <span><i className="bi bi-wechat"></i> Comments (05)</span>
                    <span><i className="bi bi-calendar3"></i> October 19, 2024</span>
                  </div>
                  <div className="blog-title style-two blog">
                    <h4><Link href="/blog-details">Navigate the Logistics Journey With Us</Link></h4>
                  </div>
                  <div className="packpro-btn blog">
                    <Link href="/blog-details">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="blog-items-box style-two blog-inner wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-thumb style-two">
                  <img src="assets/images/blog/blog8.png" alt="" />
                </div>
                <div className="blog-content style-two blog">
                  <div className="blog-meta style-two">
                    <span><i className="bi bi-wechat"></i> Comments (05)</span>
                    <span><i className="bi bi-calendar3"></i> October 19, 2024</span>
                  </div>
                  <div className="blog-title style-two blog">
                    <h4><Link href="/blog-details">Your Partner in Logistics
                      Delivering Promises</Link></h4>
                  </div>
                  <div className="packpro-btn blog">
                    <Link href="/blog-details">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="blog-items-box style-two blog-inner wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-thumb style-two">
                  <img src="assets/images/blog/blog9.png" alt="" />
                </div>
                <div className="blog-content style-two blog">
                  <div className="blog-meta style-two">
                    <span><i className="bi bi-wechat"></i> Comments (05)</span>
                    <span><i className="bi bi-calendar3"></i> October 19, 2024</span>
                  </div>
                  <div className="blog-title style-two blog">
                    <h4><Link href="/blog-details">Pioneering Pathways in Delivery Ship</Link></h4>
                  </div>
                  <div className="packpro-btn blog">
                    <Link href="/blog-details">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              <div className="as-pagination">
                <ul>
                  <li><Link href="/Blog-details">1</Link></li>
                  <li><Link href="/Blog-details">2</Link></li>
                  <li><Link href="/Blog-details">3</Link></li>
                  <li><Link href="/Blog-details"><i className="bi bi-arrow-right-short"></i></Link></li>
                </ul>
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
                  <h4> Latest Post </h4>
                </div>
                <div className="sidber-widget-recent-post mb-30">
                  <div className="recent-widget-thumb">
                    <img src="assets/images/blog/recent1.png" alt="" />
                  </div>
                  <div className="recent-widget-content">
                    <div className="recent-widget-meta">
                      <span><i className="bi bi-calendar-event"></i>October 29, 2024</span>
                    </div>
                    <div className="recent-widget-title">
                      <h4><Link href="/blog-details"> Logistically Speaking, We Deliver From A to B Seamless Logistics</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="sidber-widget-recent-post mb-30">
                  <div className="recent-widget-thumb">
                    <img src="assets/images/blog/recent2.png" alt="" />
                  </div>
                  <div className="recent-widget-content">
                    <div className="recent-widget-meta">
                      <span><i className="bi bi-calendar-event"></i> July 24, 2024</span>
                    </div>
                    <div className="recent-widget-title">
                      <h4><Link href="/blog-details">Pioneering Pathways in Delivery Ship Smarter Not Harder</Link></h4>
                    </div>
                  </div>
                </div>
                <div className="sidber-widget-recent-post blog">
                  <div className="recent-widget-thumb">
                    <img src="assets/images/blog/recent3.png" alt="" />
                  </div>
                  <div className="recent-widget-content">
                    <div className="recent-widget-meta">
                      <span><i className="bi bi-calendar-event"></i>July 24, 2024</span>
                    </div>
                    <div className="recent-widget-title">
                      <h4><Link href="/blog-details">Your Partner in Logistics Excellence
                        Delivering Promises</Link></h4>
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
                    <li><Link href="/blog-details"> <i className="bi bi-chevron-double-right"></i> Swift Flow Logistics <span>01</span></Link></li>
                    <li><Link href="/blog-details"> <i className="bi bi-chevron-double-right"></i> Perfect Cargo Solutions <span>02</span></Link></li>
                    <li><Link href="/blog-details"> <i className="bi bi-chevron-double-right"></i> Mega Mover Logistics <span>03</span></Link></li>
                    <li><Link href="/blog-details"> <i className="bi bi-chevron-double-right"></i> Track Transit Services <span>04</span></Link></li>
                    <li className="line"><Link href="/blog-details"> <i className="bi bi-chevron-double-right"></i> Opti Pack Logistics <span>05</span></Link></li>
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
                  <a href="tel:+919876543210"><h4>+91 98765 43210</h4></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;