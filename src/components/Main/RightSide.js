import styled from "astroturf";

export const RightSide = styled("div")`
  will-change: transform, opacity;
  &.disableTransition {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;
