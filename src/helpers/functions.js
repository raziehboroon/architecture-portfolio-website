export const countProjects = (categories, projects) => {
  const categoriesCount = categories.map((category) => {
    return projects.filter((project) =>
      project.category.includes(category.name)
    ).length;
  });
  return categoriesCount;
};

export const filterProjects = (currentCategory, projects) => {
  const currentProjects = projects.filter((project) =>
    project.category.includes(currentCategory)
  );
  return currentProjects;
};

export const getSingleProject = (singleProjectId, projects) => {
  const singleProject = projects.filter(
    (project) => project.id === singleProjectId
  );
  return singleProject;
};
