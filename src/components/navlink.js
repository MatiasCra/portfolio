import React from "react";
import * as navlinkStyles from "./navlink.module.css";

const NavLink = (props) => {
  return (
    <li>
      <a
        href={props.href}
        className={navlinkStyles.link}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavLink;
