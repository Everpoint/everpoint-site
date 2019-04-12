import styled, { css } from "astroturf";

import { Section, XScrollContainer, PaddingBlock } from "../styles";

export const TeamSection = styled(Section)`
  margin-bottom: 6.4444rem;
`;

export const VacancySection = styled(Section)``;

export const PhotoContainer = styled(XScrollContainer)`
  padding-left: 1rem;
  flex-direction: column;
  min-height: 23.4285rem;
`;

export const VacanciesContainer = styled(XScrollContainer)`
  padding-left: 1rem;
  height: 22.4rem;
  &.noVacancy {
    height: 28rem;
    padding-right: 1rem;
  }
  &.oneVacancy {
    flex-direction: column;
    align-items: center;
  }
`;

export const Row = styled("div")`
  display: flex;
  margin-bottom: 0.5rem;
  &:last-of-type {
    margin-left: calc(11.4285rem / 2);
    margin-bottom: 0;
  }
`;

export const Tab = styled("div")`
  padding-left: 1rem;
  margin-bottom: 1rem;
`;

export const TabItem = styled("span")`
  margin-right: 1rem;
  font-weight: 600;
  transition: color 200ms ease;
  &.isActive {
    color: #90c53d;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Padding = styled(PaddingBlock)`
  width: 0.5rem;
`;

export const Photo = styled("div")`
  background-color: rgb(56, 58, 61);
  flex-shrink: 0;
  width: 11.4285rem;
  height: 11.4285rem;
  background-size: cover;
  background-position: top;
  margin-right: 0.5rem;
`;

const styles = css`
  article.vacancyBlock {
    width: 13.7142rem;
    background-color: transparent;
    box-shadow: none;
  }
`;

export default styles;
