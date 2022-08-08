import React from "react";
import "./Works.scss";
import Category from "../../Category/Category";
import { IconContext } from "react-icons/lib";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  return (
    <div className="works-container">
      <div className="works-center">
        <Category />

        <Link to="/" className="navigation_btn">
          <IconContext.Provider value={{ className: "navigation_btn_icon" }}>
            <AiFillHome />
          </IconContext.Provider>
          <h3>{t("nav_link1")}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Works;
