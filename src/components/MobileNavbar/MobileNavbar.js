import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import {
  NavbarContainer,
  Nav,
  LeftSide,
  LanguageSwitch,
  LanguageLink,
  Logo,
} from "../../components/Navbar/styles";
import logo from "../../assets/img/assets/logo.svg";
import { Hamburger } from "../Buttons/IconButtons";
import { MenuMobile } from "./MenuMobile";
import { common } from "../../styles/common";
import styles from "../../components/Navbar/styles";

export class MobileNavbar extends PureComponent {
  static propTypes = {
    fixed: PropTypes.bool,
    scrollTo: PropTypes.func,
    toggleMenu: PropTypes.func,
    mobileMenuIsOpen: PropTypes.bool,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { routes } = nextProps;
    const { additionalRoutes } = prevState;

    if (additionalRoutes.length === 0) {
      const additionalSections = [];

      routes.forEach(item => {
        if (item.id === "jobs") {
          item.sections.forEach(section => {
            if (section.id === "vacancy" || section.id === "employees") {
              additionalSections.push({
                ...section,
                text: section.id === "employees" ? section.groupName : section.text,
              });
            }
          });
        } else {
          additionalSections.push(item);
        }
      });

      return {
        additionalRoutes: additionalSections,
      };
    }

    return null;
  }

  state = {
    additionalRoutes: [],
    fixed: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, true);
  }

  onScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      this.setState({
        fixed: true,
      });
    } else {
      this.setState({
        fixed: false,
      });
    }
  };

  render() {
    const { additionalRoutes, fixed } = this.state;
    const { mobileMenuIsOpen, scrollTo, toggleMenu, titles } = this.props;

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
          <MenuMobile
            routes={additionalRoutes}
            titles={titles}
            isOpen={mobileMenuIsOpen}
            scrollTo={scrollTo}
          />
        </Nav>
      </NavbarContainer>
    );
  }
}
