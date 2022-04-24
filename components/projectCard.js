import React from "react";
import { useRouter } from "next/router";

const ProjectCard = (props) => {
  const router = useRouter();

  const openProject = () => {
    router.push(`/projects/${props.slug}`);
    // function sleep(ms) {
    //   return new Promise(resolve => setTimeout(resolve, ms));
    // }

    // const opener = document.getElementById("project-opener")
    // opener.classList.toggle("open-project")
    // document.getElementById("start").classList.toggle("open-project")
    // sleep(750).then(() => {
    //   navigate("/project/" + props.slug)
    // })
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      openProject();
    }
  };

  return (
    <div className="relative">
      <div
        className="bg-center
                bg-gradient-to-r from-[#7AA2F7] to-indigo-500
                 bg-no-repeat absolute top-0 w-full h-full rounded-sm"
      ></div>
      <div
        id={props.id}
        className="bg-center bg-[url('/images/projects/django-blog/DjangoBlog.png')] bg-no-repeat
                   bg-contain relative"
        onClick={openProject}
        role="button"
        tabIndex="0"
        onKeyPress={handleKeyPress}
      >
        <div
          id="#projectOverlay"
          className="w-full py-24 transition-all opacity-0 bg-neutral-900 hover:opacity-90"
          onClick={openProject}
        >
          <h3 className="text-center text-6xl">{props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
