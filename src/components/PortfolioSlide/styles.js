import styled, { css } from "astroturf";
import { TransitionGroup } from "react-transition-group";

import { Title as H2, Text } from "../../components/Atoms/Atoms";
import { Button } from "../../components/Buttons/Button";

export const PortfolioSlideContainer = styled("div")`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const SliderBackground = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  will-change: top, background-color;
  transition: all 200ms ease;
  @media (hover: hover) {
    @media (min-width: 769px) {
      &.hovered {
        top: -1.1428rem;
        width: calc(100% + 1.1428rem);
        height: calc(100% + 1.1428rem * 2);
        @media all and (max-height: 777px), (max-width: 1144px) {
          top: -0.9rem;
          width: calc(100% + 0.9rem);
          height: calc(100% + 0.9em * 2);
        }
      }
    }
  }
  @media (max-width: 768px) {
    border-radius: 0.2857rem;
  }
`;

export const Backend = styled("div")`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0.2857rem;
  transition: background-color 200ms ease;
  &:nth-child(2) {
    top: 1rem;
    height: calc(100% - 2rem);
    z-index: -2;
    left: 1rem;
  }

  &:nth-child(1) {
    top: 0.5rem;
    height: calc(100% - 1rem);
    z-index: -1;
    left: 0.5rem;
  }
`;

export const Title = styled(H2)`
  font-weight: 600;
  margin-bottom: 0.84rem;
`;

export const Description = styled(Text)`
  color: #fff;
  @media all and (max-height: 600px) {
    max-height: 5.4rem;
    overflow: hidden;
  }
`;

export const Content = styled("div")`
  z-index: 1;
  padding: 0 3.5714rem 3.5714rem 3.5714rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  @media all and (max-height: 777px), (max-width: 1144px) {
    padding: 0 2.1428rem 2.1428rem 2.1428rem;
  }
  @media screen and (max-width: 576px) and (min-width: 415px) {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0 2vw 0 11vw;
    h2 {
      font-size: 1rem;
    }
  }
  @media (max-width: 414px) {
    padding: 0 1.4285rem 1.4285rem 1.4285rem;
    h2 {
      font-size: 1rem;
    }
  }
`;

export const ControlBlock = styled("div")`
  z-index: 2;
  position: absolute;
  height: 4rem;
  right: 0;
  bottom: -1rem;
  transform: translate(1.1428rem, 1.1428rem);
  @media all and (max-height: 777px), (max-width: 1144px) {
    bottom: -2rem;
  }
`;

export const MobileTitle = styled("h1")`
  color: #262c37;
  font-size: 1.2857rem;
  position: absolute;
  margin: 0;
  right: -8vw;
  top: -0.4rem;
  width: 100vw;
  transform: translateY(-100%);
  @media (max-width: 414px) {
    top: 0;
    left: 0;
    right: auto;
    bottom: 9.5714rem;
    margin: 0;
    width: 100vw;
    height: calc(100vw / 2.5);
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
    background-image: url("../../img/arrow.svg");
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
  @media all and (max-height: 777px), (max-width: 1144px) {
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 576px) and (min-width: 321px) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Screenshot = styled("img")`
  position: absolute;
  border-radius: 0.1428rem;
  margin-top: 7.1428rem;
  width: 46.4285rem;
  height: auto;
  max-width: none;
  right: 3.125rem;
  box-shadow: 1.1428rem 1.1428rem 2.2857rem 0 rgba(50, 57, 69, 0.25);
  @media all and (max-height: 777px), (max-width: 1144px) {
    margin-top: 2.1428rem;
    width: 37.1428rem;
    right: 2.1428rem;
  }
  @media all and (max-height: 600px), (max-width: 768px) {
    margin-top: 5.2857rem;
    right: 2.8571rem;
    width: 26.2857rem;
  }
  @media (max-width: 576px) {
    right: 40vw;
    margin: auto 0;
    width: 52vw;
  }
  @media (max-width: 414px) {
    left: 6.4vw;
    right: auto;
    bottom: 9.5714rem;
    margin: 0;
    width: 100vw;
  }
`;

export const BulletsContainer = styled("div")`
  display: none;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: -1.4285rem;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Bullet = styled("div")`
  background-color: rgba(38, 44, 55, 0.25);
  transition: background-color 100ms linear;
  width: 0.4285rem;
  height: 0.4285rem;
  border-radius: 50%;
  margin-right: 0.4285rem;
  &:last-child {
    margin-right: 0;
  }
  &.isActive {
    background-color: rgba(38, 44, 55, 0.75);
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
