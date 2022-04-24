import { getProject, getProjectsSlugs } from "../../lib/projects";

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
  return (
    <div className="bg-zinc-900 flex flex-col min-h-screen w-full m-0 text-slate-200 py-5">
      <h1 className="text-center text-6xl uppercase">{projectData.title}</h1>
    </div>
  );
}
