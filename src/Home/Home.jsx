import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "./home.css";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaPaintBrush,
  FaLaptopCode,
  FaPencilRuler,
  FaChartLine,
} from "react-icons/fa";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";
import img4 from "../assets/project4.png";
import { useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating";
const projects = [
  {
    title: " Portfolio",
    image: img1,
      des:
      "A professional photographer portfolio with amazing ui/ux",
  },
  {
    title: "E-commerce ",
    image: img2,
    des:
      "A full-featured online store with product catalog and secure .",
    
  },
  {
    title: "Weather App",
    image: img3,
     des:
      "Real-time weather updates with location search and beautiful UI.",
  },
  {
    title: "Travel UI/UX",
    image: img4,
     des:
      "Modern travel landing page with stunning design and interactions."
  },
];
export default function Home() {
  
const navigate=useNavigate()
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            // restart animation every time
            entry.target.classList.remove("show");

            setTimeout(() => {
              entry.target.classList.add("show");
            }, 5000);

          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return observer.disconnect();
  }, []);

 
  const scrollToTop = () => {
    document.getElementById("banner").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollTobottom = () => {
    document.getElementById("project-sec").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
    
<Helmet>
  <title>
    WebTellz | Web Design, Development & SEO Services
  </title>

  <meta
    name="description"
    content="WebTellz provides professional web design, web development, UI/UX design and SEO services. Build fast, responsive and search-engine-optimized websites for your business."
  />

  <meta
    name="keywords"
    content="web design, web development, SEO services, responsive websites, UI UX design, React developer, business website"
  />
</Helmet>

      <main id="banner" className="banner">
        <div className="banner-content">
          {/* <h5 style={{ color: "#F1FAEE" }}>🚀 Creative Web Solutions</h5>

<p>
  Webtellz helps startups, entrepreneurs, and businesses build fast,
  scalable, SEO-optimized websites and digital experiences that convert
  visitors into customers.
</p> */}
         <h5 style={{ color: "#F1FAEE" }}>
  Web Design • Web Development • SEO Services
</h5>

<h1>
 Creative Web Solutions
</h1>

<p>
 WebTellz creates modern websites, intuitive UI/UX, and SEO-driven digital experiences that help businesses grow online.
</p>
          <div>
            {" "}
            <button className="red-button">
              {" "}
              Explore my work <FaArrowRightLong />
            </button>{" "}
            <button onClick={()=>navigate("/contact")}>Get in touch</button>
          </div>
        </div>
      </main>

      {/* <div style={{display:"flex",justifyContent:"flex-end"}}><GoArrowDown className="icons" onClick={scrollTobottom} />
      </div> */}
      <section className="services-sec  ">
        <div className="services-header">
          {" "}

          <h5 className="badge">What I Do</h5>
          <h1>Services I Offer</h1>
          <p>
            I create digital solutions that drive results present your business
            online and grow{" "}
          </p>
        </div>
        <div className="card-sec ">
          <div className="card red">
            <div><FaPaintBrush className="card-icons red-icon" /></div>
            <div>
              {" "}
              <h4>Web Design</h4>
              <p>
                Beautiful, responsive websites crafted to engage visitors,
                strengthen your brand identity, and drive business growth.
              </p>
            </div>
          </div>
          <div className="card blue">
            <FaLaptopCode className="card-icons blue-icon" />

            <div>
              {" "}
              <h4>Web Development</h4>
              <p>
                High-performance web applications and scalable digital platforms
                built with modern technologies and best practices.
              </p>
            </div>
          </div>
          <div className="card purple">

            <FaPencilRuler className="card-icons purple-icon " />
            <div>
              <h4>UI/UX Design</h4>
              <p>
                User-centered interfaces that combine aesthetics with usability
                to deliver seamless and memorable experiences.
              </p>
            </div>
          </div>
          <div className="card  green">
            <FaChartLine className="card-icons green-icon" />

            <div>
              {" "}
              <h4>SEO Optimization</h4>
              <p>
                Technical and on-page SEO strategies that improve visibility,
                increase organic traffic, and enhance search rankings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="project-sec" className="container">
  <div className="project-secttion">
          <div className="project-header">
          <span className="badge">★ FEATURED WORK</span>
           <p>A showcase of my recent work and creative solutions</p>
          <h2>Featured Projects</h2>
</div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
           
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="project-card">
                  <div className="project-img">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="project-content">
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="button-wrapper">
        <button className="all-projects-btn">
          View All Projects →
        </button>
      </div>
        </div>
      </section>
      <Rating/>
      <div style={{display:"flex",justifyContent:"flex-end"}}><GoArrowUp className="icons" onClick={scrollToTop} /></div>
    </>
  );
}
