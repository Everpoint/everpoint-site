import employees from "../assets/employees";
import vacancy from "../assets/vacancy";
import principles from "../assets/principles";
import photo from "../assets/photo";

import portfolio from "./portfolio";

export const routes = [
  { id: "index", text: "О компании", route: "/" },
  portfolio,
  {
    id: "about",
    text: "СМИ о нас",
    route: "/about",
    slider: true,
    maxItemCount: 5,
  },
  {
    id: "jobs",
    text: "Работа у нас",
    route: "/jobs",
    sections: [
      { id: "employees", text: "Наши сотрудники", items: employees, groupName: "Команда" },
      { id: "vacancy", text: "Вакансии", items: vacancy, groupName: "Команда" },
      {
        id: "process",
        text: "Рабочий процесс",
        items: principles,
        groupName: "Как мы работаем",
      },
      { id: "photo", text: "Фото", items: photo, groupName: "Как мы работаем" },
    ],
    scrollable: true,
  },
  { id: "contacts", text: "Контакты", route: "/contacts" },
  { text: "Блог", outsideLink: "https://medium.com/everpoint " },
];

export const navigateTo = ({ navigate, pathname, direction }) => {
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

export const getRouteByLocation = location => {
  if (location.pathname === "/") {
    return routes.find(({ id }) => id === "index");
  } else {
    return routes.find(({ id }) => id && location.pathname.includes(id));
  }
};

export const getRouteById = id => routes.find(route => route.id === id);

export const getProject = ({ projectId, parentId = "portfolio", allProject = false }) => {
  const { sections } = getRouteById(parentId);
  const projects = sections || [];

  if (allProject) {
    return projects;
  } else {
    return projects.find(({ id }) => id === projectId);
  }
};

export const getBackRouteByLocationPathName = pathname => {
  if (getProject({ allProject: true }).some(({ id }) => pathname.includes(id))) return "/portfolio";
  else if (pathname.includes("news")) return "/about";
  else return "/";
};
