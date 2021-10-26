// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import cookies from "js-cookie";
// import Language from "./components/Language/Language";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// const { t } = useTranslation();
// const releaseDate = new Date("2021-03-07");
// const timeDifference = new Date() - releaseDate;
// const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// <div className="container">
//   <div className="d-flex justify-content-end">
//     <Language />
//   </div>
//   <div className="d-flex flex-column align-items-start">
//     <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
//     <p>{t("days_since_release", { number_of_days })}</p>
//   </div>
// </div>
