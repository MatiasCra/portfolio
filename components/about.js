import React from "react";
import Avatar from "../public/images/avatar.png";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="mx-auto flex flex-row-reverse justify-between items-center w-4/5"
      style={{height: "75vh"}}
    >
      <div className="flext items-center text-xl w-1/2 ml-8">
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
      <Image src={Avatar} alt="matias cravchik" 
      className="rounded-full aspect-square w-auto" />
    </div>
  );
};

export default About;
