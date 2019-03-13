import styled from "astroturf";
import { Link as GLink } from "gatsby";

export const DefaultGatsbyLink = styled(GLink)`
  color: #90c53d;
  text-decoration: none;
  transition: color 200ms linear;
  @media (hover: hover) {
    &:hover {
      color: #749e31;
      text-decoration: underline;
    }
  }
`;
