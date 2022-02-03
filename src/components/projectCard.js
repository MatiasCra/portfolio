import React from "react";
import * as cardStyles from "./projectCard.module.css";
import { navigate } from "gatsby";

const ProjectCard = (props) => {
  const openProject = () => {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const opener = document.getElementById("project-opener")
    opener.classList.toggle("open-project")
    sleep(1000).then(() => {
      navigate("/project")
    })
  }

  return (
    <div
      id={props.id}
      className={cardStyles.card}
      style={{ "backgroundImage": `url(${props.image})` }}
      onClick={openProject}
    >
        <div className={cardStyles.overlay}>
          <h3 className={cardStyles.title}>Title</h3>
        </div>
    </div>
  );
};

export default ProjectCard;
