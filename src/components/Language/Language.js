import "./Language.scss";
import React, { useEffect } from "react";
// Translation
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import GlobeIcon from "../GlobeIcon/GlobeIcon";

export const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb ",
  },
  {
    code: "fa",
    name: "فارسی",
    country_code: "ir",
    dir: "rtl",
  },
];

const Language = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="dropdown">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <GlobeIcon />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {/* <li>
          <span className="dropdown-item-text">{t("language")}</span>
        </li> */}
        {languages.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button
              className="dropdown-item"
              onClick={() => i18next.changeLanguage(code)}
              disabled={code === currentLanguageCode}
            >
              <span
                className={`flag-icon flag-icon-${country_code} mx-2`}
                style={{ opacity: code === currentLanguageCode ? 0.5 : 1 }}
              ></span>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
