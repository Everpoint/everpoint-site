import React from "react";
import PropTypes from "prop-types";

import { Container, Item, Badge, Content, Title, Description } from "./styles";

export const Principle = ({ items, itemClassName, longread = false }) => (
  <Container longread={longread}>
    {items &&
      items.map(({ icon, title, description }) => (
        <Item key={title} className={itemClassName}>
          <Badge style={{ backgroundImage: `url(${icon})` }} longread={longread} />
          <Content>
            {longread ? <Title>{title}</Title> : <span>{title}</span>}
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
