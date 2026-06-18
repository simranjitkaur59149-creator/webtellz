import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./about.css";
import img1 from "../assets/about-slidder1.png";
import img2 from "../assets/about-slidder2.png";
import img3 from "../assets/about-slidder3.png";
import simran from "../assets/simranjitkaur.jpeg";
import { RatingContext } from "../RatingContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ABOUT_DATA = {
  description:
    "At Webtellz, we combine creativity, technology, and strategy to build digital experiences that connect, engage, and convert.",
  features: [
    "Creative & Modern Designs",
    "Performance Focused",
    "Client-Centric Approach",
    "Innovative Solutions",
  ],
  metrics: [
    { id: "exp", value: "5+", label: "Years of Experience" },
    // { id: "proj", value: "250+", label: "Projects Delivered" },
    // { id: "clients", value: "120+", label: "Happy Clients" },
    { id: "team", value: "2+", label: "Team Members" },
    { id: "satisfaction", value: "98%", label: "Client Satisfaction" },
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
    {experienceData && (
      <div className="experience-badge">
        <span className="badge-value">{experienceData.value}</span>
        <span className="badge-label">{experienceData.label}</span>
      </div>
    )}
  </div>
);

export default function AboutWebtellz() {
  // Safe fallback to empty array if context isn't loaded yet
  const contextData = useContext(RatingContext);
  const reviews = contextData?.reviews || [];

  const { description, features, metrics } = ABOUT_DATA;
  const experienceMetric = metrics.find((item) => item.id === "exp");
  const gridMetrics = metrics.filter((item) => item.id !== "exp");

  return (
    <>
      {/* Banner Carousel */}
      <section className="about-banner">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img src={img1} alt="Slider 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Slider 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Slider 3" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Main Content */}
      <section className="about-section">
        <div className="about-bg-shape"></div>

        <div className="about-grid">
          {/* Image Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <ImageShowcase experienceData={experienceMetric} imageSrc={simran} />
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="content-panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="about-heading">
              We Turn Ideas Into{" "}
              <span className="highlight-text">Meaningful Digital Solutions</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="about-description">
              {description}
            </motion.p>

            {/* Changed wrappers here to motion.li for valid HTML structure */}
            <motion.ul variants={stagger} className="feature-list">
              {features.map((feature, index) => (
                <motion.li variants={fadeUp} key={index} className="feature-item">
                  <FeatureItem text={feature} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {gridMetrics.map((metric) => (
            <motion.div key={metric.id} whileHover={{ y: -8, scale: 1.05 }}>
              <MetricCard value={metric.value} label={metric.label} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reviews Carousel */}
      <div className="review-sec">
        <h1>What our clients say</h1>
      <section className="reviews-card">
        {reviews.length === 0 ? (
          <div>Waiting for your review </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            //  breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   768: {
            //     slidesPerView: 2,
            //   },
            //   1024: {
            //     slidesPerView: 3,
            //   },
            // }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="review-rating">{"⭐".repeat(item.rating || 5)}</div>
                <div>{item.user}</div>
                <div className="review-comment">{item.comment}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section></div>
    </>
  );
}