import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Category = ({ url, title, subtitle, name }) => {
  const { t } = useTranslation();
  return (
    <article className="category">
      <img src={url} alt={title} />
      <div className="category-text">
        <h1 className="category-text_title">{t(title)}</h1>
        <Link to={`/projects/${name}`} className="category-text_subtitle">
          <h3>{t(subtitle)}</h3>
        </Link>
      </div>
    </article>
  );
};

export default Category;
