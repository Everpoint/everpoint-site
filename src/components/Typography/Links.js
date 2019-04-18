import styled from "astroturf";

export const DefaultLink = styled("a")`
  cursor: pointer;
  color: #90c53d;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
