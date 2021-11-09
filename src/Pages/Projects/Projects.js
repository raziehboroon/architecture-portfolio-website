import React, { useEffect } from "react";
import "./Projects.scss";
import { useGlobalContext } from "../../context";
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
          <article key={project.id} className="projects-container_item">
            <img src={project.images[0].url} alt={t(project.title)} />
            <h4>{t(project.title)}</h4>
          </article>
        );
      })}
    </main>
  );
};

export default Projects;
