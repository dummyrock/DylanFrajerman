import React from "react";
import { Link } from "react-router-dom"; // we’ll use React Router for navigation
import "./Header.css";
import resumePDF from "../assets/Dylan Frajerman.pdf";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Dylan Frajerman</h1>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Portfolio</Link>
          <a href={resumePDF} className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a>
          <Link to="/about-me" className="nav-link">About Me</Link>
          <Link to="/contact-me" className="nav-link">Contact Me</Link>
        </nav>
      </div>
    </header>
  );
}
