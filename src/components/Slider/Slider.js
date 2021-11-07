import "./Slider.scss";
import React, { useEffect, useState } from "react";
import items from "../../data";
import BtnSlider from "./BtnSlider";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    slideIndex < items.carousel.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1);
  };
  const prevSlide = () => {
    slideIndex > 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(items.carousel.length);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      slideIndex >= items.carousel.length
        ? setSlideIndex(1)
        : setSlideIndex(slideIndex + 1);
    }, 5000);
    return () => clearInterval(autoPlay);
  });

  return (
    <div className="slider-container">
      {items.carousel.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`slide ${slideIndex === index + 1 && "active-anim"}`}
          >
            <img src={item.url} alt={item.title} />
            <div className={`slide-text ${item.id === 0 && "first-slide"} `}>
              <h1 className="slide-text_title">{t(item.title)}</h1>
              {/* <a href={`${item.path}`}> */}
              <h2 className="slide-text_subtitle">{t(item.subtitle)}</h2>
              {/* </a> */}
            </div>
          </div>
        );
      })}
      <BtnSlider direction={"Left"} moveSlide={prevSlide} />
      <BtnSlider direction={"Right"} moveSlide={nextSlide} />

      <div className="dot-container">
        {Array.from({ length: items.carousel.length }).map((dot, index) => (
          <div
            key={index}
            className={`dot ${slideIndex === index + 1 && "active"}`}
            onClick={() => setSlideIndex(index + 1)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
