import React from "react";
import * as cardStyles from "./projectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div
      id={props.id}
      className={cardStyles.card}
      style={{ "backgroundImage": `url(${props.image})` }}
    >
        <div className={cardStyles.overlay}>
          <h3 className={cardStyles.title}>Title</h3>
        </div>
    </div>
  );
};

export default ProjectCard;
