const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve("./src/templates/project.js");
  const projects = require("./src/projects").projects();
  projects.forEach((project) => {
    createPage({
      component: projectTemplate,
      path: `/project/${project.slug}`,
      context: {
        project,
      },
    });
  });
};
