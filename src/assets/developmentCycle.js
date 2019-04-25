import understandingProblemX1 from "./img/development-сycle/1.png";
import understandingProblemX2 from "./img/development-сycle/1@2x.png";
import understandingProblemX3 from "./img/development-сycle/1@3x.png";
import { ReactComponent as Svg1 } from "../assets/img/development-сycle/dividers/separate.svg";

import planningX1 from "./img/development-сycle/2.png";
import planningX2 from "./img/development-сycle/2@2x.png";
import planningX3 from "./img/development-сycle/2@3x.png";
import { ReactComponent as Svg2 } from "../assets/img/development-сycle/dividers/separate-2.svg";

import designX1 from "./img/development-сycle/3-3.png";
import designX2 from "./img/development-сycle/3-3@2x.png";
import designX3 from "./img/development-сycle/3-3@3x.png";
import { ReactComponent as Svg3 } from "../assets/img/development-сycle/dividers/separate-3.svg";

import architecturalDesignX1 from "./img/development-сycle/4-2-x.png";
import architecturalDesignX2 from "./img/development-сycle/4-2-x@2x.png";
import architecturalDesignX3 from "./img/development-сycle/4-2-x@3x.png";
import { ReactComponent as Svg4 } from "../assets/img/development-сycle/dividers/separate-4.svg";

import developmentX1 from "./img/development-сycle/5.png";
import developmentX2 from "./img/development-сycle/5@2x.png";
import developmentX3 from "./img/development-сycle/5@3x.png";
import { ReactComponent as Svg5 } from "../assets/img/development-сycle/dividers/separate-5.svg";

import testingX1 from "./img/development-сycle/6.png";
import testingX2 from "./img/development-сycle/6@2x.png";
import testingX3 from "./img/development-сycle/6@3x.png";
import { ReactComponent as Svg6 } from "../assets/img/development-сycle/dividers/separate-6.svg";

import releaseX1 from "./img/development-сycle/7-2.png";
import releaseX2 from "./img/development-сycle/7-2@2x.png";
import releaseX3 from "./img/development-сycle/7-2@3x.png";

export default {
  title: "Цикл разработки",
  blocks: [
    {
      name: "Понимание проблемы",
      description:
        "Хороший проект всегда начинается с выявления потребностей и правильной постановки целей. Это работа менеджеров и аналитиков. Остальных членов команды мы тоже держим в курсе и привлекаем, когда требуется их участие. Взаимодействие всех участников на разных этапах разработки позволяет создать лучшее решение.",
      img: {
        x1: understandingProblemX1,
        x2: understandingProblemX2,
        x3: understandingProblemX3,
      },
      Element: Svg1,
    },
    {
      name: "Формализация и планирование",
      description:
        "Второй этап - формализация требований, расстановка приоритетов и планирование задач. Мы используем метод Scrum, но адаптировали его под себя. Мы работаем в рамках спринтов, а вместо ежедневных стендапов рассказываем в Slack о текущем состоянии дел. Раз в неделю проводим проектные статус-митинги.",
      img: {
        x1: planningX1,
        x2: planningX2,
        x3: planningX3,
      },
      Element: Svg2,
    },
    {
      name: "Проектирование и дизайн",
      description:
        "Задача наших UX/UI-дизайнеров учесть все бизнес-требования, тренды веб-дизайна, технические ограничения и спроектировать красивый и удобный интерфейс. Для максимально эффективного дизайна и разработки мы создали и развиваем свою дизайн-систему, ориентированную на решение геоинформационных задач.",
      img: {
        x1: designX1,
        x2: designX2,
        x3: designX3,
      },
      Element: Svg3,
    },
    {
      name: "Архитектурное проектирование",
      description:
        "Да, мы действительно много времени уделяем планированию, подготовке требований, интерфейсному и техническому проектированию - это 70% успеха. Архитектор совместно с разработчиками продумывает, как будет работать продукт, какие технологии использовать, чтобы реализовать требования и идеи менеджеров, аналитиков, дизайнеров качественно и в срок.",
      img: {
        x1: architecturalDesignX1,
        x2: architecturalDesignX2,
        x3: architecturalDesignX3,
      },
      Element: Svg4,
    },
    {
      name: "Разработка",
      description: [
        "В разработку попадают максимально продуманные задачи. Однако всем известно, что предусмотреть все невозможно, поэтому мы и любим Scrum, гибкость позволяет нам быстро реагировать на изменение требований.",
        "Если в ходе работы кто-то проявляет инициативу взять на себя задачу посложнее и выйти на новый уровень компетенций - мы поддержим и поможем. Мы уже вырастили несколько специалистов внутри компании. Например, наш главный архитектор вырос из junior-разработчика.",
      ],
      img: {
        x1: developmentX1,
        x2: developmentX2,
        x3: developmentX3,
      },
      Element: Svg5,
    },
    {
      name: "Тестирование",
      description: [
        "Проверка проходит в несколько этапов: сначала разработчик проверяет задачу сам, потом отдает на ревью другому разработчику.",
        "Функциональность тестирует тот, кто поставил задачу: обычно это аналитик или менеджер. Иногда к тестированию подключают других членов команды: ГИС-специалистов, специалистов по внедрению.",
      ],
      img: {
        x1: testingX1,
        x2: testingX2,
        x3: testingX3,
      },
      Element: Svg6,
    },
    {
      name: "Релиз",
      description:
        "Все вместе радуемся выходу продукта, новой функции и ещё одному довольному заказчику!",
      img: {
        x1: releaseX1,
        x2: releaseX2,
        x3: releaseX3,
      },
    },
  ],
};
