import Close from "../../public/images/close.svg";
import { useRouter } from "next/router";
import styles from "../../components/layout.module.css";
import Slider from "../../components/slider";
import Image from "next/image";
import Footer from "../../components/footer";
import Head from "next/head";
import React from "react";

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/slugs/`);
  const slugs = await res.json();
  slugs.forEach(function (slug, i) {
    slugs[i] = { params: slug };
  });
  return {
    paths: slugs,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/project/?slug=${params.slug}`
  );
  const projectData = await res.json();
  const images = [
    `/images/projects/${params.slug}/banner.png`,
    `/images/projects/${params.slug}/screenshot1.png`,
    `/images/projects/${params.slug}/screenshot2.png`,
    `/images/projects/${params.slug}/screenshot3.png`,
  ];
  console.log(projectData);
  return {
    props: {
      projectData: {
        ...projectData,
        images,
      },
    },
  };
}

export default function Project({ projectData }) {
  const router = useRouter();

  const closeProject = () => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    document.getElementById("start").classList.add("open-project");
    sleep(400).then(() => {
      router.push("/#projects");
    });
  };

  const techLoader = ({ src }) => {
    return `/images/techs/${src}.png`;
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png"></link>
        <title>{projectData.title} | Matías Cravchik | Portfolio</title>
      </Head>
      <div
        id="start"
        className={`bg-zinc-900 flex flex-col min-h-screen w-full m-0 
                  text-slate-200 py-5 relative ${styles.animateEntranceUp}`}
      >
        <Close
          className="absolute top-5 right-5 w-12 h-12 md:right-6 md:w-14 md:h-14 bg-zinc-900
                   fill-slate-50 hover:cursor-pointer hover:fill-[#F7768E] transition-all duration-[400]"
          onClick={closeProject}
        />
        <h1
          className="text-center max-w-[60%] sm:max-w-[70%] md:max-w-[85%] mx-auto text-5xl md:text-6xl
                           uppercase text-slate-50"
        >
          {projectData.title}
        </h1>
        <Slider className="mx-2 mt-4 sm:mt-6 md:mx-8 lg:mx-[13%] lg:mt-8">
          {projectData.images.map((image, index) => {
            return <img src={image} alt={`screenshot${index}`} key={index} />;
          })}
        </Slider>
        <div className="mx-2 md:mx-8 lg:mx-[13%]">
          <h2 className="text-4xl md:text-5xl text-center uppercase my-10">
            Technologies
          </h2>
          {projectData.techs.map(({ name, description }, i) => {
            return (
              <div
                className="grid grid-cols-10 p-3 items-center place-items-start auto-cols-fr"
                key={i}
              >
                <div className="col-start-1 col-span-2 lg:col-span-1">
                  <Image
                    alt="tech"
                    src={name}
                    width={120}
                    height={120}
                    className="aspect-square"
                    loader={techLoader}
                  />
                </div>
                <div className="ml-6 col-start-3 col-span-8 lg:col-start-2 lg:col-span-10">
                  <span className="text-4xl capitalize">{name}</span>
                  <span className="text-xl">: {description}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-2 md:mx-8 lg:mx-[13%] mb-12">
          {projectData.demo ? (
            <>
              <h2 className="text-4xl md:text-5xl text-center uppercase my-10">
                Demo
              </h2>
              <div>
                <span className="text-4xl capitalize">
                  {projectData.demo.name}
                </span>
                <span className="text-xl">
                  : {projectData.demo.description}{" "}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={projectData.demo.link}
                  className="text-xl text-[#7AA2F7] hover:bg-gradient-to-r hover:from-[#F7768E]
                  hover:to-orange-600 hover:bg-clip-text hover:text-transparent"
                >
                  {projectData.demo.link}
                </a>
              </div>
            </>
          ) : (
            ""
          )}
          {projectData.source ? (
            <>
              <h2 className="text-4xl md:text-5xl text-center uppercase my-10">
                Source Code
              </h2>
              <div>
                <span className="text-4xl capitalize">Source</span>
                <span className="text-xl">
                  : The source code is available here{" "}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={projectData.source}
                  className="text-xl text-[#7AA2F7] hover:bg-gradient-to-r hover:from-[#F7768E]
                  hover:to-orange-600 hover:bg-clip-text hover:text-transparent"
                >
                  {projectData.source}
                </a>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
