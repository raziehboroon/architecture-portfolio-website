import "./Home.scss";
import React from "react";
// import { useTranslation } from "react-i18next";
import Slider from "../../components/Slider/Slider";
import data from "../../data";
import Section from "../../components/Section/Section";
const Home = () => {
  // const { t } = useTranslation();
  // const releaseDate = new Date("2021-03-07");
  // const timeDifference = new Date() - releaseDate;
  // const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <main>
      <Slider />
      <div className="section-container">
        {data.sections.map((item) => (
          <Section key={item.id} {...item} />
        ))}
      </div>
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
