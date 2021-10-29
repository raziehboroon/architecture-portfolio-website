import React from "react";
import "./Navbar.scss";
import { VscChromeClose } from "react-icons/vsc";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <div className="nav-icons">
        <Language />
        <VscChromeClose className="close-btn" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/project" className="nav-link">
            {t("nav_link1")}
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link">
            {t("nav_link2")}
          </a>
        </li>
        <li>
          <a href="/contact" className="nav-link">
            {t("nav_link3")}
          </a>
        </li>
      </ul>
      <div className="social-links">
        {/* <div className="line"></div> */}
        <a
          href="https://www.instagram.com/ameneh.seyyedi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {t("social_link1")}
        </a>
        <a
          href="https://www.linkedin.com/in/ameneh-sadat-seyyedi-komjani-67968b66/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {t("social_link2")}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
