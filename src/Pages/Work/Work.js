import React from "react";
import "./Work.scss";
import data from "../../data";
import Category from "../../components/Category/Category";
const Work = () => {
  return (
    <div className="category-container">
      {data.categories.map((item) => (
        <Category key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Work;
