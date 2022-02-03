import React from "react";
import * as navbarStyles from "./navbar.module.css";
import NavLink from "./navlink";
import Hamburger from "../images/Hamburger_icon.svg";
import Close from "../images/close.svg";
// import { navigate } from "gatsby";

const Navbar = () => {
  const toggleSideLinks = (e) => {
    document.getElementById("navLinks").classList.toggle(navbarStyles.show);
    document
      .getElementById("hamburgerBtn")
      .classList.toggle(navbarStyles.moveRight);
  };

  const closeSideLinks = (e) => {
    const navLinks = document.getElementById("navLinks")
    if(navLinks.classList.contains(navbarStyles.show)){
      navLinks.classList.remove(navbarStyles.show)
      document
        .getElementById("hamburgerBtn")
        .classList.remove(navbarStyles.moveRight);
    }
  }

  const scrollTo = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", "#" + elementId);
  };

  const scrollToTop = () => {
    document.getElementById("start").scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", "/");
  }

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.title}>
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
            closeSideLinks();
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
            scrollToTop();
            toggleSideLinks();
          }}
        >
          About
        </NavLink>
        <NavLink
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            toggleSideLinks();
            scrollTo("projects");
          }}
        >
          Projects
        </NavLink>
        <NavLink
          href="#start"
          onClick={(e) => {
            e.preventDefault();
            toggleSideLinks();
            scrollTo("contact");
          }}
        >
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
