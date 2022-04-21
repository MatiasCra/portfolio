import React from "react";
//import navlinkStyles from "./navlink.module.css";

const NavLink = (props) => {
  return (
    <li className="self-center">
      <a
        href={props.href}
        className="mx-1 text-2xl text-left"
        //className={navlinkStyles.link}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavLink;
