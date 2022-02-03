import React from "react";
import * as projectStyles from "./project.module.css";
import Close from "../images/close.svg";
import { navigate } from "gatsby";

const Project = (props) => {
  const closeProject = () => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const container = document.getElementById("projectContainer");
    container.classList.toggle(projectStyles.closeContainer);
    sleep(500).then(() => {
      const overlay = document.getElementById("projectOverlay");
      overlay.classList.toggle(projectStyles.close);
      container.classList.toggle(projectStyles.close);
      sleep(700).then(() => {
        // navigate("/#" + props.pageContext.project.id)
        navigate("/#projects")
      })
    });
  };

  return (
    <div className={projectStyles.container} id="projectContainer">
      <div className={projectStyles.overlay} id="projectOverlay"></div>
      <button className={projectStyles.closeMenu} onClick={closeProject}>
        <Close />
      </button>
      <h1 className={projectStyles.title}>{props.pageContext.project.title}</h1>
      <p style={{ fontSize: "1.3rem", width: "90%", marginInline: "auto" }}>
        Mollit Lorem fugiat consequat ad exercitation do mollit. Nulla labore
        nostrud id consequat. Ullamco fugiat amet consequat ad veniam ullamco
        ipsum. Commodo quis duis qui irure. Sint cupidatat aliquip est esse amet
        ullamco veniam. Incididunt excepteur pariatur irure exercitation veniam
        est sunt do sit incididunt. Voluptate non velit ex exercitation in
        cillum aliqua veniam eu sint tempor. Esse dolor cillum occaecat amet
        occaecat enim minim reprehenderit do consectetur nostrud cillum
        exercitation Lorem. Proident exercitation ad velit consectetur esse
        deserunt laboris dolore. Aute dolor adipisicing in elit pariatur
        exercitation reprehenderit exercitation mollit cupidatat ullamco. Qui eu
        do qui sunt ullamco. Labore duis aliqua cupidatat dolor officia dolor
        proident ex consequat laborum. Aliquip mollit sint proident
        reprehenderit mollit aute.
      </p>
    </div>
  );
};

export default Project;
