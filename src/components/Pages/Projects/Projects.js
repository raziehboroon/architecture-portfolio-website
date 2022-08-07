import React, { useEffect } from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/context";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
const Projects = () => {
  const { currentProjects, setCurrentCategory } = useGlobalContext();
  const { t } = useTranslation();
  const { title } = useParams();
  useEffect(() => {
    setCurrentCategory(title);
  }, [title, setCurrentCategory]);

  return (
    <main className="projects-container">
      {currentProjects.map((project) => {
        return (
          <article key={project.id} className="project-container">
            <Link
              to={`/projects/${title}/${project.id}`}
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
    </main>
  );
};

export default Projects;
