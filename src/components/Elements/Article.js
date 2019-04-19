import styled from "astroturf";

export const Article = styled("article")`
  width: 100%;
  max-width: 64.2857rem;
  margin: 0 auto;
  > p {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
