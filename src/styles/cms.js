import styled from "astroturf";

export const Viewport = styled("div")`
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  z-index: 4;
`;

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Row = styled("div")`
  padding: 4.4rem;
`;
