import styled, { css } from "astroturf";

import { H1 } from "../../components/Typography/Headlines";
import { Paragraph } from "../../components/Typography/Paragraph";

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding: 0 6rem;
  overflow: hidden;
  transition: background 200ms ease-in;
  @media (max-width: 1199px) {
    padding: 0 4.4rem 0 3.1428rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    padding: 0 2rem 0 1.7142rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 0 2.2rem 0 1.7142rem;
  }
`;

export const HeaderBlock = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 97.5714rem;
  @media (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

const Section = styled("section")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  @media (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const LeftSide = styled(Section)`
  max-width: 40rem;
  display: flex;
  align-items: flex-start;
  color: #fff;
  opacity: 0;
  transition-duration: 400ms;
  animation-duration: 400ms;
  transition-delay: 400ms;
  transition-property: opacity;
  transition-timing-function: ease-in;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  margin-right: 4rem;
  @media (max-width: 1199px) {
    margin-right: 3rem;
  }
  @media (max-width: 1199px) and (min-width: 768px) and (orientation: portrait) {
    width: 40%;
    margin-right: 2rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    z-index: 1;
    order: 2;
    margin-right: 0;
    margin-bottom: 3rem;
  }
  &.animate {
    opacity: 1;
  }
`;

export const RightSide = styled(Section)`
  align-items: flex-end;
  position: relative;
  @media (max-width: 767px) and (orientation: portrait),
    (max-width: 812px) and (orientation: landscape) and (min-height: 321px) {
    flex-shrink: 0;
    flex-grow: 1;
  }
  @media (max-width: 1199px) and (min-width: 768px) and (orientation: portrait) {
    width: 60%;
  }
  @media (max-width: 812px) and (max-height: 320px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    margin-top: 2rem;
    width: 34%;
  }
`;

export const Title = styled(H1)`
  margin-top: 1rem;
  @media (max-width: 767px) and (orientation: portrait) {
    margin: 0.6rem 0 0.4rem 0;
  }
`;

export const Description = styled(Paragraph)`
  font-weight: 400;
`;

export const Badge = styled("label")`
  color: #fff;
  display: inline-block;
  padding: 0.4285rem 1.5rem;
  text-transform: uppercase;
  font-weight: 400;
  border-radius: 0.2857rem;
  background-color: rgba(255, 255, 255, 0.25);
  @media (max-width: 991px) {
    padding: 0.1428rem 0.66rem;
    font-size: 0.8571rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 0 0.44rem;
    font-size: 0.7142rem;
  }
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    display: none;
  }
`;

const styles = css`
  button.scrollDownButton {
    z-index: 4;
    font-weight: 400;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    transition: 200ms linear;
    svg path {
      fill: none;
      transition: stroke 200ms linear, opacity 200ms linear;
    }
    @media (max-width: 1199px) {
      bottom: 1.4rem;
    }
    @media (max-width: 991px) {
      bottom: 1rem;
    }
    @media (max-width: 767px) and (orientation: portrait) {
      bottom: 0.4rem;
    }
    @media (hover: hover) {
      &:hover {
        svg path {
          opacity: 1;
          stroke: #183e6b;
        }
      }
    }
  }
  a.projectLink {
    font-size: 1.2857rem;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 991px) {
      font-size: 1rem;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      font-size: 0.8571rem;
    }
    @media (hover: hover) {
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .lightNavy {
    svg path {
      stroke: rgba(24, 62, 107, 0.5);
    }
  }
`;

export default styles;
