import styled, { css } from "astroturf";

import { Article } from "../components/Elements/Article";
import { Blank } from "../components/Blank/Blank";
import { Section } from "../components/Elements/Section";
import { BigH1 } from "../components/Typography/Headlines";
import { UnorderedList } from "../components/Typography/UnorderedList";

export const VacancyContainer = styled("main")``;

export const VacancyArticle = styled(Article)`
  @media (max-width: 1199px) {
    max-width: 55.7142rem;
  }
  @media (max-width: 991px) {
    max-width: 48rem;
  }
`;

export const VacancyTitle = styled(BigH1)`
  margin-bottom: 5rem;
  @media (max-width: 991px) {
    font-size: 2.5714rem;
    margin-bottom: 3rem;
  }
`;

export const VacancyAvatar = styled("div")`
  padding-top: 13.8571rem;
  margin-bottom: 3.2857rem;
  @media (max-width: 1199px) {
    padding-top: 12rem;
    margin-bottom: 2.2857rem;
  }
  @media (max-width: 991px) {
    padding-top: 8rem;
    margin-bottom: 1.2857rem;
  }
`;

export const SkillSection = styled(Section)`
  margin-top: 8.8571rem;
  background-color: #f3f4f7;
  @media (max-width: 1199px) {
    margin-top: 6.8rem;
  }
  @media (max-width: 991px) {
    margin-top: 3.4rem;
  }
`;

export const Ul = styled(UnorderedList)`
  margin-bottom: 4rem;
  li {
    margin: 0 0 1.4rem 0.8rem;
    font-size: 1.2857rem;
    &:before {
      width: 8px;
      height: 8px;
      margin-right: 1.7142rem;
      background-color: rgba(38, 44, 55, 0.25);
    }
    @media (max-width: 1199px) {
      font-size: 1.1428rem;
      margin: 0 0 1.4rem 0;
    }
    @media (max-width: 991px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 1199px) {
    margin-bottom: 3rem;
  }
  @media (max-width: 991px) {
    margin-bottom: 2rem;
  }
`;

export const Test = styled(Blank)`
  padding: 1.6rem;
  text-align: center;
  box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
`;

export const TestTitle = styled("h4")`
  font-size: 1.2857rem;
  font-style: italic;
  font-weight: normal;
  line-height: 1.33;
  @media (max-width: 1199px) {
    font-size: 1.14285rem;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
  }
`;

export const DownloadTest = styled("a")`
  font-weight: 600;
  color: #00b27b;
  display: inline-flex;
  align-items: center;
  font-size: 1.1428rem;
  svg {
    margin-right: 1.2857rem;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
  }
`;

export const ConditionsSection = styled(Section)`
  padding: 8.8rem 0 0 0;
  background-color: #00b27b;
  color: #fff;
  @media (max-width: 1199px) {
    padding: 6.8rem 0 0 0;
  }
  @media (max-width: 991px) {
    padding: 4.8rem 0 0 0;
  }
`;

export const Footer = styled("footer")`
  position: relative;
  padding: 5.2857rem 0;
  background-color: rgba(38, 44, 55, 0.1);
  @media (max-width: 1199px) {
    padding: 3.64rem 0;
  }
  @media (max-width: 991px) {
    padding: 3.14rem 0;
  }
`;

export const FooterTitle = styled("h3")`
  text-align: center;
  font-size: 1.7142rem;
  line-height: normal;
  @media (max-width: 1199px) {
    font-size: 1.4285rem;
  }
  @media (max-width: 991px) {
    font-size: 1.2857rem;
  }
`;

const styles = css`
  .telegramBtn {
    right: 3.1428rem;
    bottom: 3.1428rem;
    position: absolute;
    background-color: #90c53d;
    @media (max-width: 1199px) {
      right: 2.2857rem;
      bottom: 2.2857rem;
    }
    @media (max-width: 991px) {
      right: 1rem;
      bottom: 1rem;
    }
  }
`;

export default styles;
