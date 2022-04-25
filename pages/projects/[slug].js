import { getProject, getProjectsSlugs } from "../../lib/projects";
import Close from "../../public/images/close.svg";
import { useRouter } from "next/router";
import styles from "../../components/layout.module.css";

export async function getStaticPaths() {
  const paths = getProjectsSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProject(params.slug);
  return {
    props: {
      projectData,
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

  return (
    <div
      id="start"
      className={`bg-zinc-900 flex flex-col min-h-screen w-full m-0 
                  text-slate-200 py-5 relative ${styles.animateEntranceUp}`}
    >
      <Close
        className="absolute right-4 top-5 w-10 h-10 sm:top-6 sm:right-5 sm:w-12 sm:h-12 md:right-6 md:w-14 md:h-14 md:top-6 fill-slate-50 hover:cursor-pointer"
        onClick={closeProject}
      />
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl uppercase text-slate-50">
        {projectData.title}
      </h1>
    </div>
  );
}
