import React from "react";
import PropTypes from "prop-types";

import { getPixelRatioPropName } from "../../utils/utils";
import { Figure, Img, Content, Title, Description } from "./styles";
import { Separate } from "../Work/Separate/Separate";

export const DevelopmentCycle = React.memo(({ odd, name, description, img, Element }) => (
  <>
    <Figure odd={odd}>
      <Img src={img[getPixelRatioPropName()]} odd={odd} />
      <Content odd={odd}>
        <Title>{name}</Title>
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <Description key={`description-${index}`}>{item}</Description>
          ))
        ) : (
          <Description>{description}</Description>
        )}
      </Content>
    </Figure>
    {Element && <Separate odd={odd} Element={Element} />}
  </>
));

DevelopmentCycle.propTypes = {
  odd: PropTypes.bool,
  name: PropTypes.string,
  img: PropTypes.shape({
    x1: PropTypes.string,
    x2: PropTypes.string,
    x3: PropTypes.string,
  }),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
