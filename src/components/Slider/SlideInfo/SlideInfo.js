import React from "react";
import "./SlideInfo.scss";
import { useTranslation } from "react-i18next";

const SlideInfo = ({ id, title, subtitle }) => {
  const { t } = useTranslation();
  return (
    <div className={`slide-text ${id === 1 && "first-slide"} `}>
      <h1 className="slide-text_title">{t(title)}</h1>
      {/* <a href={`${item.path}`}> */}
      <h2 className="slide-text_subtitle">{t(subtitle)}</h2>
      {/* </a> */}
    </div>
  );
};

export default SlideInfo;
