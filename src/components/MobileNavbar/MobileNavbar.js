import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {
  NavbarContainer,
  Nav,
  LeftSide,
  LanguageSwitch,
  LanguageLink,
} from "../../components/Navbar/styles";
import logo from "../../assets/img/assets/logo.svg";
import { Hamburger } from "../Buttons/IconButtons";
import { Menu } from "./Menu";
import { common } from "../../styles/common";
import { Logo } from "./styles";
import styles from "../../components/Navbar/styles";

export class MobileNavbar extends PureComponent {
  static propTypes = {
    fixed: PropTypes.bool,
    scrollTo: PropTypes.func,
    toggleMenu: PropTypes.func,
    mobileMenuIsOpen: PropTypes.bool,
  };

  render() {
    const { routes, fixed, mobileMenuIsOpen, scrollTo, toggleMenu, titles } = this.props;

    return (
      <NavbarContainer mobileMenuIsOpen={mobileMenuIsOpen} fixed={fixed}>
        <Nav className={common.container} mobileMenuIsOpen={mobileMenuIsOpen}>
          <LeftSide>
            <Logo as="img" src={logo} alt="logo" />
            <LanguageSwitch>
              <LanguageLink isActive>ru</LanguageLink>
              <LanguageLink>en</LanguageLink>
            </LanguageSwitch>
            <Hamburger
              isOpen={mobileMenuIsOpen}
              onClick={toggleMenu}
              className={styles.hamburger}
            />
          </LeftSide>
          <Menu routes={routes} titles={titles} isOpen={mobileMenuIsOpen} scrollTo={scrollTo} />
        </Nav>
      </NavbarContainer>
    );
  }
}
