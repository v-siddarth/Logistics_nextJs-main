
import Link from 'next/link';
import React from 'react';

const BlogHomeTwo = () => {
  return (
    <>
      <div className="blog-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title">
                  <h2>Our Recent Updates</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-box style-two blog-inner  wow fadeInUp" data-wow-delay="0.4s">
                <div className="blog-thumb style-two">
                  <img src="assets/images/blog/blog4.png" alt="" />
                </div>
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span><i className="bi bi-wechat"></i> Comments (02)</span>
                    <span><i className="bi bi-calendar3"></i> August 10, 2025</span>
                  </div>
                  <div className="blog-title style-two">
                    <h4><Link href="/blog-details">Rapid Deliveries, Happy Customers</Link></h4>
                  </div>
                  <div className="blog-discription style-two">
                    <p>Timely Solutions, Satisfied Clients  
Our efficient logistics network ensures your goods arrive when you need them, keeping your business moving and customers happy. </p>
                  </div>
                  <div className="packpro-btn blog">
                    <Link href="/blog-details">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-box style-two wow fadeInUp" data-wow-delay="0.6s">
                <div className="blog-thumb style-two">
                  <img src="assets/images/blog/blog5.png" alt="" />
                </div>
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span><i className="bi bi-wechat"></i> Comments (04)</span>
                    <span><i className="bi bi-calendar3"></i> July 25, 2025 </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4><Link href="/blog-details">Swift Logistics, Trusted Smiles</Link></h4>
                  </div>
                  <div className="blog-discription style-two">
                    <p>Seamless Transport, Reliable Service  
From pick-up to delivery, our team manages every step with precision, so you can focus on growing your business.</p>
                  </div>
                  <div className="packpro-btn blog">
                    <Link href="/blog-details">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-items-box blog-inner style-two wow fadeInUp" data-wow-delay="0.8s">
                <div className="blog-thumb style-two">
                  <img src="assets/images/blog/blog6.png" alt="" />
                </div>
                <div className="blog-content style-two">
                  <div className="blog-meta style-two">
                    <span><i className="bi bi-wechat"></i> Comments (03)</span>
                    <span><i className="bi bi-calendar3"></i> June 14, 2025 </span>
                  </div>
                  <div className="blog-title style-two">
                    <h4><Link href="/blog-details">Express Service, Joyful Recipients</Link></h4>
                  </div>
                  <div className="blog-discription style-two">
                    <p>Effortless Shipping, Delighted Partners  
We combine technology and expertise to make logistics simple, delivering peace of mind with every consignment. </p>
                  </div>
                  <div className="packpro-btn blog">
                    <Link href="/blog-details">Read More <i className="bi bi-arrow-right"></i></Link>
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

export default BlogHomeTwo;