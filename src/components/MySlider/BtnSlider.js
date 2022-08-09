import "./Slider.scss";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={`btn-slide ${direction === "Right" ? "next" : "prev"}`}
    >
      {direction === "Right" ? (
        <FaChevronRight className="btn-slide-icon" />
      ) : (
        <FaChevronLeft className="btn-slide-icon" />
      )}
    </button>
  );
};

export default BtnSlider;
