import React from "react";
import PropTypes from "prop-types";

import { TeamMemberCard } from "../TeamMemberCard/TeamMemberCard";
import noVacancy from "../../assets/img/vacancy/no-vacancy.svg";
import { NoVacancyDescription } from "./styles";
import { GoNextLink } from "../GoNextLink/GoNextLink";

import styles from "./styles";

export const NoVacancyCard = ({ height }) => {
  return (
    <TeamMemberCard
      vacancy
      className={styles.noVacancyCard}
      height={height}
      avatar={noVacancy}
      name="В настоящее время вакансий нет"
      control={
        <NoVacancyDescription>
          <span>Но если вы отличный специалист,</span>
          <br />
          <GoNextLink withArrow={false}>напишите нам в чат</GoNextLink>.
          <br />
          <br />
          <span>Возможно, мы еще не знаем, что вы нам нужны!</span>
        </NoVacancyDescription>
      }
    />
  );
};

NoVacancyCard.propTypes = {
  className: PropTypes.string,
  cardHeight: PropTypes.number,
};
