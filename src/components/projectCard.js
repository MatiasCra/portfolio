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
    document.getElementById("start").classList.toggle("open-project")
    sleep(750).then(() => {
      navigate("/project/" + props.slug)
    })
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      openProject();
    }
  }

  return (
    <div
      id={props.id}
      className={cardStyles.card}
      style={{ "backgroundImage": `url(${props.image})` }}
      onClick={openProject}
      role="button"
      tabIndex="0"
      onKeyPress={handleKeyPress}
    >
        <div className={cardStyles.overlay}>
          <h3 className={cardStyles.title}>{props.title}</h3>
        </div>
    </div>
  );
};

export default ProjectCard;
