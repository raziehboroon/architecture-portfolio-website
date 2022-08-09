import "./Footer.scss";
import React from "react";
// Icon(s)
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a
          href="mailto:ameneh.seyyedi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaEnvelope />}
        </a>
        <a
          href="https://www.instagram.com/ameneh.seyyedi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaInstagram />}
        </a>
        <a
          href="https://www.linkedin.com/in/ameneh-sadat-seyyedi-komjani-67968b66/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<FaLinkedin />}
        </a>
        <a href="tel:09128067800">
          <FaPhoneSquare />
        </a>
      </div>
      <small className="footer_developer-info">
        Developed by:{" "}
        <a href="https://rboroon.com" target="_blank" rel="noopener noreferrer">
          rboroon
        </a>
      </small>
    </footer>
  );
};

export default Footer;
