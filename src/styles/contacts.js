import styled, { css } from "astroturf";

import { Button } from "../components/Buttons/Buttons";
import { Link as ContactLink } from "../components/Atoms/Atoms";
import { Main as MainBlock } from "../components/MainPageElements/Main";
import { Side } from "../components/MainPageElements/Section";

export const Container = styled("div")`
  width: 100%;
  height: 100%;
`;

export const Main = styled(MainBlock)`
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding-top: 0;
    padding-bottom: 1.7142rem;
  }
`;

export const Content = styled(Side)`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  flex-shrink: 0;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 100%;
    padding-bottom: 1.4rem;
  }
`;

export const LeftSide = styled("section")``;

export const RightSide = styled("div")`
  align-self: flex-end;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`;

export const PrimaryButton = styled(Button)``;

export const StopeButton = styled(PrimaryButton)`
  margin-left: 0.7142rem;
`;

export const Link = styled(ContactLink)`
  @media (max-width: 991px) {
    font-size: 1.14285rem;
    margin-bottom: 0.2rem;
  }
`;

export const SocialBlock = styled("div")`
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    top: 0.2rem;
    position: relative;
    display: flex;
  }
`;

export const SocialLink = styled("a")`
  opacity: 0.25;
  display: inline-block;
  cursor: pointer;
  width: 1.7142rem;
  height: 1.7142rem;
  margin-right: 1rem;
  background-repeat: no-repeat;
  transition: opacity 200ms ease;
  &:last-child {
    margin-right: 0;
  }
  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 991px) {
    margin-top: 1.7142rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-top: 0.8rem;
  }
`;

export const Copyright = styled(MainBlock)`
  color: rgba(38, 44, 55, 0.5);
  position: absolute;
  left: 50%;
  bottom: 4.5714rem;
  transform: translateX(-50%);
  align-items: flex-end;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    bottom: 0.5rem;
    font-size: 0.7142rem;
  }
`;

const styles = css`
  .address {
    cursor: default;
    &:hover {
      color: #262c37;
    }
    @media (min-width: 992px) {
      br {
        display: none;
      }
    }
    @media (max-width: 991px) {
      margin-bottom: 1rem;
    }
  }
  div.background {
    background-position: 75% center;
    @media (max-width: 991px) {
      background-position: 66% center;
    }
    &.hideBackground {
      display: none;
    }
  }
`;

export default styles;
