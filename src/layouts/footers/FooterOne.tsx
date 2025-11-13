
import Link from 'next/link';
import React from 'react';

const FooterTwo = () => {
  return (
    <>
      <div className="footer-area style-two">
		<div className="container">
			<div className="row mb-5">
				<div className="col-12">
					<div className="footer-main-title text-left">
						<h1 className="text-white">Looking For The Next Shipment</h1>
					</div>
				</div>
			</div>
			<div className="row align-items-center">
				<header className="header-area style-three" id="sticky-header">
					<div className="row header3 align-items-center">
						<div className="col-lg-2">
							<div className="logo">
								<Link href="/"><img src="assets/images/header-logo3.png" alt="" /></Link>
							</div>
						</div>
						<div className="col-lg-10">
							<div className="header-menu style-three"> 


								<ul>
                  <li><a href="/">Home</a>
                  </li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><a href="/service-details">Services</a>
                  </li>
                  {/* <li><a href="#">Projects <i className="bi bi-chevron-down"></i></a>
                    <div className="sub-menu">
                      <ul>
                        <li><Link href="/projects-gallery">Project Gallery</Link></li>
                        <li><Link href="/projects-details">Project Details</Link></li>
                      </ul>
                    </div>
                  </li> */}
                  <li><Link href="/blog">Blog </Link>
                    {/* <div className="sub-menu">
                      <ul>
                        <li><Link href="/blog">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                      </ul>
                    </div> */}
                  </li>
                  {/* <li><a href="#">Page <i className="bi bi-chevron-down"></i></a>
                    <div className="sub-menu">
                      <ul>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/service">Service</Link></li>
                        <li><Link href="/projects-gallery">Project</Link></li>
                        <li><Link href="/tracking">Tracking</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                      </ul>
                    </div>
                  </li> */}
                  <li><Link href="/contact">Contact</Link></li>
                </ul>

							</div>
						</div>
					</div>
				</header>
			
	 
				<div className="mobile-menu-area sticky-menu" id="navbar">
					<div className="mobile-menu">
						<div className="mobile-logo">
							<Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
						</div>
						<div className="side-menu-info">
							<div className="sidebar-menu">
								<a className="navSidebar-button" href="#"><i className="bi bi-justify-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="footer-wiget">
						<div className="footer-wiget-title">
							<h4>Services</h4>
						</div>
						<div className="footer-wiget-menu">
							<ul>
								<li><Link href="/about">About Us</Link></li>
								<li><Link href="/service">Our Services</Link></li>
								<li><Link href="/projects-gallery">Project Gallery</Link></li>
								<li><Link href="/tracking">Package Tracking</Link></li>
								<li><Link href="/contact">Contact Us</Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="footer-wiget">
						<div className="footer-wiget-title">
							{/* <h4>Looking For The Next Shipment</h4> */}
						</div>
						{/* <div className="footer-wiget-content">
							<p>Ready to ship your next package? Our logistics experts are here to help you with fast, reliable, and secure shipping solutions.</p>
							<div className="footer-cta">
								<Link href="/contact" className="theme-btn">
									Get Quote Now <i className="bi bi-arrow-right"></i>
								</Link>
							</div>
						</div> */}
						<div className="footer-social">
							{/* <ul>
								<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a href="#"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
							</ul> */}
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 pr-0">
					<div className="footer-wiget">
						<div className="footer-wiget-title">
							<h4>Contact</h4>
						</div>
						<div className="footer-wiget-contact">
							<ul>
								<li>
								   <div className="contact-items">
									<div className="contact-icon">
										<i className="bi bi-geo-alt-fill"></i>
									</div>
									<div className="contact-content">
										<h4>Address</h4>
										<h6>Navi Mumbai, Mahrashtra</h6>
									</div>
								</div>
							   </li>
								<li>
									<div className="contact-items">
										<div className="contact-icon">
											 <i className="bi bi-telephone-fill"></i>
										</div>
										<div className="contact-content">
											  <h4>Phone Number</h4>
												<a 
													href="tel:+919876543210" 
													style={{
														color: 'inherit',
														textDecoration: 'none',
														cursor: 'pointer'
													}}
												>
																										<h6>+91 98765 43210</h6>
												</a>

									   </div>
									  </div>
								</li>
								<li>
									<div className="contact-items">
										<div className="contact-icon">
											<i className="bi bi-envelope-fill"></i>
										</div>
										<div className="contact-content">
											<h4>Email</h4>
												<a 
													href="mailto:docs@sglogsitics.net.in" 
													style={{
														color: 'inherit',
														textDecoration: 'none',
														cursor: 'pointer'
													}}
												>
													<h6>docs@sglogsitics.net.in</h6>
												</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row line mt-90">
				<div className="col-lg-6 col-md-12">
					<div className="copyright-text">
						<p>© SG Logistics {new Date().getFullYear()} | All Rights Reserved</p>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="footer-condition">
						<ul>
							<li><a href="#">Terms & Condition</a></li>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  );
};

export default FooterTwo;