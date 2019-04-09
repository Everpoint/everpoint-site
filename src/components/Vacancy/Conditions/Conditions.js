import React from "react";

import doc from "../../../assets/img/vacancyIcons/doc.svg";
import cup from "../../../assets/img/vacancyIcons/cup.svg";
import smile from "../../../assets/img/vacancyIcons/smile.svg";
import clock from "../../../assets/img/vacancyIcons/clock.svg";
import keyboard from "../../../assets/img/vacancyIcons/keyboard.svg";
import pc from "../../../assets/img/vacancyIcons/pc.svg";
import people from "../../../assets/img/vacancyIcons/people.svg";
import medal from "../../../assets/img/vacancyIcons/medal.svg";
import lump from "../../../assets/img/vacancyIcons/lump.svg";
import { ConditionsContainer, ConditionItemIcon, ConditionItem } from "./styles";

const conditions = [
  {
    icon: doc,
    text: "Официальное оформление по ТК РФ;",
  },
  {
    icon: cup,
    text: "Удобный и светлый офис рядом с метро Цветной бульвар; кофе, чай и прочие вкусности;",
  },
  {
    icon: smile,
    text:
      "Дружную, профессиональную команду единомышленников. Грамотные старшие товарищи помогут, подтянут, научат. В нашей команде - разработчики front-end и back-end, есть аналитик, дизайнер, специалист по UX, верстальщик, специалисты по внедрению и тестированию, руководитель проекта;",
  },
  {
    icon: clock,
    text:
      "У нас нет жесткого графика. Каждый выбирает сам, в каком режиме ему работать: кто-то приходит в офис к 8 утра, кто-то — к 11. Мы не заставляем сотрудников работать сверх нормы. Главное — выполнять задачи в срок и не подводить команду.",
  },
  {
    icon: keyboard,
    text:
      "Все условия для разработки: у вас будут четко сформулированные задачи, требования на ближайший спринт и план разработки определены на несколько месяцев вперед, готовая верстка и дизайн;",
  },
  {
    icon: pc,
    text:
      "Мы ведем задачи в Jira, описываем требования в CF, создаем макеты для верстки в Zeplin, обсуждаем проекты в Slack;",
  },
  {
    icon: people,
    text: "Возможность поработать как в продуктовой, так и в проектной команде;",
  },
  {
    icon: medal,
    text:
      'Участие в крупных мегаинтересных проектах в разных отраслях, в т.ч. федерального уровня. Один из последних проектов компании - уникальный публичный сервис-помощник предпринимателям "Бизнес-навигатор МСП". Он предназначен для поиска наилучшего местоположения для открытия бизнеса.',
  },
  {
    icon: lump,
    text: "Возможности для саморазвития. Мы всегда за новые идеи и новые технологии.",
  },
];

export const Conditions = () => (
  <ConditionsContainer>
    {conditions.map(({ icon, text }, index) => (
      <ConditionItem key={`condition-${index}`}>
        <ConditionItemIcon style={{ backgroundImage: `url(${icon})` }} />
        {text}
      </ConditionItem>
    ))}
  </ConditionsContainer>
);
