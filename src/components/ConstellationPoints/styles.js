import styled from "astroturf";

export const ConstellationPointsContainer = styled("div")`
  position: absolute;
  width: 40vw;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  @media (max-width: 1250px) {
    width: 30vw;
  }
  @media (max-width: 1199px) {
    width: 100vw;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: 400vw;
    left: 50%;
    transform: translate(-50%, calc(-100% - 2rem));
  }
  &.disableTransition {
    transition: none;
  }
`;

export const TransformContainer = styled("div")`
  will-change: transform;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 500ms cubic-bezier(0.2, 1, 0.6, 1) 0s;
`;

export const PointMain = styled("div")`
  position: absolute;
  background-color: #212224;
  width: 0.8571rem;
  height: 0.8571rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.7142rem rgba(33, 34, 36, 0.25);
`;

export const FakePoint = styled(PointMain)`
  opacity: 0;
  top: 50%;
  right: 0;
  transform: translate(calc(-50% - 1.8rem), -50%);
  @media (max-width: 767px) and (orientation: portrait) {
    top: auto;
    right: auto;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  }
`;

export const Point = styled(PointMain)`
  transition-property: background-color, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.2, 1, 0.6, 1);
  &:nth-child(1) {
    top: 50%;
    right: 0;
    transform: translate(calc(-50% - 1.8rem), -50%);
  }
  &:nth-child(2) {
    top: 8%;
    left: 76%;
  }
  &:nth-child(3) {
    top: 32%;
    left: 40%;
  }
  &:nth-child(4) {
    top: 83%;
    left: 75%;
  }
  &:nth-child(5) {
    top: 93%;
    left: 30%;
  }
  @media (max-width: 1199px) {
    &:nth-child(2) {
      top: 136%;
      left: 58%;
    }
    &:nth-child(3) {
      top: 30%;
      left: 49%;
    }
    &:nth-child(4) {
      top: 151%;
      left: 19%;
    }
    &:nth-child(5) {
      top: 98%;
      left: 4%;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    &:nth-child(1) {
      top: auto;
      right: auto;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
    }
    &:nth-child(2) {
      top: 5%;
      left: 31%;
    }
    &:nth-child(3) {
      top: 89%;
      left: 20%;
    }
    &:nth-child(4) {
      top: 15%;
      left: 10%;
    }
    &:nth-child(5) {
      top: 144%;
      left: 4%;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    &:nth-child(2) {
      top: 119%;
      left: 56%;
    }
    &:nth-child(3) {
      top: 16%;
      left: 20%;
    }
    &:nth-child(4) {
      top: 101%;
      left: -16%;
    }
    &:nth-child(5) {
      top: 174%;
      left: 17%;
    }
  }
  &.isActive {
    background-color: #90c53d;
    box-shadow: 0 0 0 0.7142rem rgba(144, 197, 61, 0.25);
  }
`;
