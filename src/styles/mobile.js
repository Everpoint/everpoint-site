import styled from "astroturf";

export const Main = styled("main")`
  position: relative;
  padding: 3.8571rem 0 0 0;
  align-items: flex-start;
  flex-direction: column;
`;

export const Background = styled("div")`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 138rem;
  background-position: center top;
  background-size: auto 34.2857rem;
  background-repeat: repeat-y;
  background-image: url(../assets/img/main-slides/earth.svg);
`;
