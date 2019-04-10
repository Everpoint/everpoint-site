import employees from "../assets/employees";
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
  { id: "blog", text: "Блог", outsideLink: "https://medium.com/everpoint " },
];
