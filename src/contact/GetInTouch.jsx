import React, { useState } from "react";
import "./contact.css"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GetInTouch() {
    const [result, setResult] = useState("");

const handleSubmit = async (event) => {
  event.preventDefault();

  setResult("Sending...");

  const formData = new FormData(event.target);

  formData.append(
    "access_key",
    "c399dd3b-22b2-4f08-9fd8-f617d4e73051"
  );

  const response = await fetch(
    "https://api.web3forms.com/submit",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (data.success) {
    setResult("Message sent successfully!");
    event.target.reset();
  } else {
    setResult("Failed to send message.");
  }
};
  return (
    <>
      <section className="contact-sec">
        <div className="contact-container">
        <div className="contact-details">
        <h1>Get In Touch</h1>
        <h4>Let's Work Together</h4>
        <p>
          Have a project in mind? We'd love to hear about it. Send us a message
          and we'll get back to you soon{" "}
        </p>
        <ul>
          <li>
            <MdEmail style={{color:" #e63946",fontSize:"24px"}}/>
            <span>
              <b>Email</b> <div>simranjitkaur59149@gmail.com</div>
            </span>
          </li>
          <li>
            <FaLocationDot style={{color:" #e63946",fontSize:"24px"}} />
            <span>
              <b>Location</b> <div>Patiala,Punjab</div>
            </span>
          </li>
        </ul>
       <h5>Follow us</h5> 
       <figure >
             
              <Link to="https://www.instagram.com/webtellz?igsh=MWNtNGJxNnRoZ3U3aw==">
            
                <SlSocialInstagram />
              </Link>
              <Link to="#">
              
                <FaGithub />
              </Link>
              <Link to="#">
           
                <FaLinkedinIn />
              </Link>
            </figure></div>
            <div className="contact-form">
<form onSubmit={handleSubmit}>

    <div className="input-group">
<input
  type="hidden"
  name="from_name"
  value="Portfolio Contact Form"
/>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="John Doe"
        required
      />
    </div>

    <div className="input-group">
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="john@example.com"
        required
      />
    </div>

    <div className="input-group">
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Project Discussion"
      />
    </div>

    <div className="input-group">
      <label htmlFor="msg">Message</label>
      <textarea
        id="msg"
        name="message"
        rows="6"
        placeholder="Tell me about your project..."
      ></textarea>
    </div>

    <button type="submit" className="submit-btn">
  Send Message →
</button>

{result && (
  <p
    style={{
      marginTop: "15px",
      color: result.includes("success")
        ? "green"
        : "#e63946",
    }}
  >
    {result}
  </p>
)}

  </form>
</div></div>
      </section>
    </>
  );
}   