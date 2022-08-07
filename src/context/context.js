import React, { useState, useContext, useEffect } from "react";
import data from "../data";
// import SingleProject from "./Pages/SingleProject/SingleProject";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  // all categories
  const [categories, setCategories] = useState([]);
  // all projects
  const [projects, setProjects] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState([]);

  // the category name that we want it's project to get filtered
  const [currentCategory, setCurrentCategory] = useState("");
  // filtered projects of a specific category
  const [currentProjects, setCurrentProjects] = useState([]);
  //singleProject id
  const [singleProjectId, setSingleProjectId] = useState(0);
  // single project array
  const [singleProjectArr, setSingleProjectArr] = useState([]);

  useEffect(() => {
    setCategories(data.categories);
    setProjects(data.projects);
  }, []);

  useEffect(() => {
    const countProjects = () => {
      return categories.map((category, index) => {
        return projects.filter((project, index) =>
          project.category.includes(category.name)
        ).length;
      });
    };
    setCategoriesCount(countProjects());
  }, [categories, projects]);

  useEffect(() => {
    const filterProjects = (currentCategory) =>
      projects.filter((project) => project.category.includes(currentCategory));

    setCurrentProjects(filterProjects(currentCategory));
  }, [currentCategory, projects]);

  // console.log(categoriesCount);

  useEffect(() => {
    const getSingleProject = (singleProjectId) => {
      return projects.filter((project) => project.id === singleProjectId);
    };
    setSingleProjectArr(getSingleProject(singleProjectId));
  }, [singleProjectId, projects]);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        categories,
        categoriesCount,
        setCurrentCategory,
        currentProjects,
        setSingleProjectId,
        singleProjectArr,
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
