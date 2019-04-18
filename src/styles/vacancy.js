import styled, { css } from "astroturf";
import withProps from "recompose/withProps";

import { Article } from "../components/Elements/Article";
import { Blank } from "../components/Blank/Blank";
import { Section } from "../components/Elements/Section";
import { BigH1, H2 } from "../components/Typography/Headlines";
import { UnorderedList } from "../components/Typography/UnorderedList";

export const VacancyContainer = styled("main")``;

export const VacancyArticle = styled(Article)`
  @media (max-width: 1199px) {
    max-width: 55.7142rem;
  }
  @media (max-width: 991px) {
    max-width: 48rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    padding: 0 1.7142rem;
  }
`;

export const VacancyAvatar = styled("div")`
  width: 100%;
  height: 11.4285rem;
  margin-bottom: 3.2857rem;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 1199px) {
    height: 9.14285rem;
    margin-bottom: 2.2857rem;
  }
  @media (max-width: 991px) {
    height: 7.4285rem;
    margin-bottom: 1.2857rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 5.7142rem;
  }
`;

export const VacancyTitle = styled(BigH1)`
  margin-bottom: 5rem;
  @media (max-width: 991px) {
    font-size: 2.5714rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 2.2857rem;
    margin-bottom: 2.2rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    font-size: 1.7142rem;
    margin-bottom: 1.8rem;
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
  @media (max-width: 812px) and (orientation: landscape) {
    margin-top: 2.8rem;
    padding: 3rem 0 3.1428rem 0;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-top: 1.8rem;
    padding: 2rem 0 2.2857rem 0;
  }
`;

export const Ul = withProps(() => ({ as: "div" }))(styled(UnorderedList)`
  ul {
    margin: 0 0 4rem 0;
    li {
      margin: 0 0 1.4rem 0.8rem;
      font-size: 1.2857rem;
      padding-left: 3rem;
      &:before {
        width: 8px;
        height: 8px;
        margin-right: 1.7142rem;
        background-color: rgba(38, 44, 55, 0.25);
        @media (max-width: 812px) and (orientation: landscape),
          (max-width: 767px) and (orientation: portrait) {
          width: 6px;
          height: 6px;
          margin: 0 0.6rem;
        }
      }
      @media (max-width: 1199px) {
        font-size: 1.1428rem;
        margin: 0 0 1.4rem 0;
      }
      @media (max-width: 991px) {
        font-size: 1rem;
      }
      @media (max-width: 812px) and (orientation: landscape),
        (max-width: 767px) and (orientation: portrait) {
        padding-left: 1.6rem;
        font-size: 0.8571rem;
      }
    }
    @media (max-width: 1199px) {
      margin: 0 0 3rem 0;
    }
    @media (max-width: 991px) {
      margin: 0 0 2rem 0;
    }
  }
`);

export const Test = styled(Blank)`
  padding: 1.6rem;
  text-align: center;
  box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
  @media (max-width: 991px) {
    padding: 1.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 1.2rem;
  }
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
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
    margin-bottom: 0.8rem;
  }
`;

export const DownloadTest = styled("a")`
  font-weight: 600;
  color: #00b27b;
  display: inline-flex;
  align-items: center;
  font-size: 1.1428rem;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
  svg {
    margin-right: 1.2857rem;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
    svg {
      margin-right: 0.8rem;
    }
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
  @media (max-width: 812px) and (orientation: landscape) {
    padding: 2.8rem 0 0 0;
  }

  @media (max-width: 767px) and (orientation: portrait) {
    padding: 2.2857rem 0 0 0;
  }
`;

export const ConditionTitle = styled(H2)`
  margin-bottom: 3.6rem;
  @media (max-width: 1199px) {
    margin-bottom: 2.8rem;
  }
  @media (max-width: 991px) {
    margin-bottom: 1.7142rem;
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
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 2.2rem;
  }
`;

export const FooterTitle = styled("h3")`
  text-align: center;
  font-size: 1.7142rem;
  line-height: normal;
  margin-bottom: 0;
  p {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media (max-width: 1199px) {
    font-size: 1.4285rem;
  }
  @media (max-width: 991px) {
    font-size: 1.2857rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 1rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
`;

export const ConditionBlock = styled("div")`
  margin: 0 0 5rem 0;
  ul {
    margin: 0;
    list-style: none;
    li {
      position: relative;
      font-size: 1.2857rem;
      line-height: 1.33;
      margin-bottom: 1.4rem;
      &:after {
        content: "";
        display: table;
        clear: both;
      }
      p {
        padding-top: 0.4rem;
        overflow: hidden;
        @media (max-width: 991px) {
          padding-top: 0.2rem;
        }
        @media (max-width: 812px) and (orientation: landscape),
          (max-width: 767px) and (orientation: portrait) {
          padding-top: 0;
        }
      }
      @media (max-width: 1199px) {
        font-size: 1.1428rem;
        line-height: 1.5;
        margin-bottom: 1.2rem;
      }
      @media (max-width: 991px) {
        font-size: 1rem;
        line-height: 1.43;
        margin-bottom: 1rem;
      }
      @media (max-width: 812px) and (orientation: landscape),
        (max-width: 767px) and (orientation: portrait) {
        font-size: 0.8571rem;
        line-height: 1.5;
      }
      img {
        float: left;
        vertical-align: middle;
        margin-right: 1.7142rem;
        width: 2rem;
        height: auto;
        @media (max-width: 991px) {
          width: 1.4285rem;
          margin-right: 1.4rem;
        }
        @media (max-width: 812px) and (orientation: landscape),
          (max-width: 767px) and (orientation: portrait) {
          margin-right: 1rem;
        }
      }
    }
  }
  @media (max-width: 991px) {
    margin: 0 0 3.4rem 0;
  }
`;

const styles = css`
  .grayLinks {
    a {
      font-weight: 600;
      color: hsla(0, 0%, 100%, 0.5);
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .greenLinks {
    a {
      font-weight: 600;
      color: #00b27b;
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .header {
    padding-top: 15.8571rem;
    @media (max-width: 1199px) {
      padding-top: 14rem;
    }
    @media (max-width: 991px) {
      padding-top: 8rem;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      padding-top: 7rem;
    }
    @media (max-width: 767px) and (orientation: portrait) {
      padding-top: 5.2857rem;
    }
  }
`;

export default styles;
