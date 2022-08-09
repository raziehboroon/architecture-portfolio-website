import React from "react";
import "./SlideInfo.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SlideInfo = ({ id, title, subtitle, path }) => {
  const { t } = useTranslation();
  return (
    <div className={`slide-text ${id === 1 && "first-slide"} `}>
      <h1 className="slide-text_title">{t(title)}</h1>
      {console.log(path)}
      <Link to={`/${path}`}>
        <h2 className="slide-text_subtitle">{t(subtitle)}</h2>
      </Link>
    </div>
  );
};

export default SlideInfo;
