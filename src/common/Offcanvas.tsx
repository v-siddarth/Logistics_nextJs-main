"use client"
import Link from 'next/link';
import menu_data from '@/data/menu-data';
import React, { useState } from 'react';

const Offcanvas = ({ openSidebar, setOpenSidebar }: any) => {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };


  return (
    <> 

      <div className={`sidebar-group info-group ${openSidebar ? "isActive" : ""}`}>
        <div className="sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a style={{ cursor: "pointer" }} className="close-side-widget" onClick={() => setOpenSidebar(!openSidebar)}>
                <i className="bi bi-x-lg"></i>
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="sidebar-logo">
                    <Link href="/"><img src="assets/images/logo.png" alt="logo" /></Link>
                  </div>
                  <div className="sidebar-widget-menu">

                    <ul>
                      {menu_data.map((item, i) => (
                        <li key={i} className="dropdown"> 
                          <Link href={item.path ?? '/'} style={{ cursor: "pointer", color: "#fff" }}
                            onClick={() => openMobileMenu(item.title)} data-toggle="dropdown">
                            {item.title}
                            {item.submenu && <i className={`icon-arrow ${navTitle === item.title ? "open" : "close"}`} ></i>}
                          </Link>

                          {item.submenu && (
                            <ul className={`dropdown-menu ${navTitle === item.title ? "show" : "hide"}`}>
                              {item.submenu.map((subItem, j) => (
                                <li key={j}><Link href={subItem.path}>{subItem.title}</Link></li>
                              ))}
                            </ul>
                          )}
                        </li>

                      ))}

                    </ul>

                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li><i className="bi bi-geo-alt-fill"></i>D-209, 2nd Floor, Tower No. 7, International Infotech Center, CBD Belapur, Navi Mumbai - 400614</li>
                      <li><i className="bi bi-telephone-fill"></i><a href="tel:+919594279131" style={{textDecoration:'none'}}>+91 9594279131</a> / <a href="tel:+919137674355" style={{textDecoration:'none'}}>+91 9137674355</a></li>
                      <li><i className="bi bi-envelope"></i><a href="mailto:docs@sglogsitics.net.in" style={{
                        textDecoration:'none'
                      }}>docs@sglogsitics.net.in</a></li>
                      {/* <li><i className="bi bi-alarm-fill"></i> Week Days: 08.00 to 10.00
                      </li> */}
                    </ul>
                  </div>
                  {/* <ul className="social-box">
                    <li className="facebook"><a href="#" className="fab fa-facebook-f"></a></li>
                    <li className="twitter"><a href="#" className="fab fa-instagram"></a></li>
                    <li className="linkedin"><a href="#" className="fab fa-twitter"></a></li>
                    <li className="instagram"><a href="#" className="fab fa-pinterest-p"></a></li>
                    <li className="youtube"><a href="#" className="fab fa-linkedin-in"></a></li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Offcanvas;