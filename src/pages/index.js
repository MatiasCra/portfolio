import * as React from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="Matías Cravchik | Portfolio"/>
      <Projects />
      <Contact />
      <Footer />
      <div id="project-opener" className="opener"></div>
    </Layout>
  );
};

export default IndexPage;
