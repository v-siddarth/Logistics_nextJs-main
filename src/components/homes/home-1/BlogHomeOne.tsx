
import Link from 'next/link';
import React from 'react';

const BlogHomeOne = () => {
  return (
    <>
      <div className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title">
                  <h2>Updates From Our Blog</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-box blog-inner wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog1.png" alt="" />
                </div>
                <div className="blog-content blog-con">
                  <div className="blog-meta">
                    <span><i className="bi bi-wechat"></i> Comments (05)</span>
                    <span><i className="bi bi-calendar3"></i> October 19, 2022</span>
                  </div>
                  <div className="blog-title">
                    <h4><Link href="/blog-details">Rapid Deliveries, Happy Customers</Link></h4>
                  </div>
                  <div className="blog-discription">
                    <p>Logistic services involve the movement the storage, and management</p>
                  </div>
                  <div className="blog-btn blog-bt">
                    <a href="#">More Details <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-box blog-inner wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog2.png" alt="" />
                </div>
                <div className="blog-content blog-con">
                  <div className="blog-meta">
                    <span><i className="bi bi-wechat"></i> Comments (05)</span>
                    <span><i className="bi bi-calendar3"></i> October 19, 2022</span>
                  </div>
                  <div className="blog-title">
                    <h4><Link href="/blog-details">smiling Speaking & Deliver Logistics </Link></h4>
                  </div>
                  <div className="blog-discription">
                    <p>Logistic services involve the movement the storage, and management</p>
                  </div>
                  <div className="blog-btn blog-bt">
                    <a href="#">More Details <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-box blog-inner wow fadeInUp" data-wow-delay="0.8s">
                <div className="blog-thumb">
                  <img src="assets/images/blog/blog3.png" alt="" />
                </div>
                <div className="blog-content blog-con">
                  <div className="blog-meta">
                    <span><i className="bi bi-wechat"></i> Comments (05)</span>
                    <span><i className="bi bi-calendar3"></i> October 19, 2022</span>
                  </div>
                  <div className="blog-title">
                    <h4><Link href="/blog-details">Ship Smarter Not Harder Partner</Link></h4>
                  </div>
                  <div className="blog-discription">
                    <p>Logistic services involve the movement the storage, and management</p>
                  </div>
                  <div className="blog-btn blog-bt">
                    <a href="#">More Details <i className="bi bi-arrow-right"></i></a>
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

export default BlogHomeOne;