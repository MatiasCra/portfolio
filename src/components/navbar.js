import React from "react";
import * as navbarStyles from "./navbar.module.css";
import NavLink from "./navlink";
import Hamburger from "../images/Hamburger_icon.svg";
import Close from "../images/close.svg";
import { navigate } from "gatsby";

const Navbar = () => {
  const toggleSideLinks = (e) => {
    document.getElementById("navLinks").classList.toggle(navbarStyles.show);
    document
      .getElementById("hamburgerBtn")
      .classList.toggle(navbarStyles.moveRight);
  };

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.title}>
        <button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Matias Cravchik
        </button>
      </div>
      <ul className={navbarStyles.linksList} id="navLinks">
        <button className={navbarStyles.closeMenu} onClick={toggleSideLinks}>
          <Close />
        </button>
        <NavLink
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            window.scrollTo(0, 0);
            toggleSideLinks();
          }}
        >
          About
        </NavLink>
        <NavLink href="#projects" onClick={toggleSideLinks}>
          Projects
        </NavLink>
        <NavLink href="#start" onClick={toggleSideLinks}>
          Contact
        </NavLink>
      </ul>
      <button
        className={navbarStyles.hamburger}
        onClick={toggleSideLinks}
        id="hamburgerBtn"
      >
        <Hamburger />
      </button>
    </nav>
  );
};

export default Navbar;
