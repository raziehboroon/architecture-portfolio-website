import React, { useState, useContext, useEffect } from "react";
import data from "../data";
// Function(s)
import { getFeaturedProject } from "../helpers/functions";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // information
  const [mainInfo, setMainInfo] = useState([]);
  //Home Page Carousel Data
  const [carousel, setCarousel] = useState([]);
  // all categories
  const [categories, setCategories] = useState([]);
  // all projects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setMainInfo(data.mainInfo);
    setCategories(data.categories);
    setProjects(data.projects);
  }, []);

  useEffect(() => {
    setCarousel(getFeaturedProject(mainInfo, projects));
  }, [projects, mainInfo]);

  return (
    <AppContext.Provider
      value={{
        carousel,
        categories,
        projects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
