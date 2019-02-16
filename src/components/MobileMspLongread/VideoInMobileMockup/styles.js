import styled from "astroturf";

export const Container = styled("div")`
  flex-shrink: 0;
  position: relative;
  z-index: 8;
  width: auto;
  height: 100%;
  max-width: 30.5714rem;
  max-height: 56.7857rem;
  video {
    width: 76%;
    height: 87.8%;
    z-index: -1;
    border-radius: 1rem;
    top: 4.2%;
    left: 15.8%;
    position: absolute;
  }
  &.mockUpLeft {
    video {
      left: 8.4%;
    }
  }
  @media (max-width: 991px) {
    video {
      top: 4%;
      right: 8%;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    &.mockUpLeft {
      margin-right: 1.4rem;
    }
    &:not(.mockUpLeft) {
      margin-left: 1.4rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1rem;
    &.mockUpLeft {
      margin-left: 0.8rem;
    }
    &:not(.mockUpLeft) {
      margin-right: 0.8rem;
    }
  }
`;

export const MockUp = styled("img")`
  padding-top: 1.5px;
  position: relative;
  width: auto;
  max-height: 93.5vh;
  max-height: calc(var(--vh, 1vh) * 93.5);
  @media (max-width: 991px) {
    max-width: 18.8571rem;
    height: auto;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    max-height: 87.5vh;
    max-height: calc(var(--vh, 1vh) * 87.5);
  }

  @media (max-width: 767px) and (orientation: portrait) {
    max-width: 13.4rem;
  }
`;
