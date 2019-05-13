import styled from "astroturf";
import { Link } from "gatsby";

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

export const GatsbyLink = styled(Link)`
  cursor: pointer;
  color: #90c53d;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
