const projects = [
  {
    order: 1,
    title: "Simple To-Do List",
    slug: "simple-todo-list",
  },
  {
    order: 2,
    title: "Bitfunder",
    slug: "bitfunder",
  },
  {
    order: 3,
    title: "Gatsby Blog",
    slug: "gatsby-blog",
  },
  {
    order: 4,
    title: "Django Blog",
    slug: "django-blog",
  },
];

export function getAllProjects() {
  return projects.sort(({ order: o1 }, { order: o2 }) => {
    if (o1 < o2) return -1;
    if (o1 > o2) return 1;
    if (o1 === o2) return 0;
  });
}

export function getProjectsSlugs() {
  return projects.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });
}

export function getProject(slug) {
  let i = 0;
  while (i < projects.length && projects[i].slug != slug) {
    i++;
  }
  return projects[i];
}
