import styled from "astroturf";

export const LayersBlock = styled("div")`
  position: relative;
  > img {
    display: block;
    width: 129%;
    max-width: none;
    opacity: 0;
    height: auto;
    left: -12%;
    &:first-child {
      position: relative;
    }
    &:not(:first-child) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition-duration: 400ms;
      transition-property: opacity;
      transition-timing-function: ease-in;
      &:nth-child(3) {
        transition-delay: 400ms;
      }
      @media (max-width: 767px) and (orientation: portrait) {
        width: 124%;
        left: -9%;
      }
    }
  }
  &.animate {
    img {
      opacity: 1;
    }
  }
`;

export const CardsBlock = styled("div")`
  top: 48.4%;
  transform: translateY(-50%);
  left: -0.4%;
  width: 101%;
  height: 42%;
  position: absolute;
  img {
    position: absolute;
    height: auto;
    transition-delay: 800ms;
    opacity: 0;
    transition-property: opacity, transform;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    &:nth-child(1) {
      width: 28%;
      top: 11%;
      left: -6%;
      transform: translateX(50%);
    }
    &:nth-child(2) {
      top: 2%;
      width: 34%;
      right: -4%;
      transform: translateX(-50%);
    }
    &:nth-child(3) {
      left: 0;
      bottom: -19%;
      transform: translateY(-50%);
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    top: 50%;
    left: 2.6%;
    width: 97%;
    height: calc(100vw / 2.2);
    img {
      &:nth-child(3) {
        bottom: -16%;
      }
    }
  }
  &.animate {
    img {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;
