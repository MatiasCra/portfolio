import * as React from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Projects />
        <Contact />
        <Footer/>
        <div id="project-opener" className="opener"></div>
      </Layout>
    </>
  );
};

export default IndexPage;
