import "./Navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Component(s)
import Sidebar from "../Sidebar/Sidebar";
// Translator
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);

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
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </nav>
  );
};

export default Navbar;
