import styled from "astroturf";

export const Main = styled("main")`
  position: relative;
  padding: 3.8571rem 0 0 0;
  align-items: flex-start;
  flex-direction: column;
`;

export const Background = styled("div")`
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(../assets/img/main-slides/earth.svg);
`;
