import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { MainLayoutConsumer } from "../MainLayoutProvider/MainLayoutProvider";
import logo from "../../assets/img/assets/logo.svg";
import { Hamburger } from "../../components/Buttons/IconButtons";
import styles, {
  NavbarContainer,
  Nav,
  LogoLink,
  Logo,
  LanguageSwitch,
  LanguageLink,
  LeftSide,
} from "./styles";
import { common } from "../../styles/common";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { routes } from "../../routes";

class NavbarBase extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    const { normalizeData } = prevState;

    if (!normalizeData.length) {
      return {
        normalizeData: data.map(({ node }) => node.frontmatter),
      };
    }

    return null;
  }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    additionalMenuIsOpenId: null,
    normalizeData: [],
  };

  onOpenAdditionalMenu = id => {
    this.setState({ additionalMenuIsOpenId: id });
  };

  onCloseAdditionalMenu = () => {
    this.setState({ additionalMenuIsOpenId: null });
  };

  render() {
    const { additionalMenuIsOpenId, normalizeData } = this.state;
    const {
      location,
      scrollTop,
      coloredNav,
      onNavLinkClick,
      currentRoute,
      mobileMenuIsOpen,
      toggleMobileMenu,
      selectedSectionIndex,
      sections,
      onSectionChange,
      transitionEnd,
    } = this.props;

    const transform = `translateY(${scrollTop}px)`;
    const section = sections[selectedSectionIndex];

    return (
      <NavbarContainer
        style={{ transform }}
        className={cn({
          [styles.coloredNav]: coloredNav || additionalMenuIsOpenId,
        })}
        onMouseLeave={this.onCloseAdditionalMenu}
        mobileMenuIsOpen={mobileMenuIsOpen}
      >
        <Nav className={common.container} mobileMenuIsOpen={mobileMenuIsOpen}>
          <LeftSide>
            <LogoLink
              onClick={event =>
                onNavLinkClick({
                  index: 0,
                  transitionEnd: false,
                  id: "index",
                  event,
                })
              }
              to="/"
            >
              <Logo as="img" src={logo} alt="logo" />
            </LogoLink>
            <LanguageSwitch>
              <LanguageLink isActive>ru</LanguageLink>
              <LanguageLink>en</LanguageLink>
            </LanguageSwitch>
            <Hamburger
              isOpen={mobileMenuIsOpen}
              onClick={toggleMobileMenu}
              className={styles.hamburger}
            />
          </LeftSide>
          <DesktopMenu
            data={normalizeData}
            transitionEnd={transitionEnd}
            routes={routes}
            selectedId={typeof section === "object" ? section.id : undefined}
            location={location}
            additionalMenuIsOpenId={additionalMenuIsOpenId}
            currentRoute={currentRoute}
            onSectionChange={onSectionChange}
            onNavLinkClick={onNavLinkClick}
            onOpenAdditionalMenu={this.onOpenAdditionalMenu}
            onCloseAdditionalMenu={this.onCloseAdditionalMenu}
          />
          {mobileMenuIsOpen && (
            <MobileMenu
              data={normalizeData}
              routes={routes}
              location={location}
              onNavLinkClick={onNavLinkClick}
            />
          )}
        </Nav>
      </NavbarContainer>
    );
  }
}

export const Navbar = data => (
  <MainLayoutConsumer>{props => <NavbarBase {...props} {...data} />}</MainLayoutConsumer>
);
