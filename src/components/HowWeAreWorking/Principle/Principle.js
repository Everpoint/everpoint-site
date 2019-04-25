import React from "react";
import PropTypes from "prop-types";

import { Container, Item, Badge, Content, Title, Description } from "./styles";

export const Principle = ({ items, longread = false }) => (
  <Container longread={longread}>
    {items &&
      items.map(({ icon, iconGreen, title, description }) => (
        <Item key={title} longread={longread}>
          <Badge
            style={{ backgroundImage: `url(${longread ? iconGreen : icon})` }}
            longread={longread}
          />
          <Content>
            <Title longread={longread}>{title}</Title>
            {longread && <Description>{description}</Description>}
          </Content>
        </Item>
      ))}
  </Container>
);

Principle.propTypes = {
  itemClassName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};
