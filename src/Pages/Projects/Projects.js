import React from "react";
import "./Projects.scss";
import { useParams } from "react-router";
const Projects = () => {
  const { title } = useParams();
  console.log(title);
  return (
    <main className="projects-container">
      <article className="projects-container_item"></article>
    </main>
  );
};

export default Projects;
