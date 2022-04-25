import fs from "fs";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "projects");

const getProjectInfo = (projectDir) => {
  const fullPath = path.join(projectsDirectory, projectDir);
  const dataPath = path.join(fullPath, "data.json");
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  return {
    ...data,
    slug: projectDir,
    banner: `/images/projects/${projectDir}/banner.png`,
  };
};

export function getAllProjects() {
  const dirsNames = fs.readdirSync(projectsDirectory);
  const projectsData = dirsNames.map((dir) => {
    return getProjectInfo(dir);
  });
  return projectsData.sort(({ order: o1 }, { order: o2 }) => {
    if (o1 < o2) return -1;
    if (o1 > o2) return 1;
    if (o1 === o2) return 0;
  });
}

export function getProjectsSlugs() {
  const dirsNames = fs.readdirSync(projectsDirectory);
  return dirsNames.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });
}

export function getProject(slug) {
  const dirsNames = fs.readdirSync(projectsDirectory);
  let i = 0;
  while (i < dirsNames.length && dirsNames[i] != slug) {
    i++;
  }
  return getProjectInfo(slug);
}
