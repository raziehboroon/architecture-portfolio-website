import "./Contact.scss";
import React from "react";
// Icon(s)
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-links">
        <a
          href="mailto:ameneh.seyyedi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> &nbsp; ameneh.seyyedi@gmail.com
        </a>

        <a href="tel:09128067800">
          <FaPhoneSquare /> &nbsp; 09128067800
        </a>
      </div>
    </div>
  );
};

export default Contact;
