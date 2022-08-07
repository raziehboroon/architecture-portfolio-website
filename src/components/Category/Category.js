import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context/context";

const Category = () => {
  const { categories, categoriesCount } = useGlobalContext();
  const { t } = useTranslation();

  return (
    <div className="category-container" id="categories">
      {categories.map((item, index) => {
        return (
          <article key={item.id} className="category">
            <Link to={`/projects/${item.name}`}>
              <img src={item.url} alt={item.title} />
              <div className="category-text">
                <h1 className="category-text_title">{t(item.title)}</h1>
                <h3 className="category-text_subtitle">{`${
                  categoriesCount[index]
                } ${t("project")}`}</h3>
                {/* <h3>{t(item.subtitle)}</h3> */}
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Category;
