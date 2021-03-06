// portfolio screenshots
import mspX1 from "../assets/img/portfolio/slide-screenshots/msp/msp.png";
import mspX2 from "../assets/img/portfolio/slide-screenshots/msp/msp@2x.png";
import mspX3 from "../assets/img/portfolio/slide-screenshots/msp/msp@3x.png";
import geomonitoringX1 from "../assets/img/portfolio/slide-screenshots/geomonitoring/bank.png";
import geomonitoringX2 from "../assets/img/portfolio/slide-screenshots/geomonitoring/bank@2x.png";
import geomonitoringX3 from "../assets/img/portfolio/slide-screenshots/geomonitoring/bank@3x.png";
import evergisOnlineX1 from "../assets/img/portfolio/slide-screenshots/evergisOnline/EGO_x1.png";
import evergisOnlineX2 from "../assets/img/portfolio/slide-screenshots/evergisOnline/EGO_x2.png";
import evergisOnlineX3 from "../assets/img/portfolio/slide-screenshots/evergisOnline/EGO_x3.png";

import mobileMspX1 from "../assets/img/portfolio/slide-screenshots/mobileMsp/group-2.png";
import mobileMspX2 from "../assets/img/portfolio/slide-screenshots/mobileMsp/group-2@2x.png";
import mobileMspX3 from "../assets/img/portfolio/slide-screenshots/mobileMsp/group-2@3x.png";

import eoPic1X1 from "../assets/img/portfolio/evergisOnline/screenshots/EGO_Удобно и просто.png";
import eoPic2X1 from "../assets/img/portfolio/evergisOnline/screenshots/pic-2.png";
import eoPic2X2 from "../assets/img/portfolio/evergisOnline/screenshots/pic-2@2x.png";
import eoPic2X3 from "../assets/img/portfolio/evergisOnline/screenshots/pic-2@3x.png";
import eoPic3X1 from "../assets/img/portfolio/evergisOnline/screenshots/pic-3.png";
import eoPic3X2 from "../assets/img/portfolio/evergisOnline/screenshots/pic-3@2x.png";
import eoPic3X3 from "../assets/img/portfolio/evergisOnline/screenshots/pic-3@3x.png";
import eoPic4X1 from "../assets/img/portfolio/evergisOnline/screenshots/pic-4.png";
import eoPic4X2 from "../assets/img/portfolio/evergisOnline/screenshots/pic-4@2x.png";
import eoPic4X3 from "../assets/img/portfolio/evergisOnline/screenshots/pic-4@3x.png";

import rrIcon from "../assets/img/portfolio/msp/rr.svg";
import bankIcon from "../assets/img/portfolio/msp/bank.svg";
import mspVideo1 from "../videos/msp/1_1.mp4";
import mspVideo1Poster from "../videos/msp/posters/1_1_000.jpg";
import mspVideo2 from "../videos/msp/1_2.mp4";
import mspVideo2Poster from "../videos/msp/posters/1_2_000.jpg";
import mspVideo3 from "../videos/msp/1_3.mp4";
import mspVideo3Poster from "../videos/msp/posters/1_3_000.jpg";

export default {
  id: "portfolio",
  text: "Продукты и решения",
  route: "/portfolio",
  sections: [
    // {
    //   groupName: "Продукты",
    //   text: "EverGIS",
    //   id: "evergis",
    //   projectBackgroundColor: "#f8a717",
    //   screenshots: {
    //     x1: mspX1,
    //     x2: mspX2,
    //     x3: mspX3,
    //   },
    // },
    {
      groupName: "Продукты",
      text: "EverGIS Online",
      id: "evergisOnline",
      projectBackgroundColor: "linear-gradient(to bottom, #08061b, #2a0f22)",
      screenshots: {
        x1: evergisOnlineX1,
        x2: evergisOnlineX2,
        x3: evergisOnlineX3,
      },
      longreadImages: [
        {
          x1: eoPic1X1,
          x2: eoPic1X1,
          x3: eoPic1X1,
        },
        {
          x1: eoPic2X1,
          x2: eoPic2X2,
          x3: eoPic2X3,
        },
        {
          x1: eoPic3X1,
          x2: eoPic3X2,
          x3: eoPic3X3,
        },
        {
          x1: eoPic4X1,
          x2: eoPic4X2,
          x3: eoPic4X3,
        },
      ],
      // link: "public.everpoint.ru",
      description: "Картографический сервис для анализа геоданных и создания интерактивных карт.",
    },
    {
      groupName: "Решения",
      id: "msp",
      type: "Малый бизнес",
      text: "Бизнес-навигатор МСП",
      projectBackgroundColor: "#387bc7",
      description:
        "Бесплатный сервис для предпринимателей. Найдите место для открытия бизнеса и получите типовой бизнес-план.",
      screenshots: {
        x1: mspX1,
        x2: mspX2,
        x3: mspX3,
      },
      link: "navigator.smbn.ru",
      achievements: [
        {
          amount: "177",
          text: "В стольки городах РФ доступен Бизнес-навигатор МСП",
        },
        { amount: "103", text: "Столько концепций бизнеса доступны для расчета бизнес-плана" },
        { amount: "650 000", text: "Столько пользователей воспользовались сервисом за 2,5 года" },
        {
          amount: "400 000",
          text: "Столько предпринимателей зарегистрированы в бизнес-навигаторе",
        },
        { icon: rrIcon, text: "Подключена публичная кадастровая карта Росреестра" },
        { icon: bankIcon, text: "Бизнес-планы принимаются банками-партнерами Корпорации МСП" },
      ],
      videos: [
        { title: "Новичок", source: mspVideo1, poster: mspVideo1Poster },
        {
          title: "Предприниматель со стартовым капиталом",
          source: mspVideo2,
          poster: mspVideo2Poster,
        },
        { title: "Опытный предприниматель", source: mspVideo3, poster: mspVideo3Poster },
      ],
    },
    {
      id: "mobileMsp",
      groupName: "Решения",
      type: "Малый бизнес",
      text: "Мобильный бизнес-навигатор",
      projectBackgroundColor: "#44C3F8",
      screenshots: {
        x1: mobileMspX1,
        x2: mobileMspX2,
        x3: mobileMspX3,
      },
      description:
        "Приложение для расчета бизнес-планов и справочник мер поддержки предпринимателей.",
      ios: "https://itunes.apple.com/ru/developer/корпорация-мсп/id1253348895?mt=8",
      android: "https://play.google.com/store/apps/developer?id=АО+«Корпорация+«МСП»",
      iosMsp:
        "https://itunes.apple.com/ru/app/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%BE%D1%80-%D0%BC%D1%81%D0%BF/id1253348896",
      androidMsp: "https://play.google.com/store/apps/details?id=ru.mobileup.businessnavigator",
      iosSupport:
        "https://itunes.apple.com/ru/app/%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%BE%D1%80-%D0%BC%D1%81%D0%BF-%D0%BC%D0%B5%D1%80%D1%8B-%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B8/id1264471701",
      androidSupport:
        "https://play.google.com/store/apps/details?id=ru.mobileup.referencenavigator",
    },
    {
      id: "geomonitoring",
      groupName: "Решения",
      title: "Геомониторинг недвижимости",
      type: "Банковский сектор",
      text: "Банковский сектор",
      projectBackgroundColor: "#009AEB",
      screenshots: {
        x1: geomonitoringX1,
        x2: geomonitoringX2,
        x3: geomonitoringX3,
      },
      description:
        "Аналитическая система управления залоговым имуществом банка. Планирование выездных проверок и оценка стоимости объектов.",
    },
  ],
  slider: true,
};
