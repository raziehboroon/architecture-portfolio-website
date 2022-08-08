import React from "react";
import "./CategoriesPage.scss";
import Category from "../../Category/Category";
import { IconContext } from "react-icons/lib";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CategoriesPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <div className="CategoriesPage-section">
        <Category />

        <Link to="/" className="navigation_btn">
          <IconContext.Provider value={{ className: "navigation_btn_icon" }}>
            <AiFillHome />
          </IconContext.Provider>
          <h3>{t("nav_link1")}</h3>
        </Link>
      </div>
    </main>
  );
};

export default CategoriesPage;
