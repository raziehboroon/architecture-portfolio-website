import "./Projects.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// Context
import { useGlobalContext } from "../../../context/context";
// Funstion(s)
import { filterProjects } from "../../../helpers/functions";
// Component(s)
import NavigationButtons from "../../NavigationButtons/NavigationButtons";

// Translator
import { useTranslation } from "react-i18next";

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
      <NavigationButtons name={"btn_all_categories"} />
    </div>
  );
};

export default Projects;
