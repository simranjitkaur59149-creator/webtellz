import React, { useEffect, useState } from "react";
import "./contact.css";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { SlSocialInstagram } from "react-icons/sl";

import { MdEmail, MdOutlineArrowOutward } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function GetInTouch() {
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
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResult("Sending...");

    const formData = new FormData(e.target);

    formData.append("access_key", "c399dd3b-22b2-4f08-9fd8-f617d4e73051");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      e.target.reset();
    } else {
      setResult("Failed to send message.");
    }
  };

  return (
    <section className="contact">
      {/* Glow Background */}

      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="contact-wrapper">
        {/* LEFT */}

        <div className="contact-left">
          <span className="contact-tag">Get In Touch</span>

          <h3>
            Let's Build
            <span> Something Amazing</span>
          </h3>

          <p>
            Looking for a modern website or web application? I'm always excited
            to collaborate on creative ideas and help businesses grow digitally.
          </p>

          <div className="info-card">
            <div className="info-icon">
              <MdEmail />
            </div>

            <div>
              <h4>Email</h4>

              <p>simranjitkaur59149@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon green">
              <FaLocationDot />
            </div>

            <div>
              <h4>Location</h4>

              <p>Patiala, Punjab</p>
            </div>
          </div>

          <div className="socials">
            <Link to="https://www.instagram.com/webtellz?igsh=YTI2dGJ3c2FjZWI3">
              <SlSocialInstagram />
            </Link>

            <Link to="https://github.com/simranjitkaur59149-creator">
              <FaGithub />
            </Link>

                <Link to="https://www.linkedin.com/in/simranjit-kaur-55a67732a?utm_source=share_via&utm_content=profile&utm_medium=member_android">
          
              <FaLinkedinIn />
           </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="contact-right animate slide-right delay-1">
          <form onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="from_name"
              value="Portfolio Contact Form"
            />

           <div className="form-header"> <span className="e-icon"> <MdEmail /></span>

            <h4>Send us a Message</h4></div>

            <div className="grid">
              <div className="field">
                <label>Name</label>

                <input name="name" placeholder="John Doe" required />
              </div>

              <div className="field">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@gmail.com"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Subject</label>

              <input name="subject" placeholder="Project Discussion" />
            </div>

            <div className="field">
              <label>Message</label>

              <textarea
                rows="7"
                name="message"
                placeholder="Tell me about your project..."
              />
            </div>

            <button className="send-btn">
              Send Message
              <MdOutlineArrowOutward />
            </button>

            {result && <p className="result">{result}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
