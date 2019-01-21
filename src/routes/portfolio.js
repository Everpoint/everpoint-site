import msp from "../img/portfolio/msp/msp-screen.png";
import bank from "../img/portfolio/bank.png";
import mobileMsp1 from "../img/portfolio/mobileMsp/mobile-1.png";
import mobileMsp2 from "../img/portfolio/mobileMsp/mobile-2.png";
import mobileMsp3 from "../img/portfolio/mobileMsp/mobile-3.png";
import rrIcon from "../img/portfolio/msp/rr.svg";
import bankIcon from "../img/portfolio/msp/bank.svg";
import mspVideo1 from "../videos/msp/1_1.webm";
import mspVideo2 from "../videos/msp/1_2.webm";
import mspVideo3 from "../videos/msp/1_3.webm";

export default {
  id: "portfolio",
  text: "Продукты и Решения",
  route: "/portfolio",
  additionalMenuWidth: "12rem",
  additionalMenu: [
    {
      id: "products",
      title: "Продукты",
      children: [
        { text: "EverGIS", id: "evergis", bgColor: "#f8a717", screenshot: msp },
        { text: "EverGIS Online", id: "evergisOnline", bgColor: "#6c30d7", screenshot: bank },
        { text: "EverTrack", id: "evertrack", bgColor: "#0fa5f6", screenshot: msp },
      ],
    },
    {
      id: "solutions",
      title: "Решения",
      children: [
        {
          id: "msp",
          type: "Малый бизнес",
          groupName: "Малый бизнес",
          text: "Бизнес-навигатор МСП",
          bgColor: "#387bc7",
          description:
            "Бесплатный сервис для предпринимателей. Найдите лучшее место для открытия бизнеса и получите готовый бизнес-план.",
          screenshot: msp,
          link: "navigator.smbn.ru",
          linkText: "",
          achievements: [
            {
              amount: "172",
              text: "Столиц субъектов РФ и городов с населением более 100 тыс. чел.",
            },
            { amount: "103", text: "Концепций бизнеса доступны для расчёта бизнес-плана" },
            { amount: "450 000", text: "Пользователей воспользовались сервисом за два года" },
            { amount: "270 000", text: "Предпринимателей зарегистрированы в бизнес-навигаторе" },
            { icon: rrIcon, text: "Подключена публичная кадастровая карта Росреестра" },
            { icon: bankIcon, text: "Бизнес-планы принимаются банками-партнёрами Корпорации МСП" },
          ],
          videos: [
            { title: "Новичок", source: mspVideo1 },
            { title: "Предприниматель со стартовым капиталом", source: mspVideo2 },
            { title: "Опытный предприниматель", source: mspVideo3 },
          ],
        },
        {
          id: "mobileMsp",
          type: "Малый бизнес",
          groupName: "Малый бизнес",
          text: "Мобильный бизнес-навигатор",
          bgColor: "#e0f0f6",
          textColor: "#0a2342",
          screenshot: [mobileMsp1, mobileMsp2, mobileMsp3],
          description:
            "Приложение для расчёта бизнес-планов и справочник мер поддержки предпринимателей",
        },
        {
          title: "Геомониторинг недвижимости",
          text: "Банковский сектор",
          id: "bankingSector",
          bgColor: "#45aac3",
          screenshot: bank,
          description:
            "Аналитическая система управления залоговым имуществом банка. Планирование выездных проверок и оценка стоимости объектов.",
        },
      ],
    },
  ],
  slider: true,
};