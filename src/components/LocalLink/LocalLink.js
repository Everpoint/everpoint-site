import styled from "astroturf";
import { Link } from "gatsby";

export const LocalLink = styled(Link)`
  color: #387bc7;
  text-decoration: none;
  transition: color 200ms linear;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
