import React from "react";
import PropTypes from "prop-types";

import { Card } from "./Card";
import { CardContainer, PaddingBlock, Title } from "../styles";
import { Section } from "./styles";

export const About = ({ news, onRef, title }) => {
  return (
    <Section ref={onRef}>
      <Title>{title}</Title>
      <CardContainer>
        {news.map((article, index, array) => (
          <React.Fragment key={article.id}>
            <Card {...article} />
            {array.length - 1 === index && <PaddingBlock />}
          </React.Fragment>
        ))}
      </CardContainer>
    </Section>
  );
};

About.propTypes = {
  onRef: PropTypes.func,
};
