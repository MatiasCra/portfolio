import React from "react";
import * as projectsStyles from "./projects.module.css";
import ProjectCard from "./projectCard";
import image from "../images/projects/DjangoBlog.png";
import { projects } from "../projects";

const Projects = () => {
  React.useEffect(() => {
    const elements = Array.from(
      document.querySelector("#projectsGrid").children
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains(projectsStyles.slide)
        ) {
          if (
            parseInt(entry.target.id.replace("project", "")) % 2 !== 0 ||
            window.screen.width <= 992
          ) {
            entry.target.classList.add(projectsStyles.slideDelay1);
          } else {
            entry.target.classList.add(projectsStyles.slideDelay2);
          }
          entry.target.classList.add(projectsStyles.slide);
        }
      });
    });
    if (elements) {
      elements.forEach((element) => {
        observer.observe(element);
      });
    }
  });

  return (
    <div className={projectsStyles.container} id="projects">
      <h2 className={projectsStyles.title}>Projects</h2>
      <div className={projectsStyles.projectsGrid} id="projectsGrid">
        {projects().map((project, i) => {
          return <ProjectCard key={i} id={project.id} title={project.title} image={image} slug={project.slug} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
