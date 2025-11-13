"use client";
import Count from "@/common/count";
import { useState } from "react";

const services_data = [
  {
    title: "Custom Broker",
    description:
      "Complete customs clearance support including documentation, tariff classification, duty calculation and liaison with customs authorities to ensure fast and compliant clearance.",
  },
  {
    title: "Freight Forwarding",
    description:
      "End-to-end freight forwarding for sea, air and road — routing, carrier selection, booking, cargo consolidation and end-to-end tracking.",
  },
  {
    title: "Transportation",
    description:
      "Domestic and international transportation solutions with multimodal options, secure handling and door-to-door pickup and delivery.",
  },
  {
    title: "Cargo Insurance",
    description:
      "Cargo insurance policies tailored to your shipments, covering loss, damage and transit-related risks with easy claim assistance.",
  },
  {
    title: "Door-To-Door Delivery",
    description:
      "Hassle-free pickup from origin and delivery to the consignee’s door with real-time tracking and proof-of-delivery.",
  },
  {
    title: "DGFT Consultation",
    description:
      "Assistance with DGFT procedures — IEC registration, import/export licensing, FTP compliance and veterinary/phytosanitary support where required.",
  },
  {
    title: "Chartered Engineer Certification",
    description:
      "Technical certification support from certified chartered engineers for equipment, heavy cargo and project consignments needing engineering approvals.",
  },
];

const FaqHomeTwo = ({ style_2 }: any) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className={`faq-area style-two ${style_2 ? "inner-page" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="section-title wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div
                  className={`section-main-title ${
                    style_2 ? "section-main-title" : "faq inner"
                  }`}
                >
                  {/* Changed heading to Services */}
                  {style_2 ? (
                    <h2>Our Services</h2>
                  ) : (
                    <h2>Our Services</h2>
                  )}
                </div>
                <div className="section-discription style-two">
                  {/* New description about services */}
                  <p>
                    Explore the core services we provide. From customs
                    clearance and freight forwarding to cargo insurance and
                    door-to-door deliveries — each service is backed by an
                    expert team to ensure fast, compliant and cost-effective
                    logistics solutions tailored to your needs.
                  </p>
                </div>
              </div>

              <div
                className="about-single-counter style-two wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="about-counter style-two">
                  <div className="about-icon">
                    <img src="assets/images/about/about-icon2.png" alt="" />
                  </div>
                  <div className="about-content style-two">
                    <div className="about-number">
                      <h4 className="counter">
                        <Count number={4000} />
                      </h4>
                      <span>+</span>
                    </div>
                    <div className="about-text style-two">
                      <p>Satisfied Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="faq-click-btn wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <ul className="accordion style-two">
                  {services_data.map((item, i) => (
                    <li key={i}>
                      <a
                        className={`${open === i ? "active" : ""}`}
                        onClick={() => setOpen(open === i ? null : i)}
                        style={{ cursor: "pointer" }}
                      >
                        <span>
                          0{i + 1}. {item.title}
                        </span>
                      </a>
                      <p
                        style={
                          open === i ? { display: "block" } : { display: "none" }
                        }
                      >
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHomeTwo;
