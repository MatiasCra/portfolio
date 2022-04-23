import React from "react";
import Navbar from "./navbar";
import navbarStyles from "./navbar.module.css";
import About from "../components/about";
import styles from "./layout.module.css";
import Footer from "../components/footer";

const Layout = (props) => {
  // const [lastScroll, setLastScroll] = React.useState(0);
  // const [showNav, setShowNav] = React.useState(true);
  // const [navH, setNavH] = React.useState(0);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0 });
      console.log("scrolling to top");
    }
  }, [loading]);

  React.useEffect(() => {
    const nav = document.getElementById("navbar");
    const about = document.getElementById("about");
    about.style.marginTop = `${nav.offsetHeight}px`;
    about.classList.remove("hidden");
    nav.classList.add("fixed");
    nav.classList.add("top-0");
    setLoading(false);
  }, [setLoading]);

  // React.useEffect(() => {
  //   function handleScroll(event) {
  //     const scrollAmmount = 250;
  //     const nav = document.getElementById("navbar");
  //     const classes = nav.classList;

  //     // if (
  //     //   lastScroll - window.scrollY > scrollAmmount ||
  //     //   window.scrollY < scrollAmmount
  //     // ) {
  //     //   setLastScroll(window.scrollY);
  //     //   if (!showNav) {
  //     //     setShowNav(true);
  //     //     document.getElementById("navbar").classList.add(navbarStyles.showNav);
  //     //   }
  //     // } else if (window.scrollY > lastScroll) {
  //     //   setLastScroll(window.scrollY);
  //     //   setShowNav(false);
  //     //   if (
  //     //     !document
  //     //       .getElementById("navLinks")
  //     //       .classList.contains(navbarStyles.show)
  //     //   ) {
  //     //     document
  //     //       .getElementById("navbar")
  //     //       .classList.remove(navbarStyles.showNav);
  //     //   } else if (window.innerWidth > 992) {
  //     //     // Close the side links if width changed to lg so the navbar scroll
  //     //     // works properly
  //     //     document
  //     //       .getElementById("navLinks")
  //     //       .classList.remove(navbarStyles.show);
  //     //     document
  //     //       .getElementById("navbar")
  //     //       .classList.remove(navbarStyles.showNav);
  //     //   }
  //     // }
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [showNav, lastScroll]);

  return (
    <div
      className="bg-zinc-900 flex flex-col min-h-screen w-full m-0 text-slate-200 "
      id="start"
    >
      <div className="m-0 flex-grow min-h-screen">
        <div className={`${styles.animateEntranceFade} relative z-50`}>
          <Navbar />
        </div>
        <div
          className={`${styles.animateEntranceUp} min-h-[90vh] flex justify-center`}
        >
          <About />
        </div>
      </div>
      <div className={styles.animateEntranceUp}>{props.children}</div>
      <div className={styles.animateEntranceFade}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;