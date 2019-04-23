import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";

export const navigateTo = ({ navigate, pathname, direction, routes }) => {
  const outsideLinkFilteredRoutes = routes.filter(({ outsideLink }) => !outsideLink);
  const index = outsideLinkFilteredRoutes.findIndex(({ id }) => pathname.includes(id));
  const length = outsideLinkFilteredRoutes.length;
  const nextRouteIndex = Math.max(index + direction, direction);

  if (nextRouteIndex >= 0 && nextRouteIndex < length) {
    const nextRoute = outsideLinkFilteredRoutes[nextRouteIndex];
    navigate(nextRoute.route);
    return nextRoute;
  }
};

export const getRouteByLocation = (location, routes) => {
  if (location.pathname === "/") {
    return routes.find(({ id }) => id === "index");
  } else {
    return routes.find(({ id }) => id && location.pathname.includes(id));
  }
};

export const getRouteById = (id, routes) => routes.find(route => route.id === id);

export const getProject = ({
  projectId,
  parentId = "portfolio",
  allProject = false,
  routes,
  childrenId,
}) => {
  const { sections } = getRouteById(parentId, routes);
  const projects = sections || [];

  if (allProject) {
    const route = projects.find(item => item.id === childrenId);
    if (route) {
      return route;
    } else {
      return projects;
    }
  } else {
    return projects.find(({ id }) => id === projectId);
  }
};

export const getBackRouteByLocationPathName = (pathname, routes) => {
  if (getProject({ allProject: true, routes }).some(({ id }) => pathname.includes(id))) {
    return "/portfolio";
  } else if (pathname.includes("news")) {
    return "/about";
  } else if (pathname.includes("vacancy") || pathname.includes("work")) {
    return "/jobs";
  } else {
    return "/";
  }
};

export const normalizeEdges = items =>
  items.edges.map(({ node }) => ({
    ...node.frontmatter,
    id: node.id,
    longreadLink: node.fields.slug,
  }));

export const mergedRoutes = ({ routes, vacancy, employees }) => {
  const mergedRoutes = cloneDeep(routes);
  const jobs = getRouteById("jobs", mergedRoutes);
  const { sections: jobsSections } = jobs;

  const vacancies = jobsSections.find(({ id }) => id === "vacancy");
  const employeesSection = jobsSections.find(({ id }) => id === "employees");

  if (vacancies && !vacancies.items) {
    const normalizedVacancy = vacancy ? normalizeEdges(vacancy) : [];

    jobsSections.splice(1, 1, {
      ...vacancies,
      items: normalizedVacancy,
    });
  }

  if (employees && !employees.items) {
    const normalizedEmployees = employeesSection
      ? get(employees, "edges[0].node.frontmatter.employees")
      : [];

    employeesSection.items = normalizedEmployees.filter(employee => employee.isVisible);
  }

  return mergedRoutes;
};
