import React from "react";
import PropTypes from "prop-types";

import { Card } from "./Card";
import { GoNextLink } from "../../../components/GoNextLink/GoNextLink";
import { XScrollContainer, PaddingBlock, Title } from "../styles";
import styles, { Section } from "./styles";

export const About = ({ news, onRef, title }) => {
  return (
    <Section ref={onRef}>
      <Title>{title}</Title>
      <XScrollContainer>
        {news.map((article, index, array) => (
          <React.Fragment key={article.id}>
            <Card {...article} />
            {array.length - 1 === index && <PaddingBlock />}
          </React.Fragment>
        ))}
      </XScrollContainer>
      <GoNextLink gatsby to="/news" className={styles.readAll}>
        Все комментарии
      </GoNextLink>
    </Section>
  );
};

About.propTypes = {
  onRef: PropTypes.func,
};
