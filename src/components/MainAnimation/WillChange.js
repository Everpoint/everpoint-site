import styled from "astroturf";

export const WillChange = styled("section")`
  &.fullViewport {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &.left {
    flex-shrink: 0;
    padding-right: 6rem;
    @media (max-width: 1199px) {
      padding-right: 3.5714rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
      flex-shrink: 1;
      padding-right: 1.7857rem;
    }
  }
`;
