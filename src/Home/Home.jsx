import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { RatingContext } from "../RatingContext";

// Swiper Components and Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import { ChartNoAxesCombined ,Zap,Rocket,Laptop } from 'lucide-react'
import {
  FaArrowRightLong,
  FaComments,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa6";
import { MdComputer } from "react-icons/md";

import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

// Assets & Custom CSS
import "./home.css";
import bannerbg from "../assets/b_Style__Ultra_realist.mp4";
import unknown from "../assets/unknown.jpg";
import img1 from "../assets/project-1.png";
import img2 from "../assets/project-2.png";
import img3 from "../assets/project3.png";
import img4 from "../assets/project-4.png";
import { text, title } from "framer-motion/client";
import { color } from "framer-motion";

// Static Configurations
const projects = [
  {
    title: "Portfolio",
    image: img1,
    des: "A professional photographer portfolio with amazing ui/ux",
    tech: <RiReactjsFill color="#61DAFB" />,
    type: "Portfolio Website",
  },
  {
    title: "E-commerce store",
    image: img2,
    des: "A full-featured online store with product catalog and secure.",
    tech: (
      <>
        <RiReactjsFill color="#61DAFB" />
        <FaNodeJs color="#339933" />
        <SiMongodb color="#47A248" />
      </>
    ),
    type: "E-Commerce",
  },
  {
    title: "Weather App",
    image: img3,
    des: "Real-time weather updates with location search and beautiful UI.",
    tech: <FaJs color="#F7DF1E" />,
    type: "Web App",
  },
  {
    title: "Travel UI/UX",
    image: img4,
    des: "Modern travel landing page with stunning design and interactions.",
    tech: (
      <>
        <FaJs color="#F7DF1E" />
        <FaHtml5 color="#E34F26" />
        <FaCss3Alt color="#1572B6" />
      </>
    ),
    type: "Website landing page",
  },
];

const steps = [
  {
    icon: <FaComments color="#3b82f6" />,
    title: "Discuss",
    description: "We understand your goals and gather project requirements.",
  },
  {
    icon: <FaLightbulb  color="#00F5A0"  />,
    title: "Plan",
    description: "We create the structure, design strategy, and roadmap.",
  },
  {
    icon: <FaCode color="#FF2E63"/>,
    title: "Build",
    description:
      "We develop your website using modern technologies and best practices.",
  },
  {
  color:"#EFFF3C",
    icon: <FaRocket color="#EFFF3C" />,
    title: "Deliver",
    description: "Testing, optimization, deployment, and final delivery.",
  },
];
const serviceFeatures = [
  {
    icon: <Laptop  color="#EFFF3C"  />,
    title: "Modern design",
    text: "Beautiful, Responsve and User friendly design",
  },
  {
    icon: <Rocket  color="#00F5A0"  />,
    title: "Fast Performance",
    text: "Optimized for speed and performance",
  },
  {
    icon:     <ChartNoAxesCombined color="#FF2E63" />,
    title: "Seo Optimized",
    text: "Build with seo best practice time",
  },
  {
    icon:    <Zap color="#EFFF3C" />,
    title: "Scalable Solutions",
    text: "Future ready websites that grow with you",
  },
];

const roles = [
  "Full-Stack Mern Developer",
  "UI/UX Enthusiast",
  "React developer",
  "Web developer",
];

export default function Home() {
  const contextData = useContext(RatingContext);
  const reviews = contextData?.reviews || [];
  const navigate = useNavigate();

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("show");
            setTimeout(() => {
              entry.target.classList.add("show");
            }, 5000);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);


    useEffect(() => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  // Typing Effect Logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1),
          );
        },
        isDeleting ? 40 : 80,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <>
      <Helmet>
        <title>WebTellz | Web Design, Development & SEO Services</title>
        <meta
          name="description"
          content="WebTellz provides professional web design, web development, UI/UX design and SEO services. Build fast, responsive and search-engine-optimized websites for your business."
        />
        <meta
          name="keywords"
          content="web design, web development, SEO services, responsive websites, UI UX design, React developer, business website"
        />
      </Helmet>

      {/* Banner Section */}
      <main id="banner" className="banner">
        <div className="banner-content">
          <h5>{displayText}</h5>
          <h1>
            Creative Web <span>Solutions</span>
          </h1>
          <p>
            WebTellz creates modern websites, intuitive UI/UX, and SEO-driven
            digital experiences that help businesses grow online.
          </p>
          <div>
            <button className="primary-button">
              Explore my work <FaArrowRightLong />
            </button>
            <button onClick={() => navigate("/contact")}>Get in touch</button>
          </div>
{/* 
          <div className="service-features">
            {serviceFeatures.map((item, index) => (
              <div className="service-features-card" key={index}>
                <div className="feature-icon">{item.icon}</div>

                <div className="feature-content">
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      
      </main>

          <div className="service-features">
            {serviceFeatures.map((item, index) => (
              <div className="service-features-card" key={index}>
                <div className="feature-icon">{item.icon}</div>

                <div className="feature-content">
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
      {/* Development Process Section */}
      <section className="how-work-section">
        <div className="container">
          <h2 className="section-title">
            My <span>Development</span> Process
          </h2>
          <p className="section-subtitle">
            A simple and transparent process to turn your ideas into a
            successful digital product.
          </p>
          <div className="process-grid">
            {steps.map((process, index) => (
              <div className="process-card animate slide-right delay-1" key={index}>
                <div className="icon-box">{process.icon}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
                {index !== steps.length - 1 && <div className="arrow ">→</div>}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="project-sec" className="project-section">      
  <div className="container">
         <div className="project-header">

<div className="featured-badge">
★ FEATURED WORK
</div>

<p>
A showcase of my recent work and creative solutions
</p>

<h2>
Featured <span>Projects</span>
</h2>

{/* <div className="title-bars">
<span></span>
<span></span>
<span></span>
<span></span>
</div> */}

</div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="project-card animate slide-left delay-2">
                  <div className="project-img">
                    <img src={item.image} alt={item.title} />
                    <div className="project-overlay">
                      <span>{item.type}</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                    <div className="project-footer">
                      <div className="tech-icons">{item.tech}</div>
                      <span>
                        Live Demo <FaArrowRightLong />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> 
      </section>

      {/* Reviews Section */}
      <div className="review-section">

  <div className="container">

    <div className="review-header">

      <h2>
        What our <span>clients say</span>
      </h2>

      <div className="title-bars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    {reviews.length === 0 ? (

      <div className="empty-review">
        Waiting for your review
      </div>

    ) : (

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
      >

        {reviews.map((item,index)=>(

          <SwiperSlide key={index}>

            <div className="review-card animate slide-up delay-3">

              <div className="review-inner">

                <div className="review-avatar">

                  <img src={unknown} alt={item.user}/>

                </div>

                <div className="review-content">

                  <div className="review-stars">

                    {"⭐".repeat(item.rating || 5)}

                  </div>

                  <p className="review-comment">

                    "{item.comment}"

                  </p>

                  <h4>{item.user}</h4>

                </div>

                <div className="quote">
                  ❞
                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    )}

  </div>

</div>
    </>
  );
}
