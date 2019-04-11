import styled, { css } from "astroturf";

import { Section as SectionUI, Card, Description as DescriptionUI } from "../styles";

export const Section = styled(SectionUI)`
  display: flex;
  flex-direction: column;
  margin-bottom: 6.4444rem;
`;

export const Article = styled(Card)`
  padding: 0 2rem 0 0;
  align-items: flex-start;
  height: 21rem;
  background-color: transparent;
  box-shadow: none;
`;

export const Title = styled("h4")`
  color: #90c53d;
  margin-bottom: 0.4rem;
`;

export const Date = styled("div")`
  font-size: 0.8571rem;
  line-height: normal;
  font-weight: 600;
  color: rgba(38, 44, 55, 0.25);
  margin-bottom: 0.6rem;
`;

export const Description = styled(DescriptionUI)``;

export const Logo = styled("img")`
  margin: auto 0 1rem 0;
  width: auto;
  height: 1.2rem;
`;

const styles = css`
  .readMore {
    font-size: 0.8571rem;
    color: #90c53d;
  }
  .readAll {
    margin: 1.4rem 0 0 1rem;
  }
`;

export default styles;
