import React, { Suspense } from "react";
import { AppProvider } from "./context/context";
import ReactDOM from "react-dom";
import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "flag-icon-css/css/flag-icon.min.css";
//import flag icon css
import "./index.scss";
import App from "./App";

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

// append app to dom
// ReactDOM.render(<App />, document.getElementById("root"));
const loadingmarkUp = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);
ReactDOM.render(
  <Suspense fallback={loadingmarkUp}>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector) //we can add as much of we need from such middle ware or utilities
//   .init({
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     resources: {
//       en: {
//         translation: {
//           "Welcome to React": "Welcome to React and react-i18next",
//         },
//       },
//       fr: {
//         translation: {
//           "Welcome to React": "Bienvenue a react et react-i18next",
//         },
//       },
//     },
//     // lng: "en", // if you're using a language detector, do not define the lng option
//     // lng: document.querySelector("html").lang, //use the language of our index.html
//     fallbackLng: "en",
//     detection: {
//       //detect lang automatically from this places base on order that they come
//       order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
//       // cache user language on these places
//       caches: ["cookie"],
//     },
//   });

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t("welcome_to_React")}</h2>;
// }
