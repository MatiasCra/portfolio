import * as React from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";
// import Projects from "../components/projects";
import Head from "next/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/icon.png"></link>
        <title>Matías Cravchik | Portfolio</title>
      </Head>
      {/*<Projects />*/}
      <Contact />
      <div id="project-opener" className="opener"></div>
    </Layout>
  );
};

export default IndexPage;
