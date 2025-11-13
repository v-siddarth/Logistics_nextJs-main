"use client"
import Link from "next/link";
import Offcanvas from "@/common/Offcanvas";
import useSticky from "@/hooks/use-sticky";
import React, { useState } from "react";

const HeaderOne = () => {
  const { sticky } = useSticky();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (  
    <>
      <header className={`header-area ${sticky && "sticky-nav"}`} id="sticky-header">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Logo Section */}
            <div className="col-lg-2 col-6">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logo.png"
                    alt="SG Logistics"
                    className="img-fluid"
                    style={{ width: "200px", height: "auto" }}  // <-- LOGO SIZE HERE
                  />
                </Link>
              </div>
            </div>

            {/* Menu Section */}
            <div className="col-lg-10 col-6">
              <div className="header-menu d-flex justify-content-end align-items-center">

                <ul className="d-flex gap-4 m-0">
                  <li><a href="/">Home</a></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/service">Services</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>

                <div className="header-right ms-4">
                  <div className="packpro-btn">
                    <a
                      href="/brochure.pdf"
                      download="SG Logistics Brochure.pdf"
                      className="btn btn-primary px-4 py-2"
                    >
                      DOWNLOAD BROCHURE
                    </a>
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
