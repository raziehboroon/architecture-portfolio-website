import React, { useEffect } from "react";
import "./SingleProject.scss";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from "react-i18next";
const SingleProject = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { setSingleProjectId, singleProjectArr } = useGlobalContext();
  // console.log(singleProjectArr);
  useEffect(() => {
    setSingleProjectId(parseInt(id));
  }, [id, setSingleProjectId]);
  // console.log(parseInt(id));
  // console.log(singleProjectArr);
  return (
    <div className="singleProject-container">
      {singleProjectArr.length !== 0 && (
        <>
          <Slider
            slideData={singleProjectArr[0].images}
            slideInfo={false}
            className="singleProject_slider"
          />
          <div className="singleProject_info">
            <h2>{t(singleProjectArr[0].title)}</h2>
            <h3>
              {t(singleProjectArr[0].location)}
              {" / "}
              <span>{t(singleProjectArr[0].year)}</span>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProject;
