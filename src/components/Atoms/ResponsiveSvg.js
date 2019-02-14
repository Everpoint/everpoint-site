import styled from "astroturf";

export const ResponsiveSvg = styled("div")`
  width: 100%;
  height: 0;
  padding-top: 100%; /* Aspect ratio */
  position: relative;
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
