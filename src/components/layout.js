import React from "react";
import Navbar from "./navbar";
import * as layoutStyles from "./layout.module.css";
import "../styles/style.css";
import About from "../components/about";

const Layout = (props) => {
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
