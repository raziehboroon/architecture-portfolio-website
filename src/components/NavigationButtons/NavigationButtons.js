import "./NavigationButtons.scss";
import React from "react";
import { Link } from "react-router-dom";
// Icon(s)
import { IconContext } from "react-icons/lib";
import { AiFillHome } from "react-icons/ai";
// Translator
import { useTranslation } from "react-i18next";

const NavigationButtons = ({ name, name1 = "", url }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Link to={url} className="navigation_btn">
        <IconContext.Provider value={{ className: "navigation_btn_icon" }}>
          <AiFillHome />
        </IconContext.Provider>
        <h3>
          {t(`${name}`)} {t(`${name1}`)}
        </h3>
      </Link>
    </div>
  );
};

export default NavigationButtons;
