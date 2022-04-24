import React from "react";
import NavLink from "./navlink";
import Hamburger from "../public/images/Hamburger_icon.svg";
import Close from "../public/images/close.svg";

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

  const closeSideLinks = (e) => {
    const links = document.getElementById("navLinks");
    if (links.classList.contains("right-0")) {
      links.classList.toggle("-right-full");
      links.classList.toggle("right-0");
    }
  };

  const toggleSideLinks = (e) => {
    const links = document.getElementById("navLinks");
    links.classList.toggle("-right-full");
    links.classList.toggle("right-0");
  };

  const scrollTo = (elementId) => {
    // Add navbar height to scroll location
    const scrollLoc =
      document.getElementById(elementId).offsetTop -
      document.getElementById("navbar").offsetHeight;
    window.scrollTo({ top: scrollLoc, behavior: "smooth" });
    //window.history.pushState({}, "", "#" + elementId);
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
          className="border-none bg-transparent text-3xl sm:text-4xl font-bold uppercase font-sans tracking-wider"
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
        className="list-none text-xlg font-sans uppercase absolute -right-full transition-all
                   duration-[400ms] ease-in-out h-screen top-0 p-12 flex justify-center flex-col
                   w-full sm:w-1/2 bg-neutral-900 bg-opacity-90 backdrop-blur-sm
                   lg:static lg:flex lg:flex-row lg:m-0 lg:p-0 lg:h-auto lg:w-auto lg:bg-transparent"
        id="navLinks"
      >
        <button
          className="absolute top-6 right-10 fill-slate-50 lg:hidden"
          onClick={toggleSideLinks}
        >
          <Close className="h-10 w-10" />
        </button>
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
            scrollTo("projects");
            closeSideLinks();
          }}
        >
          Projects
        </NavLink>
        <NavLink
          href="#start"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
            closeSideLinks();
          }}
        >
          Contact
        </NavLink>
      </ul>
      <button className="lg:hidden" onClick={toggleSideLinks} id="hamburgerBtn">
        <Hamburger className="fill-slate-50" />
      </button>
    </nav>
  );
};

export default Navbar;
