import styled from "astroturf";

export const Figure = styled("figure")`
  display: flex;
  padding: 4rem 0;
  justify-content: flex-start;
  &.odd {
    justify-content: flex-end;
  }
`;

export const Img = styled("img")`
  &.odd {
    order: 2;
  }
`;

export const Content = styled("div")`
  max-width: 35.7142rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 3.5714rem;
  &.odd {
    order: 1;
    padding: 0 3.5714rem 0 0;
  }
`;

export const Title = styled("h2")`
  font-size: 1.4285rem;
`;

export const Description = styled("p")`
  font-size: 1.2857rem;
  line-height: 1.33;
  margin-bottom: 1.8rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
