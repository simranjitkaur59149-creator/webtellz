import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer-links">
        <ul>
          <li>
           
            <img src={logo} alt="" width={300} />
          </li>
          <li>
            <p>
              We build your ideas into reality which hepls to grow your business
            </p>
          </li>
          <li>
            <figure className="social-media">
             
              <Link to="https://www.instagram.com/webtellz?igsh=MWNtNGJxNnRoZ3U3aw==">
            
                <SlSocialInstagram />
              </Link>
              <Link to="#">
              
                <FaGithub />
              </Link>
              <Link to="#">
           
                <FaLinkedinIn />
              </Link>
            </figure>
          </li>
        </ul>
        <ul>
          <h3>Quick Links</h3>
          <li><Link>Home</Link></li>
          <li><Link>About </Link> </li>
          <li><Link>Services</Link></li>
          <li><Link> Portfolio </Link></li>
          <li><Link> Contact</Link> </li>
        </ul>
        <ul>
          <h3>Services</h3>
          <li>Web Design</li>
          <li>Web development</li>
          <li>UI/UX Design</li>
          <li>E-commerce</li>
          <li>Maintenance</li>
        </ul>
      </footer>
    </>
  );
}
