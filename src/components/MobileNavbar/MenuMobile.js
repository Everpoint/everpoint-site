import React from "react";
import PropTypes from "prop-types";

import { LinkContainer, MobileMenu } from "../../components/Navbar/styles";
import { Link as OutsideLink } from "../Atoms/Atoms";

export const MenuMobile = ({ routes, isOpen, scrollTo, titles, isMobile }) => {
  return (
    <MobileMenu isOpen={isOpen} isMobile={isMobile}>
      {routes.map(({ text, id, outsideLink, Icon, Element }) => {
        const item = titles.find(item => item.id === id);
        return (
          <LinkContainer
            withIcon={Boolean(Icon)}
            key={id}
            onClick={!outsideLink ? () => scrollTo(id) : void 0}
          >
            {Icon && <Icon />}
            <OutsideLink href={outsideLink} target="_blank">
              {Element && <Element />}
              {(item && item.title) || text}
            </OutsideLink>
          </LinkContainer>
        );
      })}
    </MobileMenu>
  );
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool,
  scrollTo: PropTypes.func,
};
