import React from "react";
import Linkedin from "../public/images/linkedin.svg";
import Github from "../public/images/github.svg";
import Mail from "../public/images/mail.svg";

const Footer = () => {
  return (
    <footer
      //className={footerStyles.footer}
      className="w-full px-0 py-8 flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center w-full">
        <a
          href="https://www.linkedin.com/in/matias-cravchik-9287991a3/"
          target="_blank"
          rel="noreferrer"
          className="mx-[2%]"
        >
          <Linkedin className="fill-zinc-300" />
        </a>
        <a
          href="https://github.com/MatiasCra"
          target="_blank"
          rel="noreferrer"
          className="mx-[2%]"
        >
          <Github className="fill-zinc-300" />
        </a>
        <a href="mailto: cravchikm@gmail.com" className="mx-[2%]">
          <Mail className="fill-zinc-300" />
        </a>
      </div>
      <span className="mt-6 text-lg font-sans opacity-80">
        © Matías Cravchik, 2022
      </span>
    </footer>
  );
};

export default Footer;
