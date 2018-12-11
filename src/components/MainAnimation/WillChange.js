import styled from "astroturf";

export const WillChange = styled("section")`
  will-change: transform;
  &.fullViewport {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
