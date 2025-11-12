
import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({title, subtitle} : any) => {
  return (
    <>
      <div className="breatcome-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <div className="breatcome-content">
                <div className="breatcome-title">
                  <h1>{title}</h1>
                </div>
                <div className="bratcome-text">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li>{subtitle}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;