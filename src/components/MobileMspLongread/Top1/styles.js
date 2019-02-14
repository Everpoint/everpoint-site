import styled from "astroturf";

export const Top1Container = styled("div")`
  position: relative;
  width: 30.5714rem;
  height: 32.1428rem;
  margin: 0 auto 6.7142rem auto;
  > svg:last-child {
    width: 10.2142rem;
    height: 13rem;
    position: absolute;
    right: -1.3rem;
    bottom: -5.6rem;
    z-index: 6;
    transition: 400ms opacity linear;
    transition-delay: 600ms;
    opacity: 0;
  }
  img {
    z-index: 5;
  }
  &.isVisible {
    > svg:last-child {
      opacity: 1;
    }
  }
  @media (max-width: 991px) {
    width: calc(30.5714rem * 0.7);
    height: calc(32.1428rem * 0.7);
    margin: 0 auto 3.85rem auto;
    > svg:last-child {
      right: -2.4rem;
      bottom: -3rem;
      width: 9.2857rem;
      height: 9.2857rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    width: calc(30.5714rem * 0.49);
    height: calc(32.1428rem * 0.49);
    margin: 0 auto 2rem auto;
    > svg:last-child {
      right: -1.6rem;
      bottom: -2rem;
      width: 6.2857rem;
      height: 6.2857rem;
    }
  }
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    width: calc(22.5714rem * 0.49);
    height: calc(24.1428rem * 0.49);
  }
`;

const Side = styled("div")`
  width: 8.5714rem;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: -1;
  svg {
    width: 2.8571rem;
    height: 2.8571rem;
    opacity: 0;
    transition-property: left, right, bottom, opacity;
    bottom: 10%;
    &:nth-child(1) {
      z-index: 4;
      transition-duration: 200ms;
    }
    &:nth-child(2) {
      z-index: 3;
      transition-duration: 400ms;
    }
    &:nth-child(3) {
      z-index: 2;
      transition-duration: 600ms;
    }
    &:nth-child(4) {
      z-index: 1;
      transition-duration: 800ms;
    }
  }
  @media (max-width: 991px) {
    width: calc(8.5714rem * 0.7);
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    width: calc(8.5714rem * 0.49);
    svg {
      width: 1.4285rem;
      height: 1.4285rem;
    }
  }
`;

export const LeftSide = styled(Side)`
  left: 0;
  transform: translateX(calc(-100% + 4rem));
  svg {
    position: absolute;
    right: -10%;
  }

  &.isVisible {
    svg {
      opacity: 1;
      &:nth-child(1) {
        right: 0;
        bottom: 13%;
      }
      &:nth-child(2) {
        right: 40%;
        bottom: 27%;
      }
      &:nth-child(3) {
        right: 12%;
        bottom: 46%;
      }
      &:nth-child(4) {
        right: 56%;
        bottom: 56%;
      }
    }
  }
  @media (max-width: 991px) {
    transform: translateX(calc(-100% + 4rem * 0.7));
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    transform: translateX(calc(-100% + 4rem * 0.49));
  }
`;

export const RightSide = styled(Side)`
  right: 0;
  transform: translateX(calc(100% - 4rem));

  svg {
    position: absolute;
    left: -10%;
  }

  &.isVisible {
    svg {
      opacity: 1;
      &:nth-child(1) {
        bottom: 23%;
        left: 5%;
      }
      &:nth-child(2) {
        bottom: 39%;
        left: 38%;
      }
      &:nth-child(3) {
        bottom: 56%;
        left: 12%;
      }
      &:nth-child(4) {
        bottom: 70%;
        left: 64%;
      }
    }
  }
  @media (max-width: 991px) {
    transform: translateX(calc(100% - 4rem * 0.7));
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    transform: translateX(calc(100% - 4rem * 0.49));
  }
`;
