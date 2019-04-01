import styled from "astroturf";

export const Section = styled("section")`
  height: 31.2857rem;
`;

export const Title = styled("h2")`
  margin: 0 0 0 1rem;
`;

export const CardContainer = styled("div")`
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  padding: 2rem 0;
`;

export const Card = styled("article")`
  z-index: 1;
  padding: 1.7142rem;
  display: flex;
  flex-direction: column;
  margin-left: 0.7142rem;
  border-radius: 0.2857rem;
  width: 19.5714rem;
  flex-grow: 1;
  flex-shrink: 0;
  &:first-of-type {
    margin-left: 1rem;
  }
`;

export const PaddingBlock = styled(Card)`
  padding: 0;
  margin: 0;
  width: 1rem;
  height: 1rem;
`;

export const Description = styled("p")`
  font-size: 0.8571rem;
  margin-bottom: 0.4rem;
  line-height: 1.5;
`;
