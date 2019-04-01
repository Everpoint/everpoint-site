import React from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

import { LinkContainer, MobileMenu as MobileMenuUI } from "../../components/Navbar/styles";
import { Link as OutsideLink } from "../Atoms/Atoms";

const MobileMenu = styled(MobileMenuUI)`
  width: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: 200ms opacity ease;
  &.isOpen {
    width: 100%;
    height: auto;
    opacity: 1;
    visibility: visible;
  }
`;

export const Menu = ({ routes, isOpen, scrollTo, titles }) => {
  return (
    <MobileMenu isOpen={isOpen}>
      {routes.map(({ text, id, route, outsideLink }, index) => {
        const item = titles.find(item => item.id === id);
        return (
          <LinkContainer key={id} onClick={!outsideLink ? () => scrollTo(index) : void 0}>
            <OutsideLink href={outsideLink} target="_blank">
              {(item && item.title) || text}
            </OutsideLink>
          </LinkContainer>
        );
      })}
    </MobileMenu>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  scrollTo: PropTypes.func,
};
