import React from "react";
import Avatar from "../public/images/avatar.png";
import Image from "next/image";

const About = () => {

  return (
    <div
      id="about"
      className={`hidden transition-all mx-auto flex flex-col-reverse lg:flex-row-reverse justify-between items-center w-4/5 lg:mt-0}`}
    >
      <div className="flex my-10 items-center text-xl lg:w-1/2 lg:ml-8">
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
      <Image
        src={Avatar}
        alt="matias cravchik"
        className="rounded-full aspect-square w-auto"
      />
    </div>
  );
};

export default About;
