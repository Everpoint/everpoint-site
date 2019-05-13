import React from "react";
import PropTypes from "prop-types";

import { Figure, IconsBlock, LeftIcon, RightIcon, BottomIcon, Title, Description } from "./styles";

export const DevelopmentWithinCompany = ({ name, description, icon }) => {
  return (
    <Figure>
      <IconsBlock>
        <LeftIcon style={{ backgroundImage: `url(${icon})` }} />
        <RightIcon style={{ backgroundImage: `url(${icon})` }} />
        <BottomIcon style={{ backgroundImage: `url(${icon})` }} />
      </IconsBlock>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </Figure>
  );
};

DevelopmentWithinCompany.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};
