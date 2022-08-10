import "./SingleProject.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// Context
import { useGlobalContext } from "../../../context/context";
// Component(s)
// import NavigationButtons from "../../NavigationButtons/NavigationButtons";
// Function(s)
import { getSingleProject } from "../../../helpers/functions";
// Translator
import { useTranslation } from "react-i18next";
// Icon(s)
import { IconContext } from "react-icons/lib";
import { RiLayoutGridFill } from "react-icons/ri";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

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

const SingleProject = () => {
  const [singleProjectArr, setSingleProjectArr] = useState([]);
  const { categories, projects } = useGlobalContext();
  const { t } = useTranslation();
  const { id, title } = useParams();

  useEffect(() => {
    setSingleProjectArr(getSingleProject(parseInt(id), projects));
  }, [id, projects]);

  const btnText = categories.find((cat) => cat.name === title).title;

  return (
    <div className="singleProject-section">
      {singleProjectArr.length !== 0 && (
        <div className="singleProject-container">
          {/* single project Carousel */}
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
          {/* single project info */}
          <div className="singleProject_info">
            <div className="singleProject_text">
              <h2>{t(singleProjectArr[0].title)}</h2>
              <h3>
                {t(singleProjectArr[0].location)}
                {" / "}
                <span>{t(singleProjectArr[0].year)}</span>
              </h3>
            </div>
            {/* Navigation Button */}
            <Link to={`/categories/${title}`} className="navigation_btn">
              <IconContext.Provider
                value={{ className: "navigation_btn_icon" }}
              >
                <RiLayoutGridFill />
              </IconContext.Provider>
              <h3>{` ${t("btn_prefix")} ${t(btnText)}`}</h3>
            </Link>
            {/* <NavigationButtons name={"btn_prefix"} name1={btnText} /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
