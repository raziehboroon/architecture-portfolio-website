import React from "react";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context.js";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  const { t } = useTranslation();
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="navbar">
        <a href="/">
          <img src="/img/logo.png" alt="brand logo" className="nav-logo" />
        </a>
        {!showSidebar && (
          <button className="nav-btn" onClick={() => setShowSidebar(true)}>
            {t("nav_btn")}
          </button>
        )}
      </div>
      {/* {showSidebar && <Sidebar />} */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
