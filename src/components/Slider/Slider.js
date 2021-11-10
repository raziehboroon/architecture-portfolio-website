import "./Slider.scss";
import React, { useEffect, useState } from "react";
import BtnSlider from "./BtnSlider";
import { useTranslation } from "react-i18next";

const Slider = ({ slideData, slideInfo }) => {
  const { t } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    slideIndex < slideData.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1);
  };
  const prevSlide = () => {
    slideIndex > 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(slideData.length);
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      slideIndex >= slideData.length
        ? setSlideIndex(1)
        : setSlideIndex(slideIndex + 1);
    }, 5000);
    return () => clearInterval(autoPlay);
  });

  return (
    <div className="slider-container">
      {slideData.map((item, index) => {
        return (
          <div
            // key={item.id}
            key={index}
            className={`slide ${slideIndex === index + 1 && "active-anim"}`}
          >
            <img src={item.url} alt={""} />
            {/* alt={t(item.title)} */}
            {slideInfo && (
              <div className={`slide-text ${item.id === 1 && "first-slide"} `}>
                <h1 className="slide-text_title">{t(item.title)}</h1>
                {/* <a href={`${item.path}`}> */}
                <h2 className="slide-text_subtitle">{t(item.subtitle)}</h2>
                {/* </a> */}
              </div>
            )}
          </div>
        );
      })}
      <BtnSlider direction={"Left"} moveSlide={prevSlide} />
      <BtnSlider direction={"Right"} moveSlide={nextSlide} />

      <div className="dot-container">
        {Array.from({ length: slideData.length }).map((dot, index) => (
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
