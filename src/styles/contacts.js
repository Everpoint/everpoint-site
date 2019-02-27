import styled, { css } from "astroturf";

import { Button } from "../components/Buttons/Buttons";
import { Link as ContactLink } from "../components/Atoms/Atoms";
import { Main as MainBlock } from "../components/MainPageElements/Main";
import { Side } from "../components/MainPageElements/Section";

export const Main = styled(MainBlock)`
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding-bottom: 1.7142rem;
  }
`;

export const Content = styled(Side)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 100%;
  }
`;

export const LeftSide = styled("section")``;

export const RightSide = styled("div")`
  align-self: flex-end;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const PrimaryButton = styled(Button)``;

export const StopeButton = styled(PrimaryButton)`
  margin-right: 0.7142rem;
`;

export const Link = styled(ContactLink)`
  @media (max-width: 991px) {
    margin-bottom: 0.2rem;
  }
`;

export const SocialBlock = styled("div")`
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    a {
      margin-top: 0.4rem;
    }
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
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1199px) {
    width: 1.14285rem;
    height: 1.14285rem;
  }
  @media (max-width: 991px) {
    margin-top: 1.7142rem;
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
      margin-bottom: 0.4rem;
    }
  }
  .telegramBtn {
    background-color: #90c53d;
    position: absolute;
    right: 6rem;
    bottom: 4.5714rem;
    @media (max-width: 1024px) {
      right: 3.5714rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      right: 1.7857rem;
      bottom: 1.4142rem;
    }
  }
  .background {
    background-position: 75% center;
    @media (max-width: 767px) and (orientation: portrait) {
      height: 117%;
      width: 111%;
      top: -14%;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      background-position: 74% 24%;
      background-size: 130%;
    }
    @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
      only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
      background-position: 53% 28%;
      background-size: 107%;
    }
  }
`;

export default styles;
