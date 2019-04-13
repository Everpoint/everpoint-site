import React from "react";
import PropTypes from "prop-types";

import photo from "../../../assets/img/team-members-photos/11.jpg";

import { HeaderContainer, Photo } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Photo src={photo} alt="photo" />
    </HeaderContainer>
  );
};

Header.propTypes = {
  component: PropTypes.bool,
};
