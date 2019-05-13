import React from "react";
import PropTypes from "prop-types";

import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { Principle } from "./Principle/Principle";
import styles, { HowWeAreWorkingContainer, Title, Paragraph } from "./styles";

export const HowWeAreWorking = ({ items, className }) => {
  return (
    <HowWeAreWorkingContainer className={className}>
      <Title>Работа в Everpoint</Title>
      <Paragraph className={styles.howWeAreWorkingParagraph}>
        Более 15 лет мы разрабатываем геосервисы для наших заказчиков, а с 2018 года развиваем и
        собственную геоинформационную систему EverGIS. Работа у нас — это всегда интересные задачи,
        возможность проявить себя и поддержка коллектива. Будем рады видеть у себя в команде таких
        же целеустремленных, активных и любознательных людей!
      </Paragraph>
      <Title>Важные компоненты нашего успеха</Title>
      <Principle items={items} />
      <GoNextLink to="/work" gatsby className={styles.howWeAreWorkingLink}>
        Подробнее о работе в Everpoint
      </GoNextLink>
    </HowWeAreWorkingContainer>
  );
};

HowWeAreWorking.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};
