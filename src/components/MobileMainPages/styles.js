import styled from "astroturf";

export const Section = styled("section")`
  position: relative;
  z-index: 1;
`;

export const Title = styled("h2")`
  font-size: 1.4285rem;
  margin: 0 0 1.7142rem 1rem;
`;

export const XScrollContainer = styled("div")`
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
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
  margin-bottom: 0.8rem;
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
