import React from "react";
import PropTypes from "prop-types";

import { Paragraph } from '../../components/Typography/Paragraph';
import { FiguresSection, Figure } from "./styles";

export const Figures = ({ figures, className }) => {
  return (
    <FiguresSection className={className}>
      {figures.map(({ Icon, text }, index) => (
        <Figure key={`${text}-${index}`}>
          <Icon />
          <Paragraph>{text}</Paragraph>
        </Figure>
      ))}
    </FiguresSection>
  );
};

Figures.propTypes = {
  figures: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.func,
      text: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
};
