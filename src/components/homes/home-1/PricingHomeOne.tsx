"use client";
import React, { useState } from 'react';

const PricingHomeOne = () => {

	const [isMonthly, setIsMonthly] = useState(true);

	const prices = isMonthly
		? { easy: "39", basic: "19", hard: "29" }
		: { easy: "390", basic: "190", hard: "290" };

	return (
		<>
			<div className="pricing-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="section-title wow fadeInUp" data-wow-delay="0.2s">
								<div className="section-main-title pricing">
									<h2>Our Pricing Plan</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">

							<div className="toggle-switch btn-group my-4" role="group">
								<button type="button" id="monthly-btn" className={`btn btn-toggle ${isMonthly && "active"}`} onClick={() => setIsMonthly(true)}>Monthly</button>
								<button type="button" id="yearly-btn" className={`btn btn-toggle ${!isMonthly && "active"}`} onClick={() => setIsMonthly(false)}>Yearly</button>
							</div>
						</div>
					</div>

					<div className="row">

						<div className="col-lg-4 col-md-6">
							<div className="pricing-box wow fadeInUp" data-wow-delay="0.6s">
								<div className="pricing-body">
									<div className="pricing-icon">
										<img src="assets/images/resource/pricing-icon1.png" alt="" />
									</div>
									<div className="pricing-title">
										<h5>Easy Plan</h5>
									</div>
									<div className="pricing-rate">
										<p className="price"><span id="easy-price">${prices.easy}</span>/mo</p>
									</div>
									<div className="pricing-list">
										<ul>
											<li><i className="bi bi-chevron-double-right"></i> Mistakes To Avoid</li>
											<li><i className="bi bi-chevron-double-right"></i> Your Startup</li>
											<li><i className="bi bi-chevron-double-right"></i> Know About Fonts</li>
											<li><i className="bi bi-chevron-double-right"></i> Winning Metric for Your Startup</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<button>Choose a Option <i className="bi bi-arrow-right"></i></button>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="pricing-box wow fadeInUp" data-wow-delay="0.8s">
								<div className="pricing-body">
									<div className="pricing-icon">
										<img src="assets/images/resource/pricing-icon2.png" alt="" />
									</div>
									<div className="pricing-title">
										<h5>Basic Plan</h5>
									</div>
									<div className="pricing-rate">
										<p className="price"><span id="basic-price">${prices.basic}</span>/mo</p>
									</div>
									<div className="pricing-list">
										<ul>
											<li><i className="bi bi-chevron-double-right"></i> Mistakes To Avoid</li>
											<li><i className="bi bi-chevron-double-right"></i> Your Startup</li>
											<li><i className="bi bi-chevron-double-right"></i> Know About Fonts</li>
											<li><i className="bi bi-chevron-double-right"></i> Winning Metric for Your Startup</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<button>Choose a Option <i className="bi bi-arrow-right"></i></button>
									</div>
								</div>
							</div>
						</div>


						<div className="col-lg-4 col-md-6">
							<div className="pricing-box wow fadeInUp" data-wow-delay="0.8s">
								<div className="pricing-body">
									<div className="pricing-icon">
										<img src="assets/images/resource/pricing-icon3.png" alt="" />
									</div>
									<div className="pricing-title">
										<h5>Hard Plan</h5>
									</div>
									<div className="pricing-rate">
										<p className="price"><span id="hard-price">${prices.hard}</span>/mo</p>
									</div>
									<div className="pricing-list">
										<ul>
											<li><i className="bi bi-chevron-double-right"></i> Mistakes To Avoid</li>
											<li><i className="bi bi-chevron-double-right"></i> Your Startup</li>
											<li><i className="bi bi-chevron-double-right"></i> Know About Fonts</li>
											<li><i className="bi bi-chevron-double-right"></i> Winning Metric for Your Startup</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<button>Choose a Option <i className="bi bi-arrow-right"></i></button>
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

export default PricingHomeOne;