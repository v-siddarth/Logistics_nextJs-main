
import Link from 'next/link';
import React from 'react';

const ServiceAreaHomeTwo = () => {
	return (
		<>
			<div className="service-area style-three">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="section-title wow fadeInUp" data-wow-delay="0.2s">
								<div className="section-main-title style-three">
									<h2>Why Choose Us?</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="section-discription">
								<p>Our comprehensive logistics services provide reliable transportation, secure storage, and expert management of goods, helping businesses streamline their supply chains and achieve faster, more cost-effective deliveries.</p>
							</div>
						</div>
					</div>
					<div className="row service3">
						<div className="col-lg-12">
							<div className="sercice-shape">
								<img src="assets/images/service/service-shape.png" alt="" />
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="service-box style-three inner wow fadeInUp" data-wow-delay="0.4s">
								<div className="service-top style-three">
									<div className="service-icon style-three">
										<img src="assets/images/service/service-icon7.png" alt="" />
									</div>
								</div>
								<div className="service-content style-three ">
									<h2><Link href="/service-details">Core Service Strengths</Link></h2>
									<p>High Volume Capacity · 24/7 Client Support · In‑House Documentation Team · Strong Customs & Port Relationships · Transparent Pricing & Speed </p>
								</div>
								<div className="service-number style-three">
									<h4>01</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="service-box style-three inner2 wow fadeInUp" data-wow-delay="0.6s">
								<div className="service-top style-three">
									<div className="service-icon style-three">
										<img src="assets/images/service/service-icon8.png" alt="" />
									</div>
								</div>
								<div className="service-content style-three py-3">
									<h2><Link href="/service-details">Operational Capabilities</Link></h2>
									<p>Annual Clearance Volume · Dedicated Support Team · Documentation Control · Network Strength · Turnaround Times</p>
								</div>
								<div className="service-number style-three">
									<h4>02</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="service-box style-three wow fadeInUp" data-wow-delay="0.8s">
								<div className="service-top style-three">
									<div className="service-icon style-three">
										<img src="assets/images/service/service-icon9.png" alt="" />
									</div>
								</div>
								<div className="service-content style-three py-4">
									<h2><Link href="/service-details">Trust & Transparency</Link></h2>
									<p>Client testimonials; Pricing model summary; Example response time </p>
								</div>
								<div className="service-number style-three">
									<h4>03</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceAreaHomeTwo;