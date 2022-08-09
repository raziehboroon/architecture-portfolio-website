import "./Projects.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// Context
import { useGlobalContext } from "../../../context/context";
// Funstion(s)
import { filterProjects } from "../../../helpers/functions";
// Translator
import { useTranslation } from "react-i18next";
// Icon(s)
import { IconContext } from "react-icons/lib";
import { RiLayoutGridFill } from "react-icons/ri";

const Projects = () => {
  const { projects } = useGlobalContext();
  const [currentProjects, setCurrentProjects] = useState([]);
  const { t } = useTranslation();
  const { title } = useParams();

  useEffect(() => {
    setCurrentProjects(filterProjects(title, projects));
  }, [title, projects]);

  return (
    <div className="projects-section">
      <section className="projects-container">
        {currentProjects.map((project) => {
          return (
            <article key={project.id} className="project-container">
              <Link
                to={`/categories/${title}/${project.id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={project.images[0].url} alt={t(project.title)} />
                <div className="project-footer">
                  <h4>{t(project.title)}</h4>
                </div>
                <div className="project-overrelay">
                  <h3>{t(project.title)}</h3>
                  <br />
                  <h4>{t(project.location)}</h4>
                  <h4>{t(project.year)}</h4>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
      <Link to="/categories" className="navigation_btn">
        <IconContext.Provider value={{ className: "navigation_btn_icon" }}>
          <RiLayoutGridFill />
        </IconContext.Provider>
        <h3>{` ${t("btn_all_categories")}`}</h3>
      </Link>
    </div>
  );
};

export default Projects;
