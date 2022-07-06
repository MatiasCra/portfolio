import React from "react";
import Navbar from "./navbar";
import About from "../components/about";
import styles from "./layout.module.css";
import Footer from "../components/footer";
import SnackBar from "../components/snackbar.js";

const Layout = (props) => {
  return (
    <div
      className="bg-zinc-900 flex flex-col min-h-screen w-full m-0 text-slate-200"
      id="start"
    >
      <div className="m-0 flex-grow min-h-screen">
        <div
          className={`${styles.animateEntranceFade} relative z-50 lg:mb-16 xl:mb-6 mb-24`}
        >
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
      <SnackBar
        opened={props.openedSnackbar}
        close={() => props.setOpenedSnackbar(false)}
        message={props.snackBarMessage}
      />
    </div>
  );
};

export default Layout;
