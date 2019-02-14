import styled from "astroturf";

export const Background = styled("div")`
  will-change: transform;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.disableTransition {
    opacity: 1;
    transition: none !important;
    transform: none;
  }
`;
