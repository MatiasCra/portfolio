import * as React from "react";
import Layout from "../components/layout";
import Projects from "../components/projects";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Projects />
        <div id="project-opener" className="opener"></div>
      </Layout>
    </>
  );
};

export default IndexPage;
