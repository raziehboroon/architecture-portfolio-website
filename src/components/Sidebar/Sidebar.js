import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context/context.js";

const Sidebar = () => {
  const { t } = useTranslation();
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <div className={`sidebar ${showSidebar && "open-sidebar"}`}>
      <div className="nav-icons">
        <Language />
        <VscChromeClose
          className="close-btn"
          onClick={() => setShowSidebar(false)}
        />
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className="nav-link changeDir"
            onClick={() => setShowSidebar(false)}
          >
            {t("nav_link1")}
          </Link>
        </li>
        <li>
          <Link
            to="/#categories"
            className="nav-link changeDir"
            onClick={() => setShowSidebar(false)}
          >
            {t("nav_link2")}
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link changeDir"
            onClick={() => setShowSidebar(false)}
          >
            {t("nav_link3")}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav-link changeDir"
            onClick={() => setShowSidebar(false)}
          >
            {t("nav_link4")}
          </Link>
        </li>
      </ul>
      <div className="social-links">
        {/* <div className="line"></div> */}
        <a
          href="https://www.instagram.com/ameneh.seyyedi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          onClick={() => setShowSidebar(false)}
        >
          {t("social_link1")}
        </a>
        <a
          href="https://www.linkedin.com/in/ameneh-sadat-seyyedi-komjani-67968b66/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          onClick={() => setShowSidebar(false)}
        >
          {t("social_link2")}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
