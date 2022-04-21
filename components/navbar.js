import React from "react";
import NavLink from "./navlink";
import Hamburger from "../public/images/Hamburger_icon.svg";
import Close from "../public/images/close.svg";
// import { navigate } from "gatsby";

const Navbar = () => {
  // const toggleSideLinks = (e) => {
  //   document.getElementById("navLinks").classList.toggle(navbarStyles.show);
  //   document
  //     .getElementById("hamburgerBtn")
  //     .classList.toggle(navbarStyles.moveRight);
  // };

  // const closeSideLinks = (e) => {
  //   const navLinks = document.getElementById("navLinks");
  //   if (navLinks.classList.contains(navbarStyles.show)) {
  //     navLinks.classList.remove(navbarStyles.show);
  //     document
  //       .getElementById("hamburgerBtn")
  //       .classList.remove(navbarStyles.moveRight);
  //   }
  // };

  const scrollTo = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", "#" + elementId);
    // document.getElementById("navbar").classList.remove(navbarStyles.showNav);
  };

  const scrollToTop = () => {
    document.getElementById("start").scrollIntoView({ behavior: "smooth" });
    window.history.pushState({}, "", "/");
  };

  return (
    <nav
      className="flex flex-row justify-between items-center mx-auto my-0 py-6 w-full px-[10%] bg-zinc-900 z-50"
      // className={navbarStyles.navbar + " " + navbarStyles.showNav}
      id="navbar"
    >
      <div className="">
        <button
          className="border-none bg-transparent text-4xl font-bold uppercase font-sans tracking-wider"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
            closeSideLinks();
          }}
        >
          Matias Cravchik
        </button>
      </div>
      <ul
        className="list-none flex flex-row m-0 p-0 text-xlg font-sans uppercase"
        id="navLinks"
      >
        {/* <button
          className=""
          // onClick={toggleSideLinks}
        >
          <Close />
        </button> */}
        <NavLink
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
            closeSideLinks();
          }}
        >
          About
        </NavLink>
        <NavLink
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            // toggleSideLinks();
            scrollTo("projects");
          }}
        >
          Projects
        </NavLink>
        <NavLink
          href="#start"
          onClick={(e) => {
            e.preventDefault();
            // toggleSideLinks();
            scrollTo("contact");
          }}
        >
          Contact
        </NavLink>
      </ul>
      {/* <button
        className=""
        // onClick={toggleSideLinks}
        id="hamburgerBtn"
      >
        <Hamburger />
      </button> */}
    </nav>
  );
};

export default Navbar;
