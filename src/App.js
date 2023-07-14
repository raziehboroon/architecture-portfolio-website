// Site developed by: Razieh Boroom | Razieh.Boroon@gmail.com

// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import cookies from "js-cookie";
// import Language from "./components/Language/Language";
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Pages/Error/Error";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Pages/Projects/Projects";
import SingleProject from "./components/Pages/SingleProject/SingleProject";
import Works from "./components/Pages/Works/Works";

function App() {
  // const All = () => {
  //   const location = useLocation();
  //   console.log({ location });
  //   return <div>{location.pathname}</div>;
  // };
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<All />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="categories/:title" element={<Projects />} />
        {/* <Route path="categories/:title" children={<Projects />}></Route> */}
        <Route path="categories/:title/:id" element={<SingleProject />} />
        <Route path="categories" element={<Works />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
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
