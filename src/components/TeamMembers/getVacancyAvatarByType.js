import developer from "../../assets/img/vacancy/developer.svg";
import designer from '../../assets/img/vacancy/designer.svg';
import manager from '../../assets/img/vacancy/manager.svg';
import analyst from '../../assets/img/vacancy/analytic.svg';
import novacancy from "../../assets/img/vacancy/no-vacancy.svg";

export const getVacancyAvatarByType = type => {
  switch (type) {
    case "developer":
      return developer;
    case "designer":
      return designer;
    case "manager":
      return manager;
    case "analyst":
      return analyst;
    default:
      return novacancy;
  }
};
