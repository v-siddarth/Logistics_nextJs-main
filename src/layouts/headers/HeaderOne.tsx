"use client"
import Link from 'next/link';
import Offcanvas from '@/common/Offcanvas';
import useSticky from '@/hooks/use-sticky';
import React, { useState } from 'react';

const HeaderOne = () => {

	const { sticky } = useSticky()
	const [openSidebar, setOpenSidebar] = useState(false)
	return (
		<>
			<header className={`header-area ${sticky && "sticky-nav"}`} id="sticky-header">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-2">
							<div className="logo">
								<Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
							</div>
						</div>
						<div className="col-lg-10">
							<div className="header-menu">

								<ul>
									<li><a href="#">Home <i className="bi"></i></a>
										<div className="sub-menu">
											<ul>
												{/* <li><Link href="/">Home One</Link></li>
												<li><Link href="/home-2">Home Two</Link></li> */}
											</ul>
										</div>
									</li>
									<li><Link href="/about">About Us</Link></li>
									<li><a href="#">Services <i className="bi bi-chevron-down"></i></a>
										<div className="sub-menu">
											<ul>
												<li><Link href="/service">Service</Link></li>
												<li><Link href="/service-details">Service Details</Link></li>
											</ul>
										</div>
									</li>
									<li><a href="#">Projects <i className="bi bi-chevron-down"></i></a>
										<div className="sub-menu">
											<ul>
												<li><Link href="/projects-gallery">Project Gallery</Link></li>
												<li><Link href="/projects-details">Project Details</Link></li>
											</ul>
										</div>
									</li>
									<li><Link href="/contact">Blog <i className="bi bi-chevron-down"></i></Link>
										<div className="sub-menu">
											<ul>
												<li><Link href="/blog">Blog Standard</Link></li>
												<li><Link href="/blog-details">Blog Details</Link></li>
											</ul>
										</div>
									</li>
									<li><a href="#">Page <i className="bi bi-chevron-down"></i></a>
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
									</li>
									<li><Link href="/contact">Contact</Link></li>
								</ul>

								<div className="header-right">
									<div className="header-sidebar">
										<a className="navSidebar-button"
										style={{ cursor: "pointer" }}
										onClick={() => setOpenSidebar(!openSidebar)}
										><i className="fas fa-bars"></i></a>
									</div>
									<div className="packpro-btn">
										<a href="#">Get a quote <i className="bi bi-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<Offcanvas openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
		</>
	);
};

export default HeaderOne;