import Generic from "./Generic";

const projectsComponents = {
  generic: Generic,
};

const getProjectComponent = (projectSlug) =>
  projectsComponents[projectSlug]
    ? projectsComponents[projectSlug]
    : projectsComponents["generic"];

export default getProjectComponent;
