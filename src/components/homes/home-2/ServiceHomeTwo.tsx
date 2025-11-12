import Link from "next/link";


const ServiceHomeTwo = () => {
  return (
    <>
      <div className="service-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="section-title text-center wow fadeInUp" data-wow-delay="0.2s">
                <div className="section-main-title">
                  <h2>Exciting changes coming</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details">Licensed CHA Customs Clearance Services</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon4.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Import Clearance · Export Clearance · Documentation & Duty Assessment · Coordination with ICEGATE, DGFT & SEZ </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details"> Freight Forwarding (Sea & Air Cargo)</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon5.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Sea Freight · Air Freight · Door‑to‑Door Movement · Export Consolidation · Import Deconsolidation · Partner Shipping Lines</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box style-two wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-content style-two">
                  <h2><Link href="/service-details">Container Transportation & Last‑Mile Delivery</Link></h2>
                </div>
                <div className="service-icon style-two">
                  <img src="assets/images/service/service-icon6.png" alt="" />
                </div>
                <div className="service-discription">
                  <p>Port‑to‑Destination Container Movement · Last‑Mile Delivery · GPS Tracking Support · Flexible Fleet Options</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHomeTwo;