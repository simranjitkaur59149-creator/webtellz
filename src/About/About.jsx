import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./about.css";
import img1 from "../assets/about-slidder1.webp";
import img2 from "../assets/about-slidder2.webp";
import img3 from "../assets/about-slidder3.webp";
// import simran from "../assets/simranjitkaur.jpeg";
import simran from "../assets/mine.jpeg";

import Rating from "../Rating/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Brush,
  CircleStar,
  SproutIcon,
  Timer,
  User,
  Users,
} from "lucide-react";
import { BiBulb } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { WiDegrees } from "react-icons/wi";
import { GiDivergence } from "react-icons/gi";
const aboutFeatures = [
  {
    icon: <Brush />,
    title: "Creative & Modern Designs",
    text: "Modern, pixel-perfect interfaces that elevate your brand and engage your audience.",
  },
  {
    icon: <Timer />,
    title: "Performance Focused",
    text: "Lightning-fast, optimized websites built for speed, SEO, and user experience.",
  },
  {
    icon: <User />,
    title: "Client-Centric Approach",
    text: "Transparent communication and tailored solutions that prioritize your goals..",
  },
  {
    icon: <BiBulb />,
    title: "Innovative Solutions",
    text: "Creative web solutions that combine design, technology, and strategy to drive growth.",
  },
];
const ABOUT_DATA = {
  description:
    "At Webtellz, we combine creativity, technology, and strategy to build digital experiences that connect, engage, and convert.",

  metrics: [
    {icon:<GiDivergence/>, id: "exp", value: "5+", label: "Years of Experience" },

    { icon: <Users />, id: "team", value: "2+", label: "Team Members" },
    {
      icon: <CircleStar />,
      id: "satisfaction",
      value: "98%",
      label: "Client Satisfaction",
    },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Removed <li> from here so motion can handle the tag wrapper safely
const FeatureItem = ({ text }) => (
  <>
    <span className="checkmark-icon">✓</span>
    {text}
  </>
);

const MetricCard = ({ value, label }) => (
  <div className="stat-card">
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const ImageShowcase = ({ experienceData, imageSrc }) => (
  <div className="image-wrapper">
    <div className="about-image-container">
      <img src={imageSrc} alt="Webtellz Team" className="about-main-image" />
    </div>
  </div>
);

export default function AboutWebtellz() {
  // Safe fallback to empty array if context isn't loaded yet
  const navigate = useNavigate();
  const { description, metrics } = ABOUT_DATA;
  // const experienceMetric = metrics.find((item) => item.id === "exp");
  // const gridMetrics = metrics.filter((item) => item.id !== "exp");

  return (
    <>
      {/* Banner Carousel */}
      <section className="about-banner">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <img src={img1} alt="Digital Solutions" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img2} alt="Web Development" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img3} alt="Technology Services" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Main Content */}
      <section className="about-section">
        <div className="about-container">
          {/* LEFT */}

          {/* RIGHT */}

          <div className=" about-tagline ">
            <div className="section-tag">✨ A LITTLE ABOUT US</div>
            <h3>
              Passionate About
              <span>Design & Development</span>
            </h3>

            <p>
              At Webtellz, we transform ideas into modern digital products that
              are beautiful, responsive, and built for performance. Every
              project is crafted with creativity, clean code, and attention to
              detail. Whether it's a business website, portfolio, landing page,
              or full-stack application, our goal is simple—deliver exceptional
              user experiences that help brands grow online.
            </p>

            {/* <div className="feature-grid">
              {aboutFeatures.map((item) => (
                <div className="feature-card">
                  <div className="icon">{item.icon}</div>

                  <div>
                    <h5>{item.title}</h5>

                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div> */}

            <div className="about-buttons">
              <button className="primary-btn">Share your Experience→</button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/contact")}
              >
                ▶ Lets Talk
              </button>
            </div>
          </div>
          <div className="about-image-card">
            <img src={simran} className="about-main-image" />
          </div>
        </div>

        <div className="stats-container">
          {metrics.map((metric) => (
            <div className="stat-card">
              <div className="stat-card-content">
                {" "}
                <div className="metric-icons">{metric.icon}</div>
                <div>
                  <h2>{metric.value}</h2>

                  <p>{metric.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Rating />
    </>
  );
}
