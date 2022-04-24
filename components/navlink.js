import React from "react";

const NavLink = (props) => {
  return (
    <li className="self-center my-6 lg:my-0">
      <a
        href={props.href}
        className="text-3xl text-center lg:mx-1 lg:text-2xl lg:text-left"
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavLink;
