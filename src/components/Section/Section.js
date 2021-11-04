import React from "react";
import "./Section.scss";
// import data from "../../data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Section = ({ url, title, subtitle, name }) => {
  const { t } = useTranslation();
  return (
    <article className="section">
      <img src={url} alt={title} />
      <div className="section-text">
        <h1 className="section-text_title">{t(title)}</h1>
        <Link to={`/projects/${name}`} className="section-text_subtitle">
          <h3>{t(subtitle)}</h3>
        </Link>
      </div>
    </article>
  );
};

export default Section;
