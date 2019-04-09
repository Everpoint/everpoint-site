import styled, { css } from "astroturf";

import { Blank } from "../components/Blank/Blank";
import { Section } from "../components/Elements/Section";
import { UnorderedList } from "../components/Typography/UnorderedList";

export const VacancyContainer = styled("main")``;

export const VacancyAvatar = styled("div")`
  padding-top: 13.8571rem;
  margin-bottom: 5.2857rem;
`;

export const SkillSection = styled(Section)`
  margin-top: 8.8571rem;
  background-color: #f3f4f7;
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
`;

export const ConditionsSection = styled(Section)`
  padding: 8.8rem 0 0 0;
  background-color: #00b27b;
  color: #fff;
`;

export const Footer = styled("footer")`
  padding: 5.2857rem 0;
  background-color: rgba(38, 44, 55, 0.1);
`;

export const FooterTitle = styled("h3")`
  text-align: center;
  font-size: 1.7142rem;
  line-height: normal;
`;

const styles = css`
  .telegramBtn {
    right: 3.1428rem;
    bottom: 3.1428rem;
    position: absolute;
    background-color: #90c53d;
  }
`;

export default styles;
