import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
 <div className="footer-links">

  {/* Company */}
  <div className="footer-column company">
    <img src={logo} alt="logo" className="footer-logo" />

    <p className="footer-text">
      We build innovative digital solutions that transform your ideas into
      reality and help your business grow.
    </p>

    <div className="social-media">
      <a href="#"><SlSocialInstagram /></a>
      <a href="#"><FaGithub /></a>
      <a href="#"><FaLinkedinIn /></a>
    </div>
  </div>

  {/* Links */}
  <div className="footer-column links">
    <h3>Quick Links</h3>

    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    
    <Link to="/contact">Contact</Link>
    <div className="footer-btn">
            <NavLink to="/contact" >
              Let's Talk
              <ArrowRight size={18} />
            </NavLink>
          </div>
  </div>

  {/* Services */}
  <div className="footer-column services">
    <h3>Services</h3>

    <span>Web Design</span>
    <span>Web Development</span>
    <span>UI/UX Design</span>
    <span>E-commerce Solutions</span>
    <span>Website Maintenance</span>
  </div>

  {/* Contact */}
  <div className="footer-column ">

    <h3>Contact Info</h3>

    <div className="contact-item">
      <MdEmail className="contact-icon email"/>
      <div>
        <h4>Email</h4>
        <p>webtellz1226@gmail.com</p>
      </div>
    </div>

    <div className="contact-item">
      <FaLocationDot className="contact-icon location"/>
      <div>
        <h4>Location</h4>
        <p>Patiala, Punjab</p>
      </div>
    </div>

  </div>

</div>

<div className="footer-bottom">
  © {new Date().getFullYear()} <span>WebTellz.</span> All rights reserved.
</div>
    </footer>
  );
}
