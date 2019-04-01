import styled, { css } from "astroturf";

import { Section as SectionUI, Card, Description as DescriptionUI } from "../styles";

export const Section = styled(SectionUI)`
  height: 28.2857rem;
  position: relative;
  &:before {
    content: "";
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 44%;
  }
`;

export const Article = styled(Card)`
  align-items: flex-start;
  height: 21rem;
  background-color: #fff;
  box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
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
  margin-top: auto;
  width: auto;
  height: 1.2rem;
`;

const styles = css`
  .readMore {
    font-size: 0.8571rem;
    color: #90c53d;
  }
`;

export default styles;
