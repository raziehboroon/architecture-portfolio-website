import "./About.scss";
import React from "react";
import NavigationButtons from "../../NavigationButtons/NavigationButtons";

const About = () => {
  return (
    <div className="about-section">
      <h2>you will read about me one day ! </h2>
      <NavigationButtons name={"nav_link1"} />
    </div>
  );
};

export default About;
