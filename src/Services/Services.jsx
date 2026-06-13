import React from "react";
import {
  FaPalette,
  FaCode,
  FaPencilRuler,
  FaChartLine,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import { ShieldCheck } from 'lucide-react';
import "./services.css";

import heroImage from "../assets/services-bg.jpg";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Modern and visually stunning websites designed to build trust and strengthen your brand.",
    icon: <FaPalette />,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Fast, secure and scalable web solutions built with modern technologies.",
    icon: <FaCode />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Exceptional user experiences focused on engagement and conversions.",
    icon: <FaPencilRuler />,
  },
  {
    id: 4,
    title: "SEO & Marketing",
    description:
      "Increase visibility, traffic and business growth with strategic marketing.",
    icon: <FaChartLine />,
  },
  {
    id: 5,
    title: "E-Commerce",
    description:
      "Conversion-focused online stores built to maximize sales and customer retention.",
    icon: <FaShoppingCart />,
  },
  {
    id: 6,
    title: "Maintenance",
    description:
      "Continuous support, monitoring and optimization for peak performance.",
    icon: <FaTools />,
  },
];

export default function OurServices() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="services-hero">
        <div className="hero-overlay"></div>

      

        <div className="hero-content">
          <span className="hero-badge">
            PREMIUM DIGITAL SERVICES
          </span>

          <h1 className="hero-title">
            Building Digital Experiences
            <span> That Drive Growth</span>
          </h1>

          <p className="hero-description">
            We combine creativity, strategy and
            technology to build websites and digital
            solutions that help businesses attract,
            engage and convert customers.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              What Clients Say
            </button>

            <button className="secondary-btn">
              View Portfolio
            </button>
          </div>

          <div className="hero-stats">
            {/* <div className="hero-stat-card">
              <h3>250+</h3>
              <span>Projects Delivered</span>
            </div>

            <div className="hero-stat-card">
              <h3>120+</h3>
              <span>Happy Clients</span>
            </div> */}

            <div className="hero-card-icons">
              <div>  <ShieldCheck color="#06B6D4" fontSize="22px"/></div>
             <div><h3>98%</h3>
              <span>Satisfaction Rate</span></div> 
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section">
        <div className="services-header">
          <span className="services-tag">
            OUR EXPERTISE
          </span>

          <h2 className="services-title">
            Services Designed For
            <span> Modern Businesses</span>
          </h2>

          <p className="services-subtitle">
            We provide complete digital solutions
            that help businesses establish a strong
            online presence and achieve sustainable
            growth.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="service-icon-wrapper">
                {service.icon}
              </div>

              <h3 className="service-card-title">
                {service.title}
              </h3>

              <p className="service-card-description">
                {service.description}
              </p>

              {/* <div className="service-footer">
                <span>Learn More</span>
                <span>→</span>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}