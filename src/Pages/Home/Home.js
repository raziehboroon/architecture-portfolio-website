import "./Home.scss";
import React from "react";
// import { useTranslation } from "react-i18next";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
// import { useGlobalContext } from "../../context";
import items from "../../data";

const Home = () => {
  // const { categories } = useGlobalContext();
  // const { t } = useTranslation();
  // const releaseDate = new Date("2021-03-07");
  // const timeDifference = new Date() - releaseDate;
  // const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <main>
      <Slider
        slideData={items.carousel}
        slideInfo={true}
        slideRightButton={true}
        slideLeftButton={true}
        slideDots={true}
        sliderWidth={100}
        sliderHeight={100}
        slideSize={"cover"}
      />

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
