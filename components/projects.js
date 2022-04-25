import React from "react";
import ProjectCard from "./projectCard";
//import image from "../images/projects/django-blog/DjangoBlog.png";

const Projects = ({ projects }) => {
  // React.useEffect(() => {
  //   const elements = Array.from(
  //     document.querySelector("#projectsGrid").children
  //   );
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (
  //         entry.isIntersecting &&
  //         !entry.target.classList.contains(projectsStyles.slide)
  //       ) {
  //         if (
  //           parseInt(entry.target.id.replace("project", "")) % 2 !== 0 ||
  //           window.screen.width <= 992
  //         ) {
  //           entry.target.classList.add(projectsStyles.slideDelay1);
  //         } else {
  //           entry.target.classList.add(projectsStyles.slideDelay2);
  //         }
  //         entry.target.classList.add(projectsStyles.slide);
  //       }
  //     });
  //   });
  //   if (elements) {
  //     elements.forEach((element) => {
  //       observer.observe(element);
  //     });
  //   }
  // });

  return (
    <div className="w-full flex flex-col bg-transparent" id="projects">
      <h2 className="uppercase text-6xl w-full text-center font-mono">
        Projects
      </h2>
      <div
        className="grid lg:grid-cols-2 h-max w-[98%] gap-4 mx-auto mt-3 lg:mt-8"
        id="projectsGrid"
      >
        {projects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              id={project.order}
              title={project.title}
              slug={project.slug}
              banner={project.banner}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

{
  /* <ProjectCard
  key={i}
  id={project.id}
  title={project.title}
  image={image}
  slug={project.slug}
/> */
}
