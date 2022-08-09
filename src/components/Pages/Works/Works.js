import "./Works.scss";
import React from "react";
import { Link } from "react-router-dom";
// Component(s)
import Category from "../../Category/Category";
// Icon(s)
import { IconContext } from "react-icons/lib";
import { AiFillHome } from "react-icons/ai";
// Translator
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  return (
    <div className="works-container">
      <Category />
      {/* Navigation Button */}
      <Link to="/" className="navigation_btn">
        <IconContext.Provider value={{ className: "navigation_btn_icon" }}>
          <AiFillHome />
        </IconContext.Provider>
        <h3>{t("nav_link1")}</h3>
      </Link>
    </div>
  );
};

export default Works;
