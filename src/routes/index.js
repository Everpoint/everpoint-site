import principles from "../assets/principles";
import photo from "../assets/photo";

import portfolio from "./portfolio";
import developmentCycle from "../assets/developmentCycle";
import developmentWithinCompany from "../assets/developmentWithinCompany";
import { ReactComponent as MediumLogo } from '../assets/img/icons/medium.svg';

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
      {
        id: "process",
        text: "Рабочий процесс",
        items: principles,
        groupName: "Работа у нас",
        developmentCycle,
        developmentWithinCompany,
      },
      {
        id: "employees",
        text: "Наши сотрудники",
        mobileText: "Наша команда",
        items: [],
        groupName: "Работа у нас",
      },
      { id: "vacancy", text: "Вакансии", groupName: "Работа у нас" },
      {
        id: "photo",
        text: "Фото",
        items: photo,
        groupName: "Работа у нас",
      },
    ],
    scrollable: true,
  },
  { id: "contacts", text: "Контакты", route: "/contacts" },
  { id: "blog", text: "Блог", outsideLink: "https://medium.com/everpoint", Icon: MediumLogo },
];
