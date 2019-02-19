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
  },
  {
    id: "jobs",
    text: "Работа у нас",
    route: "/jobs",
    additionalMenu: [
      {
        id: "team",
        title: "Команда",
        children: [
          { id: "employees", text: "Наши сотрудники", items: employees },
          { id: "vacancy", text: "Вакансии", items: vacancy },
        ],
      },
      {
        id: "howWeAreWorking",
        title: "Как мы работаем",
        children: [
          {
            id: "process",
            text: "Рабочий процесс",
            items: principles,
          },
          { id: "photo", text: "Фото", items: photo },
        ],
      },
    ],
    scrollable: true,
  },
  { id: "contacts", text: "Контакты", route: "/contacts" },
  { text: "Блог", outsideLink: "https://medium.com/everpoint " },
];

export const navigateTo = ({ navigate, pathname, direction }) => {
  const outsideLinkFilteredRoutes = routes.filter(({ outsideLink }) => !outsideLink);
  const index = outsideLinkFilteredRoutes.findIndex(({ route }) => pathname.includes(route));
  const length = outsideLinkFilteredRoutes.length;
  const nextRouteIndex = index + direction;

  if (nextRouteIndex >= 0 && nextRouteIndex < length) {
    navigate(outsideLinkFilteredRoutes[nextRouteIndex].route);
    return true;
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

export const sectionsFromAdditionalMenu = additionalMenu => {
  const sliderIdArray = [];
  additionalMenu &&
    additionalMenu.forEach(({ children, title }) =>
      children.forEach(item => sliderIdArray.push({ ...item, parentTitle: title })),
    );

  return sliderIdArray;
};

export const getProject = ({ projectId, parentId = "portfolio", allProject = false }) => {
  const { additionalMenu } = getRouteById(parentId);
  const projects = sectionsFromAdditionalMenu(additionalMenu) || [];

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
