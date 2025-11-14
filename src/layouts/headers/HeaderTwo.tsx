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
      <div className="topbar py-2">
        <div className="container">
          <div className="row align-items-center">

            {/* Email */}
            <div className="col-md-6 col-12 text-center text-md-start">
              <small>
                <a href="mailto:docs@sglogsitics.net.in" className="fw-bold text-decoration-none">
                  docs@sglogsitics.net.in
                </a>
              </small>
            </div>

            {/* Phone Numbers */}
            <div className="col-md-6 col-12 text-center text-md-end">
              <small>
                📞 &nbsp;
                <a href="tel:+919594279131" className="fw-bold text-decoration-none">
                  +91 95942 79131
                </a>
                &nbsp;/&nbsp;
                <a href="tel:+919137674355" className=" fw-bold text-decoration-none">
                  +91 91376 74355
                </a>
              </small>
            </div>

          </div>
        </div>
      </div>

      <header className="header-area">
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

      {/* GLOBAL STYLE (OPTIONAL) */}
      <style jsx global>{`
        .topbar {
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default HeaderOne;
