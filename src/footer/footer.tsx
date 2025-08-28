import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/dummyrock" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/dylan-frajerman-50089a380" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} />
        </a>
        <a href="https://instagram.com/dylan_frajerman" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
