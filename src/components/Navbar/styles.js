import styled, { css } from "astroturf";
import { Link as GatsbyLink } from "gatsby";

export const mobileMenu = 991;

export const NavbarContainer = styled("nav")`
  width: 100%;
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0);
  transition: background 200ms ease-in;
  &.mobileMenuIsOpen {
    height: 100%;
  }
  &.fixed {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.05);
  }
`;

export const Nav = styled("div")`
  margin: 0 auto;
  pointer-events: auto !important;
  display: flex;
  align-items: flex-start;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  @media (max-width: ${mobileMenu}px) {
    &.mobileMenuIsOpen {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: fixed;
      background-color: #fff;
      flex-direction: column;
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding-top: 0.64rem;
    padding-bottom: 0.64rem;
  }

  * {
    pointer-events: auto !important;
  }
`;

export const LeftSide = styled("div")`
  position: relative;
  z-index: 1;
  height: 2.5421rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: ${mobileMenu}px) {
    width: 100%;
  }
`;

export const LogoLink = styled(GatsbyLink)`
  width: 100%;
  max-width: 10.7142rem;
  display: flex;
  align-items: center;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    max-width: 7.1428rem;
  }
`;

export const Logo = styled("img")`
  width: auto;
  height: 2.1428rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 1.4428rem;
  }
`;

export const LanguageSwitch = styled("div")`
  padding: 0 1.4285rem;
`;

export const LanguageLink = styled("a")`
  color: rgba(#212224, 0.5);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7142rem;
  font-weight: 600;
  &:first-child {
    padding-right: 0.4444rem;
  }
  &:last-child {
    padding-right: 0;
  }
  &.isActive {
    color: #212224;
  }
`;

export const Menu = styled("ul")`
  z-index: 1;
  list-style: none;
  display: flex;
  padding: 0.4457rem 0 0 0;
  margin: 0 0 0 auto;
  @media (max-width: ${mobileMenu}px) {
    display: none;
  }
  > li {
    > a {
      transition: color 200ms ease;
      @media (hover: hover) {
        &:hover {
          color: #90c53d;
        }
      }
    }

    > menu {
      a {
        white-space: nowrap;
      }
    }
  }
`;

export const MobileMenu = styled("ul")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  z-index: 1;
  list-style: none;
  padding: 1.4714rem 0 0 0;
  flex-shrink: 0;
  flex-grow: 1;
  width: 100%;
  @media (max-width: 812px) and (orientation: landscape) {
    padding: 1rem 0 0 0;
  }
  @media (min-width: 992px) {
    display: none;
  }

  &.isMobile {
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
  }
`;

export const LinkContainer = styled("li")`
  margin-right: 1.4285rem;
  align-self: flex-start;
  &:last-child {
    margin-right: 0;
  }
  > a {
    display: inline-block;
    font-weight: 600;
    font-size: 1.1428rem;
  }
  @media (max-width: ${mobileMenu}px) {
    align-self: center;
    margin: 0 0 2.8571rem 0;
    > a {
      font-size: 1.7142rem;
      font-weight: bold;
    }
    &:last-child {
      margin: 0;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin: 0 0 1.4285rem 0;
    > a {
      font-size: 1.1428rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin: 0 0 2.1428rem 0;
    > a {
      font-size: 1.2857rem;
    }
  }
  @media (max-height: 480px) {
    margin: 0 0 1rem 0;
    > a {
      font-size: 1.1428rem;
    }
  }
  @media (max-height: 270px),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    margin: 0 0 0.4rem 0;
    > a {
      font-size: 1rem;
    }
  }
  &:nth-child(4) {
    display: flex;
    menu {
      margin-top: 2.4rem;
      justify-content: flex-end;
      > ul {
        text-align: right;
      }
    }
  }
  menu {
    width: 0.0001px;
  }
`;

export const Link = styled(GatsbyLink)`
  white-space: nowrap;
  outline: none;
  color: #262c37;
  text-decoration: none;
  font-weight: 600;
  line-height: normal;
`;

const styles = css`
  .activeLink {
    color: #90c53d;
    > span {
      position: relative;
      &:before {
        left: 50%;
        transform: translate(-50%, 200%);
        bottom: 0;
        position: absolute;
        display: block;
        content: "";
        width: 0.2857rem;
        height: 0.2857rem;
        background-color: #90c53d;
        border-radius: 50%;
      }
    }
  }
  .mobileActiveLink {
    color: #90c53d;
  }
  .coloredNav {
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.05);
    background: rgba(255, 255, 255, 1);
  }
  .withoutAdditionalMenuAndIsActive {
    cursor: default;
  }
  .hamburger {
    margin-left: auto;
    display: none;
    @media (max-width: ${mobileMenu}px) {
      display: block;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export default styles;
