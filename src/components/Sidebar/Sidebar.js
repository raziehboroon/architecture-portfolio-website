import React from "react";
import "./Sidebar.scss";
import { VscChromeClose } from "react-icons/vsc";
import Language from "../Language/Language";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context.js";
// import i18next from "i18next";
// import cookies from "js-cookie";
// import { languages } from "../Language/Language";
const Sidebar = () => {
  // const currentLanguageCode = cookies.get("i18next") || "en";
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  // useEffect(() => {
  //   // document.body.dir = currentLanguage.dir || "ltr";
  //   document.body.
  //   document.title = t("app_title");
  // }, [currentLanguage, t]);

  // const { t } = useTranslation();
  const { showSidebar, setShowSidebar } = useGlobalContext();

  return (
    <div className={`sidebar ${showSidebar && "open-sidebar"}`}>
      <div className="nav-icons">
        <Language />
        <VscChromeClose
          className="close-btn"
          onClick={() => setShowSidebar(false)}
        />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/project" className="nav-link changeDir">
            {t("nav_link1")}
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link changeDir">
            {t("nav_link2")}
          </a>
        </li>
        <li>
          <a href="/contact" className="nav-link changeDir">
            {t("nav_link3")}
          </a>
        </li>
      </ul>
      <div className="social-links">
        {/* <div className="line"></div> */}
        <a
          href="https://www.instagram.com/ameneh.seyyedi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {t("social_link1")}
        </a>
        <a
          href="https://www.linkedin.com/in/ameneh-sadat-seyyedi-komjani-67968b66/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {t("social_link2")}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
