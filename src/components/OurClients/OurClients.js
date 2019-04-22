import React from "react";
import PropTypes from "prop-types";

import { OurClientsContainer, OurClientsItem } from "./styles";

export const OurClients = ({ items }) => {
  return (
    <OurClientsContainer>
      {items.map(({ logo }, index) => (
        <OurClientsItem key={`client-logo-${index}`} style={{ backgroundImage: `url(${logo})` }} />
      ))}
    </OurClientsContainer>
  );
};

OurClients.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      isVisibleLogo: PropTypes.bool,
    }),
  ),
};
