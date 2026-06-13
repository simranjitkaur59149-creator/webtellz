import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import simran from "../assets/simranjitkaur.jpeg";

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
    { id: "proj", value: "250+", label: "Projects Delivered" },
    { id: "clients", value: "120+", label: "Happy Clients" },
    { id: "team", value: "10+", label: "Team Members" },
    { id: "satisfaction", value: "98%", label: "Client Satisfaction" },
  ],
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FeatureItem = ({ text }) => (
  <li className="feature-item">
    <span className="checkmark-icon">✓</span>
    {text}
  </li>
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
      <img
        src={imageSrc}
        alt="Webtellz Team"
        className="about-main-image"
      />
    </div>

    <div className="experience-badge">
      <span className="badge-value">{experienceData.value}</span>
      <span className="badge-label">{experienceData.label}</span>
    </div>
  </div>
);

export default function AboutWebtellz({reviews=[]}) {
  const { description, features, metrics } = ABOUT_DATA;

  const experienceMetric = metrics.find(
    (item) => item.id === "exp"
  );

  const gridMetrics = metrics.filter(
    (item) => item.id !== "exp"
  );

  return (
    <>
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
          <ImageShowcase
            experienceData={experienceMetric}
            imageSrc={simran}
          />
        </motion.div>

        {/* Content Side */}
        <motion.div
          className="content-panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="about-heading"
          >
            We Turn Ideas Into{" "}
            <span className="highlight-text">
              Meaningful Digital Solutions
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="about-description"
          >
            {description}
          </motion.p>

          <motion.ul
            variants={stagger}
            className="feature-list"
          >
            {features.map((feature, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
              >
                <FeatureItem text={feature} />
              </motion.div>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="stats-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {gridMetrics.map((metric) => (
          <motion.div
            key={metric.id}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
          >
            <MetricCard
              value={metric.value}
              label={metric.label}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
    {reviews.map((item,index)=>{
    return <section key={index}>
{item.comment}
    </section>
})}
    </>
  );
}