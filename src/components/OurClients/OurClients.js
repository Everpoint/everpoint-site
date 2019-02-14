import React from "react";
import PropTypes from "prop-types";

import { OurClientsContainer, OurClientsItem } from "./styles";

export const OurClients = ({ items }) => {
  return (
    <OurClientsContainer>
      {items.map((url, index) => (
        <OurClientsItem
          src={url}
          alt={index}
          key={`client-logo-${index}`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}
    </OurClientsContainer>
  );
};

OurClients.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
