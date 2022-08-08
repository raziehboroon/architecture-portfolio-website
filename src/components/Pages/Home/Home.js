import "./Home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Slider from "../../Slider/Slider";
import Category from "../../Category/Category";
// import { useGlobalContext } from "../../context";
import items from "../../../data";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Keyboard,
  Parallax,
  Autoplay,
  Lazy,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Keyboard,
  Parallax,
  Autoplay,
  Lazy,
]);
const Home = () => {
  // const { categories } = useGlobalContext();
  const { t } = useTranslation();
  // const releaseDate = new Date("2021-03-07");
  // const timeDifference = new Date() - releaseDate;
  // const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <main>
      <Swiper
        className="homeSwiper"
        // direction="horizontal"
        // spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        // onSlideChange={() => console.log("slide change")}
        // scrollbar
        navigation
        pagination={{ clickable: true }}
        speed={800}
        keyboard
        // Parallax={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        lazy={true}
      >
        {items.carousel.map((item) => (
          <SwiperSlide key={item.id} className="homeSwiper_slide">
            <img src={item.url} alt={t(item.title)} />
            <div className={"slide-text"}>
              <Link
                to={item.path}
                className={`${item.id === 1 && "first-slide"}`}
              >
                <h1 className="slide-text_title">{t(item.title)}</h1>

                <h2 className="slide-text_subtitle">{t(item.subtitle)}</h2>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Slider
        slideData={items.carousel}
        slideInfo={true}
        slideRightButton={true}
        slideLeftButton={true}
        slideDots={true}
        sliderWidth={100}
        sliderHeight={100}
        slideSize={"cover"}
      /> */}

      {/* {categories.map((item) => (
          <Category key={item.id} {...item} />
        ))} */}
      <Category />
      {/* <main className="banner">
        <div className="container">
          <div className="d-flex justify-content-end"></div>
          <div className="d-flex flex-column align-items-start">
            <h1 className="font-weight-normal mb-3">{t("app_title")}</h1>
            <p>{t("days_since_release", { number_of_days })}</p>
          </div>
        </div>
      </main> */}
    </main>
  );
};

export default Home;
