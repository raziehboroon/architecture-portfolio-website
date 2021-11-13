import React from "react";
import "./SliderDots.scss";

const SliderDots = ({ arrLength, slideIndex, setSlideIndex }) => {
  return (
    <div className="dot-container">
      {Array.from({ length: arrLength }).map((dot, index) => (
        <div
          key={index}
          className={`dot ${slideIndex === index + 1 && "active"}`}
          onClick={() => setSlideIndex(index + 1)}
        ></div>
      ))}
    </div>
  );
};

export default SliderDots;
