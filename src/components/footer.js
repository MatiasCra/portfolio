import React from "react";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/github.svg";
import Mail from "../images/mail.svg";
import * as footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
    <div className={footerStyles.mediaIcons}>
        <a
          href="https://www.linkedin.com/in/matias-cravchik-9287991a3/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a href="https://github.com/MatiasCra" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a href="mailto: cravchikm@gmail.com">
          <Mail />
        </a>
      </div>
      <span>© Matías Cravchik, 2022</span>
    </footer>
  );
};

export default Footer;
