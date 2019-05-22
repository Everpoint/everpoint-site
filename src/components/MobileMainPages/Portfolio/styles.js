import styled from "astroturf";

import {
  Section as SectionUI,
  Title as TitleUI,
  Card as CardUI,
  Description as DescriptionUI,
} from "../styles";

export const Section = styled(SectionUI)`
  padding: 0;
  margin-bottom: 6.4444rem;
`;

export const Title = styled(TitleUI)``;

export const Card = styled(CardUI)`
  overflow: hidden;
  position: relative;
  justify-content: flex-end;
  height: 24.2857rem;
  color: #fff;
`;

export const Screenshot = styled("img")`
  top: 1.7142rem;
  left: 1.7142rem;
  position: absolute;
  width: auto;
  max-width: none;
  height: 11rem;
  box-shadow: 1.1428rem 1.1428rem 2.2857rem 0 rgba(50, 57, 69, 0.25);
  border-radius: 0.2857rem;
  &.mobileMsp {
    height: 12.4rem;
    box-shadow: none;
    border-radius: 0;
    top: 1.2142rem;
    left: 1.2142rem;
  }
`;

export const Content = styled("div")``;

export const ProjectName = styled("h4")`
  margin-bottom: 0.4rem;
`;

export const Description = styled(DescriptionUI)``;
