import React, { useEffect } from "react";
import "./SingleProject.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from "react-i18next";
import { RiLayoutGridFill } from "react-icons/ri";

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
    <>
      {singleProjectArr.length !== 0 && (
        <div className="singleProject-container">
          <Slider
            slideData={singleProjectArr[0].images}
            slideInfo={false}
            slideRightButton={true}
            slideLeftButton={false}
            slideDots={false}
            sliderWidth={100}
            sliderHeight={60}
            slideSize={"contain"}
            className="singleProject_slider"
          />
          <div className="singleProject_info">
            <div className="singleProject_text">
              <h2>{t(singleProjectArr[0].title)}</h2>
              <h3>
                {t(singleProjectArr[0].location)}
                {" / "}
                <span>{t(singleProjectArr[0].year)}</span>
              </h3>
            </div>
            <Link to={`/projects/${title}`} className="singleProject_btn">
              <h3>
                <RiLayoutGridFill className="singleProject_icon" />

                {` ${t("btn_prefix")} ${t(btnText)}`}
              </h3>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProject;
