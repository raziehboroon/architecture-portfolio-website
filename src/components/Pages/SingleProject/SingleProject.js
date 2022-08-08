import React, { useEffect } from "react";
import "./SingleProject.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/context";
// import Slider from "../../Slider/Slider";
import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons/lib";
import { RiLayoutGridFill } from "react-icons/ri";

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

const SingleProject = () => {
  const { t } = useTranslation();
  const { id, title } = useParams();
  const { setSingleProjectId, singleProjectArr, categories } =
    useGlobalContext();
  useEffect(() => {
    setSingleProjectId(parseInt(id));
  }, [id, setSingleProjectId]);

  const btnText = categories.find((cat) => cat.name === title).title;

  return (
    <main>
      {singleProjectArr.length !== 0 && (
        <div className="singleProject-container">
          <Swiper
            className="projectSwiper"
            direction="horizontal"
            slidesPerView={1}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            navigation
            pagination={{ clickable: true }}
            speed={800}
            keyboard
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            lazy={{ loadPrevNext: true }}
          >
            {singleProjectArr[0].images.map((image) => (
              <SwiperSlide key={image.id} className={"projectSwiper_slide"}>
                <img src={image.url} alt={t(image.title)} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <Slider
            slideData={singleProjectArr[0].images}
            slideInfo={false}
            slideRightButton={true}
            slideLeftButton={false}
            slideDots={false}
            sliderWidth={100}
            sliderHeight={60}
            slideSize={"contain"}
            className="singleProject_slider"
          /> */}
          <div className="singleProject_info">
            <div className="singleProject_text">
              <h2>{t(singleProjectArr[0].title)}</h2>
              <h3>
                {t(singleProjectArr[0].location)}
                {" / "}
                <span>{t(singleProjectArr[0].year)}</span>
              </h3>
            </div>
            <Link to={`/categories/${title}`} className="navigation_btn">
              <IconContext.Provider
                value={{ className: "navigation_btn_icon" }}
              >
                <RiLayoutGridFill />
              </IconContext.Provider>
              <h3>{` ${t("btn_prefix")} ${t(btnText)}`}</h3>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default SingleProject;
