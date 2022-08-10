import "./Home.scss";
import React from "react";
import { Link } from "react-router-dom";
// Translator
import { useTranslation } from "react-i18next";
// Component(s)
import Category from "../../Category/Category";
// Context
import { useGlobalContext } from "../../../context/context";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// Swiper Modules
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
  const { carousel } = useGlobalContext();
  const { t } = useTranslation();

  return (
    <main>
      {/* Carousel */}

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
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        lazy={true}
        followFinger={false}
      >
        {/* Swiper Slides */}
        {carousel &&
          carousel.map((item, index) => (
            <SwiperSlide key={item.id} className="homeSwiper_slide">
              <img src={item.url || item.images[0].url} alt={t(item.title)} />
              <div className={"slide-text"}>
                <Link
                  to={item.path || `/categories/${item.category[0]}/${item.id}`}
                  className={`${item.path && "first-slide"}`}
                >
                  <h1 className="slide-text_title">{t(item.title)}</h1>
                  <h2 className="slide-text_subtitle">
                    {item.path
                      ? t("carousel_subtitle_1")
                      : t("carousel_subtitle_2")}
                  </h2>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Categories */}
      <Category />
    </main>
  );
};

export default Home;
