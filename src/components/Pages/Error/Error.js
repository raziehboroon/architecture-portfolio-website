import "./Error.scss";
import React from "react";
import { Link } from "react-router-dom";
// Translator
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t } = useTranslation();

  return (
    <section className="error-section">
      <div className="error-container">
        <div className="error-content">
          <h3>{`${t("error_title")}`}</h3>
          <h2>{`${t("error_subtitle")}`}</h2>
          <p>{`${t("error_text")}`}</p>
          <Link to="/">
            <button type="button" className="error-btn">
              {`${t("error_btn")}`}
            </button>
          </Link>
        </div>

        <div className="error-image-container">
          <img src="/img/logo404-cropped.svg" alt="404 illustration" />
        </div>
      </div>
    </section>
  );
};

export default Error;
