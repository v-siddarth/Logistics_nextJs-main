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
									<li><a href="/">Home <i className="bi"></i></a>
									</li>
									<li><Link href="/about">About Us</Link></li>
									<li><Link href="/service">Services</Link>
									</li>
									<li><Link href="/contact">Contact</Link></li>
								</ul>

								<div className="header-right">
									{/* <div className="header-sidebar">
										<a className="navSidebar-button"
										style={{ cursor: "pointer" }}
										onClick={() => setOpenSidebar(!openSidebar)}
										><i className="fas fa-bars"></i></a>
									</div> */}
									<div className="packpro-btn">
										<a> SG Logistics</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	);
};

export default HeaderOne;