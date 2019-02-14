import styled from "astroturf";

export const Content = styled("main")`
  position: relative;
  display: flex;
  align-items: center;
  margin: 5.7971rem auto 0 auto;
  width: 100%;
  height: calc(100% - 5.7971rem);
  justify-content: space-between;
  @media (max-width: 767px) and (orientation: portrait),
    (max-width: 812px) and (orientation: landscape) {
    margin: 4.5971rem auto 0 auto;
    height: calc(100% - 4.5971rem);
  }
`;
