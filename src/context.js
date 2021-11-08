import React, { useState, useContext, useEffect } from "react";
import data from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data.categories);
  }, []);

  return (
    <AppContext.Provider value={{ showSidebar, setShowSidebar, categories }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
