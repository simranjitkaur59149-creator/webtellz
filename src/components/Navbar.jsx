import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" width={300} />
          </div>
          <ul className={`nav-links ${open ? "active" : ""}`} >
            <li>
              <NavLink to="/" onClick={()=>setOpen(false)} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={()=>setOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={()=>setOpen(false)}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={()=>setOpen(false)}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
            </li>
          </ul>
             <div className="toggle" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}</div>
        </nav>
      </header>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-align">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#"> <div className="logo">
            <img src={logo} alt="" width={200} />
          </div></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
        <NavLink className="nav-link" href="#">About</NavLink>
        <NavLink className="nav-link" href="#">Services</NavLink>
        <NavLink className="nav-link" href="#">Portfolio</NavLink>
        <NavLink className="nav-link" href="#">Contact</NavLink>
      </div>
    </div>
  </div>
</nav> */}
    </>
  );
}
