import styled from "astroturf";

import { Article } from "../components/Elements/Article";
import { BigH1 } from "../components/Typography/Headlines";

export const PoliticsContainer = styled(Article)`
  padding: 15.8571rem 0 8.8571rem 0;
  @media (max-width: 1199px) {
    padding: 12.5714rem 0 6.9142rem 0;
  }
  @media (max-width: 991px) {
    padding: 9rem 3.1428rem 6.4rem 3.1428rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    padding: 6.8rem 1.7142rem 6.4rem 1.7142rem;
  }

  @media (max-width: 767px) and (orientation: portrait) {
    padding: 5.6rem 1.7142rem 6.4rem 1.7142rem;
  }
`;

export const MainTitle = styled(BigH1)`
  line-height: 1.13;
  padding-right: 8rem;

  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 0.8rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 2.2857rem;
  }

  @media (max-width: 767px) and (orientation: portrait) {
    padding-right: 0;
    font-size: 1.5714rem;
  }
`;

export const Introduction = styled("div")``;

export const SubTitle = styled("div")`
  color: rgba(38, 44, 55, 0.5);
  margin-bottom: 3.8571rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
`;

export const City = styled(SubTitle)`
  @media (max-width: 1199px) {
    margin-bottom: 3.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-bottom: 3rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 2rem;
  }
`;

export const Block = styled("div")`
  margin-bottom: 9rem;
  @media (max-width: 1199px) {
    margin-bottom: 6.7142rem;
  }
  @media (max-width: 991px) {
    margin-bottom: 3.8571rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-bottom: 3.6rem;
  }

  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 2rem;
  }
`;

export const UpdateDate = styled(SubTitle)`
  text-align: right;
  margin-bottom: 0;
`;
