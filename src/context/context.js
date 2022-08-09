import React, { useState, useContext, useEffect } from "react";
import data from "../data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //Home Page Carousel Data
  const [carousel, setCarousel] = useState([]);
  // all categories
  const [categories, setCategories] = useState([]);
  // all projects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setCarousel(data.carousel);
    setCategories(data.categories);
    setProjects(data.projects);
  }, []);

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
