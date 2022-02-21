import Generic from "./Generic";

const projects_components = {
  generic: Generic,
};

const get_project_component = (project_slug) =>
  projects_components[project_slug];

export default get_project_component;
