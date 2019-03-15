import styled from "astroturf";

export const ConstellationPointsContainer = styled("div")`
  position: relative;
  flex-grow: 1;
  height: 30.5714rem;
  opacity: 0;
  transition: 200ms opacity ease;
  transition-delay: 400ms;
  @media (max-width: 991px) {
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    position: absolute;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
  &.isVisible {
    opacity: 1;
  }
`;

export const TransformContainer = styled("div")`
  position: absolute;
  width: 59%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  bottom: 0;
  @media (max-width: 1199px) {
    left: 0;
    transform: none;
    width: calc(100% - 3.4285rem);
  }
  @media (max-width: 991px) {
    width: calc(100% - 2rem);
  }
`;

export const PointMain = styled("div")`
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.7142rem solid rgba(33, 34, 36, 0.25);
  transform: scale(1);
  &:before {
    content: "";
    width: 12px;
    height: 12px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #212224;
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1.4);
    }
  }
  @media (max-width: 991px) {
    width: 1.4rem;
    height: 1.4rem;
    &:before {
      width: 8px;
      height: 8px;
    }
  }
`;

export const Point = styled(PointMain)`
  cursor: pointer;
  transform-origin: center;
  transition-property: background-color, border, transform;
  transition-duration: 200ms;
  transition-timing-function: ease;
  &:nth-child(1) {
    top: 78%;
    right: 0;
  }
  &:nth-child(2) {
    top: 8%;
    left: 78%;
  }
  &:nth-child(3) {
    top: 61%;
    left: 55%;
  }
  &:nth-child(4) {
    top: 31%;
    left: 28%;
  }
  &:nth-child(5) {
    top: 82%;
    left: 0;
  }
  &.isActive {
    cursor: default;
    border: 0.7142rem solid rgba(144, 197, 61, 0.25);
    transform: scale(1.4);
    &:before {
      background-color: #90c53d;
    }
  }
  @media (max-width: 991px) {
    &:nth-child(3) {
      top: 66%;
      left: 58%;
    }
    &:nth-child(4) {
      top: 10%;
      left: 25%;
    }
    &:nth-child(5) {
      top: 73%;
      left: 19%;
    }
  }
`;
