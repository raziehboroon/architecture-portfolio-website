import "./Slider.scss";
import React, { useEffect, useState } from "react";
import BtnSlider from "./BtnSlider";
import styled from "styled-components";
import SliderDots from "./SliderDots/SliderDots";
import SlideInfo from "./SlideInfo/SlideInfo";

const Slider = ({
  slideData,
  slideInfo,
  slideRightButton,
  slideLeftButton,
  slideDots,
  sliderWidth,
  sliderHeight,
  slideSize,
}) => {
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
    <SlideWrapper sliderWidth={sliderWidth} sliderHeight={sliderHeight}>
      {slideData.map((item, index) => {
        return (
          <div
            // key={item.id}
            key={index}
            className={`slide ${slideIndex === index + 1 && "active-anim"}`}
          >
            <SlideImage src={item.url} size={slideSize} />
            {slideInfo && (
              <SlideInfo
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
              ></SlideInfo>
            )}
          </div>
        );
      })}
      {slideLeftButton && (
        <BtnSlider direction={"Left"} moveSlide={prevSlide} />
      )}
      {slideRightButton && (
        <BtnSlider direction={"Right"} moveSlide={nextSlide} />
      )}
      {slideDots && (
        <SliderDots
          arrLength={slideData.length}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
      )}
    </SlideWrapper>
  );
};

export default Slider;

const SlideWrapper = styled.div`
  max-width: ${(props) => props.sliderWidth}%;
  height: ${(props) => props.sliderHeight}vh;
  /* Fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * (${(props) => props.sliderHeight}));
  position: relative;
  overflow: hidden;
  box-shadow: $light_shadow;
  flex-grow: 1;
`;

const SlideImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.size};
`;
