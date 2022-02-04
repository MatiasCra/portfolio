import React from "react";
import Navbar from "./navbar";
import * as layoutStyles from "./layout.module.css";
import * as navbarStyles from "./navbar.module.css";
import "../styles/style.css";
import About from "../components/about";

const Layout = (props) => {
  const [lastScroll, setLastScroll] = React.useState(window.scrollY);
  const [showNav, setShowNav] = React.useState(true);

  React.useEffect(() => {
    function handleScroll(event) {
      const scrollAmmount = 250;
      if ((lastScroll - window.scrollY) > scrollAmmount || window.scrollY < scrollAmmount) {
        setLastScroll(window.scrollY);
        if (!showNav) {
          setShowNav(true);
          document.getElementById("navbar").classList.add(navbarStyles.showNav);
        }
      } else {
        if (window.scrollY > lastScroll) {
          setLastScroll(window.scrollY);
          setShowNav(false);
          if (
            !document
              .getElementById("navLinks")
              .classList.contains(navbarStyles.show)
          ) {
            document
              .getElementById("navbar")
              .classList.remove(navbarStyles.showNav);
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNav, lastScroll]);

  return (
    <div className={layoutStyles.container} id="start">
      <div className={layoutStyles.fullPage}>
        <Navbar />
        <About />
      </div>
      <div className={layoutStyles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
