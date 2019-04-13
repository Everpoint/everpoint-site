import styled from "astroturf";

export const HeaderContainer = styled("header")`
  width: 100%;
  position: relative;
  height: 54.8571rem;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(38, 44, 55, 0.7);
  }
`;

export const Photo = styled("img")`
  width: 100%;
  height: auto;
`;
