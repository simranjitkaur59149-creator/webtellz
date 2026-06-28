import React, { useState } from "react";
import "./navbar.css";
import logo1 from "../assets/logo1.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/services" onClick={() => setOpen(false)}>
              Services
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="toggle" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </div>
      </nav>
    </header>
  );
}