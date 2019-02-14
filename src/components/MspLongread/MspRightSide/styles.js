import styled from "astroturf";

export const LayersBlock = styled("div")`
  width: 100%;
  height: 100%;
  > img {
    display: block;
    width: 129%;
    max-width: none;
    height: auto;
    left: -0.7vw;
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
      opacity: 0;
      &:nth-child(3) {
        transition-delay: 400ms;
      }
      &:nth-child(4) {
        transition-delay: 800ms;
      }
      @media (max-width: 767px) and (orientation: portrait) {
        left: -1.46vw;
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
  top: 50.8%;
  transform: translateY(-50%);
  display: flex;
  left: 7.2%;
  width: 93.7%;
  height: 41%;
  position: absolute;
  align-items: flex-start;
  justify-content: space-between;
  img {
    width: 100%;
    height: auto;
    max-width: none;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    height: calc(100vw / 2.18);
  }
`;

const Col = styled("div")`
  top: 4%;
  left: 1.4%;
  width: 36%;
  position: relative;
  height: 100%;
  > img {
    transition-duration: 200ms;
    transition-property: opacity, transform;
    transition-timing-function: ease-in;
    opacity: 0;
    vertical-align: top;
    &:nth-child(1) {
      transition-delay: 1200ms;
    }
    &:nth-child(2) {
      transition-delay: 1400ms;
    }
    &:nth-child(3) {
      transition-delay: 1600ms;
    }
    &:nth-child(4) {
      transition-delay: 1800ms;
    }
  }
`;

export const LeftCol = styled(Col)`
  > img {
    transform: translateY(50%);
  }
  &.animate {
    > img {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

export const RightCol = styled(Col)`
  left: 0.68%;
  margin-top: -16.44%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  > img {
    transform: translateY(-50%);
  }
  &.animate {
    > img {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;
