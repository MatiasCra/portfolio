import React from "react";
import ProjectCard from "./projectCard";
//import image from "../images/projects/django-blog/DjangoBlog.png";
import Link from "next/link";
import {useRouter} from "next/router";

const Projects = ({projects}) => {
    const router = useRouter();
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

    const openProject = (slug) => {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        document.getElementById("start").classList.add("open-project");
        sleep(400).then(() => {
            router.push(`/projects/${slug}`);
        });
    };

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
                    if (i === projects.length - 1)
                        return
                    return (
                        <ProjectCard
                            key={i}
                            id={project.order}
                            title={project.title}
                            slug={project.slug}
                            banner={project.banner}
                            openProject={openProject}
                        />
                    );
                })}
                <Link href="/projects/portfolio">
                    <span className="text-xl mt-3 ml-1 hover:cursor-pointer hover:bg-gradient-to-r
                                     hover:from-[#F7768E] hover:to-orange-400 hover:bg-clip-text
                                     hover:text-transparent text-[#7AA2F7] w-fit"
                          onClick={() => openProject("portfolio")}
                    >
                        About this project...
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Projects;