import React from "react";
import "./Footer.scss";
// import { useTranslation } from "react-i18next";

import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  // const { t } = useTranslation();
  const getData = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return fullYear;
  };
  return (
    <footer>
      <div className="footer-links">
        {/* <div className="line"></div> */}
        <a
          href="mailto:ameneh.seyyedi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          // className="social-link"
        >
          {<FaEnvelope />}
        </a>
        <a
          href="https://www.instagram.com/ameneh.seyyedi/"
          target="_blank"
          rel="noopener noreferrer"
          // className="social-link"
        >
          {<FaInstagram />}
        </a>
        <a
          href="https://www.linkedin.com/in/ameneh-sadat-seyyedi-komjani-67968b66/"
          target="_blank"
          rel="noopener noreferrer"
          // className="social-link"
        >
          {<FaLinkedin />}
        </a>
        <a href="tel:09128067800">
          <FaPhoneSquare />
        </a>
      </div>
      <small className="footer_developer-info">
        <FaCopyright />
        <span> {getData()} </span>
        &nbsp;Razieh Boroon
      </small>
    </footer>
  );
};

export default Footer;
