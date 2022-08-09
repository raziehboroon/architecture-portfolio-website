import "./Category.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Translator
import { useTranslation } from "react-i18next";
// Context
import { useGlobalContext } from "../../context/context";
//Function(s)
import { countProjects } from "../../helpers/functions";

const Category = () => {
  const { categories, projects } = useGlobalContext();
  const { t } = useTranslation();
  const [categoriesCount, setCategoriesCount] = useState([]);

  useEffect(() => {
    setCategoriesCount(countProjects(categories, projects));
  }, [categories, projects]);

  return (
    <div className="category-container" id="categories">
      {categoriesCount &&
        categories.map((item, index) => {
          return (
            <article key={item.id} className="category">
              <Link to={`/categories/${item.name}`}>
                <img src={item.url} alt={item.title} />
                <div className="category-text">
                  <h1 className="category-text_title">{t(item.title)}</h1>
                  <h3 className="category-text_subtitle">{`${
                    categoriesCount[index]
                  } ${t("project")}`}</h3>
                </div>
              </Link>
            </article>
          );
        })}
    </div>
  );
};

export default Category;
