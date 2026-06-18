import React from "react";
import {
  FaPalette,
  FaCode,
  FaPencilRuler,
  FaChartLine,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import { ShieldCheck } from "lucide-react";
import "./services.css";

import heroImage from "../assets/services-bg.jpg";
const services = [
  {
    id: "01",
    title: "Web Design",
    desc: "Beautiful, responsive websites crafted to engage visitors, strengthen your brand identity, and drive business growth.",
    icon: <FaPalette />,
    color: "#3B82F6",
  },
  {
    id: "02",
    title: "Web Development",
    desc: "High-performance web applications and scalable digital platforms built with modern technologies.",
    icon: <FaCode />,
    color: "#22C55E",
  },
  {
    id: "03",
    title: "UI/UX Design",
    desc: "User-centered interfaces that combine aesthetics with usability to deliver memorable experiences.",
    icon: <FaPencilRuler />,
    color: "#8B5CF6",
  },
  {
    id: "04",
    title: "SEO & Marketing",
    desc: "Increase visibility, traffic and business growth with strategic marketing.",
    icon: <FaChartLine />,
    color: "#F59E0B",
  },
  {
    id: "05",
    title: "E-Commerce",
    desc: "Conversion-focused online stores built to maximize sales and customer retention.",
    icon: <FaShoppingCart />,
    color: "#38BDF8",
  },
  {
    id: "06",
    title: "Maintenance",
    desc: "Continuous support, monitoring and optimization for peak performance.",
    icon: <FaTools />,
    color: "#EC4899",
  },
];


export default function OurServices() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="services-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-badge">PREMIUM DIGITAL SERVICES</span>

          <h1 className="hero-title">
            Building Digital Experiences
            <span> That Drive Growth</span>
          </h1>

          <p className="hero-description">
            We combine creativity, strategy and technology to build websites and
            digital solutions that help businesses attract, engage and convert
            customers.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">What Clients Say</button>

            <button className="secondary-btn">View Portfolio</button>
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
              <div>
                {" "}
                <ShieldCheck color="#06B6D4" fontSize="22px" />
              </div>
              <div>
                <h3>98%</h3>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      

      <section className="services-section">
  <div className="services-header">
    <span className="services-tag">OUR SERVICES</span>
    <h2 className="services-title">
      Solutions That Drive <span>Growth</span>
    </h2>
    <p className="services-subtitle">
      Comprehensive digital services to help your business thrive in the modern world.
    </p>
  </div>

  <div className="services-grid">
    {services.map((service) => (
      <div
        key={service.id}
        className="service-card"
        style={{ "--accent": service.color }}
      >
        <span className="service-number">{service.id}</span>

        <div className="service-top">
          <div className="service-icon">{service.icon}</div>

          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        </div>

        
      </div>
    ))}
  </div>

      </section>
    </>
  );
}
