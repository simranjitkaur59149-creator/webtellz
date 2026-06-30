import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="WebTellz Logo" />
        </NavLink>

        {/* Navigation */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

         
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

          {/* CTA */}
          <li className="nav-btn">
            <NavLink to="/contact" onClick={closeMenu}>
              Let's Talk
              <ArrowRight size={18} />
            </NavLink>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>
    </header>
  );
}