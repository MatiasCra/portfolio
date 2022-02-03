import React from "react";
import Avatar from "../images/avatar.png";
import * as aboutStyles from "./about.module.css";

const About = () => {
  return (
    <div id="about" className={aboutStyles.container}>
      <div className={aboutStyles.textContainer}>
        Occaecat dolore anim culpa qui nisi pariatur ut aliquip sunt aute. Magna
        pariatur voluptate voluptate ex aliquip proident fugiat amet. Officia
        amet velit dolor eu incididunt irure consectetur magna cupidatat commodo
        magna cupidatat deserunt dolor. Est ut est ea mollit do duis tempor qui
        elit nulla et anim eu in. Eu sint nulla sint laborum nisi nostrud minim
        commodo pariatur sunt commodo. Non aute enim ut veniam officia irure
        anim anim exercitation officia cillum aliquip. Nulla culpa nostrud
        ullamco qui Lorem occaecat labore quis veniam quis non.
        <br />
        <br />
        Occaecat dolore anim culpa qui nisi pariatur ut aliquip sunt aute. Magna
        pariatur voluptate voluptate ex aliquip proident fugiat amet. Officia
        amet velit dolor eu incididunt irure consectetur magna cupidatat commodo
        magna cupidatat deserunt dolor.
      </div>
      <img src={Avatar} alt="matias cravchik" className={aboutStyles.avatar} />
    </div>
  );
};

export default About;
