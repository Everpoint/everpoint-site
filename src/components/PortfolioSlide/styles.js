import styled, { css } from "astroturf";
import { TransitionGroup } from "react-transition-group";

import { Button } from "../../components/Buttons/Buttons";

export const PortfolioSlideContainer = styled("div")`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SliderBackground = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  will-change: top, background;
  transition: all 200ms ease-in;
  &.disableTransition {
    transition-property: top, width, height;
  }
  @media (hover: hover) {
    &.hovered {
      top: -1.1428rem;
      width: calc(100% + 1.1428rem);
      height: calc(100% + 1.1428rem * 2);
    }
  }
  @media (max-width: 1199px) {
    @media (hover: hover) {
      &.hovered {
        top: -0.8rem;
        width: calc(100% + 0.8rem);
        height: calc(100% + 0.8rem * 2);
      }
    }
  }
  @media (max-width: 991px) {
    border-radius: 0.2857rem;
  }
`;

export const Title = styled("h2")`
  font-size: 1.4285rem;
  font-weight: 600;
  margin-bottom: 0.84rem;
  line-height: normal;
  @media (max-width: 1199px) {
    font-size: 1.2857rem;
  }
  @media (max-width: 991px) {
    font-size: 1.1428rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1rem;
  }
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 0.4rem;
  }
`;

export const Description = styled("p")`
  color: #fff;
  margin-bottom: 1rem;
  line-height: normal;
  font-size: 1.2857rem;
  @media (max-width: 1199px) {
    font-size: 1rem;
  }
  @media (max-width: 991px) {
    font-size: 0.85714rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 0.4rem;
  }
`;

export const Content = styled("div")`
  will-change: opacity, transform;
  z-index: 1;
  padding: 0 3.5714rem 3.5714rem 3.5714rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  @media (min-width: 1200px) {
    a {
      font-size: 1.1428rem;
    }
  }
  @media (max-width: 1199px) {
    padding: 0 2.8rem 2.8rem 2.8rem;
  }
  @media (max-width: 991px), (max-height: 760px) and (orientation: landscape) {
    padding: 0 2rem 2rem 2rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 0 1.4285rem 0 2.4285rem;
    h2 {
      font-size: 1rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem 0 3.5714rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 1rem;
  }
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    padding: 0 0.8rem 0 3rem;
  }
  &.disableTransition {
    transition: none;
  }
`;

export const ControlBlock = styled("div")`
  z-index: 2;
  position: absolute;
  height: 4rem;
  right: 0;
  bottom: -1rem;
  transform: translate(1.1428rem, 1.1428rem);
  @media (max-width: 1199px) {
    bottom: -1.4rem;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const MobileTitle = styled("h1")`
  color: #262c37;
  font-size: 1.2857rem;
  margin: 0;
  left: 0;
  display: none;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    display: block;
  }
  @media (max-width: 812px) and (max-height: 320px) {
    margin-top: -1rem;
  }
`;

const ControlBtn = styled(Button)`
  position: relative;
  width: 4rem;
  height: 4rem;
  transition: all 100ms ease;
  background-color: #262c37;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-size: 34% 34%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../../assets/img/icons/arrow.svg");
  }

  @media (hover: hover) {
    &:hover {
      background-color: #90c53d;
    }
  }

  &.disabled {
    background-color: #262c37;
    cursor: default;
    &:after {
      opacity: 0.25;
    }
  }
  @media (max-width: 1199px) {
    width: 2.8571rem;
    height: 2.8571rem;
  }
`;

export const PrevBtn = styled(ControlBtn)`
  margin-right: 0.5rem;
`;

export const NextBtn = styled(ControlBtn)`
  &:after {
    transform: rotate(180deg);
  }
`;

export const ScreenshotTransitionGroup = styled(TransitionGroup)`
  display: flex;
  align-items: center;
  position: relative;
  left: -7.1428rem;
  flex-grow: 1;
  flex-shrink: 0;
  max-height: calc(100% - 14.2857rem);
  @media (max-width: 1199px) {
    left: -3.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    top: 50%;
    left: -17.4rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    transform: translate(0, -50%);
    max-height: calc(100% - 2rem);
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: calc(100% + 1rem);
    height: 100%;
    max-height: none;
    left: 1rem;
    transform: translateY(calc(-100% + 5rem));
  }
`;

export const Screenshot = styled("img")`
  will-change: opacity, transform;
  position: absolute;
  top: 16%;
  max-width: 46.4285rem;
  max-height: 41vh;
  height: auto;
  box-shadow: 1.1428rem 1.1428rem 2.2857rem 0 rgba(50, 57, 69, 0.25);
  border-radius: 0.2857rem;
  @media (max-width: 1199px) {
    max-width: 100%;
    top: 12%;
  }
  @media (max-width: 991px) {
    top: 18%;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    top: 0;
    right: 0;
    height: 100%;
    max-height: none;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    top: auto;
    bottom: 0;
  }
  @media (max-height: 700px) and (min-width: 1200px) and (orientation: landscape) {
    top: 8%;
  }
  &.disableTransition {
    transition: none;
  }
`;

export const LongreadBackground = styled("div")`
  opacity: 0;
  pointer-events: none;
  z-index: 999;
  position: absolute;
  transition: width 200ms ease-out, height 200ms ease-out, top 200ms ease-out, left 200ms ease-out;
  &.goToLongread {
    opacity: 1;
  }
`;

export const transition = css`
  .entered {
    transition-duration: 200ms;
    transition-timing-function: linear;
    transition-property: transform, opacity;
  }
  .exiting {
    transition-duration: 200ms;
    transition-timing-function: linear;
    transition-property: transform, opacity;
  }
`;

export const slideUp = css`
  .entering {
    pointer-events: none;
    transform: translateY(40%);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(-40%);
  }
`;

export const slideDown = css`
  .entering {
    pointer-events: none;
    transform: translateY(-40%);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(40%);
  }
`;

export const slideLeft = css`
  .entering {
    pointer-events: none;
    transform: translateX(20%);
  }
  .entered {
    transform: translateX(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateX(-20%);
  }
`;

export const slideRight = css`
  .entering {
    pointer-events: none;
    transform: translateX(-20%);
  }
  .entered {
    transform: translateX(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateX(20%);
  }
`;

const styles = css`
  a.white {
    color: rgba(255, 255, 255, 0.5);
    > svg {
      fill: rgba(255, 255, 255, 0.5);
    }
    @media (hover: hover) {
      &:hover {
        color: rgba(255, 255, 255, 1);
        svg {
          fill: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  a.mobileMsp {
    color: rgba(10, 35, 66, 0.5);
    > svg {
      fill: rgba(10, 35, 66, 0.5);
    }
    @media (hover: hover) {
      &:hover {
        color: #0a2342;
        svg {
          fill: #0a2342;
        }
      }
    }
  }
`;

export default styles;
