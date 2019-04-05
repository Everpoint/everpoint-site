import React from "react";
import { ReactComponent as Developer } from "../../assets/img/vacancy/developer.svg";
import { ReactComponent as Designer } from "../../assets/img/vacancy/designer.svg";
import { ReactComponent as Manager } from "../../assets/img/vacancy/manager.svg";
import { ReactComponent as Analytic } from "../../assets/img/vacancy/analytic.svg";
import { ReactComponent as NoVacancy } from "../../assets/img/vacancy/no-vacancy.svg";

export const getVacancyAvatarByType = type => {
  switch (type) {
    case "developer":
      return <Developer />;
    case "designer":
      return <Designer />;
    case "manager":
      return <Manager />;
    case "analyst":
      return <Analytic />;
    default:
      return <NoVacancy />;
  }
};
