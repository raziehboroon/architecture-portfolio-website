import "./index.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context/context";
// Component(s)
import App from "./App";
import Loading from "./components/Loading/Loading";
// Translator
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
//import flag icon css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "flag-icon-css/css/flag-icon.min.css";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) //we can add as much of we need from such middle ware or utilities
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fa"],
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "path", "cookie", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: { loadPath: "/assets/locales/{{lng}}/translation.json" },
    // react: {
    //   useSuspense: false,
    // },
  });

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
