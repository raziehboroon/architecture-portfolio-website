import React from "react";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context/context.js";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { t } = useTranslation();
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="navbar">
        <Link to="/">
          <img src="/img/logo.png" alt="Ameneh Seyyedi" className="nav-logo" />
        </Link>
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
