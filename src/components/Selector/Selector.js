import React from "react";
import PropTypes from "prop-types";

import { SelectorContainer, SelectorItem } from "./styles";

export const Selector = ({ items, selectedIndex, onChange, className }) => {
  return (
    <SelectorContainer className={className}>
      {items.map(({ title }, index) => (
        <SelectorItem
          key={title}
          isActive={selectedIndex === index}
          onClick={() => onChange(index)}
        >
          {title}
        </SelectorItem>
      ))}
    </SelectorContainer>
  );
};

Selector.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};
