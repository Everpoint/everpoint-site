import React from "react";
import PropTypes from "prop-types";

import { Container, Content, Title, Hr } from "./styles";

export const Header = ({ title }) => {
  return (
    <Container>
      <Content>
        <Hr />
        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
