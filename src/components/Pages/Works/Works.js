import "./Works.scss";
import React from "react";
// Component(s)
import Category from "../../Category/Category";
import NavigationButtons from "../../NavigationButtons/NavigationButtons";

const Works = () => {
  return (
    <div className="works-container">
      <Category />
      <NavigationButtons name={"nav_link1"} url={"/"} />
    </div>
  );
};

export default Works;
