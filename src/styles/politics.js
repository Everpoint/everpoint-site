import styled from "astroturf";

import { Article } from "../components/Elements/Article";
import { BigH1 } from "../components/Typography/Headlines";

export const PoliticsContainer = styled(Article)`
  padding: 15.8571rem 0 8.8571rem 0;
  ul {
    li {
      margin-bottom: 1.64rem;
    }
  }
  p {
  }

  @media (max-width: 1199px) {
    padding: 12.5714rem 0 6.9142rem 0;
  }
`;

export const Header = styled("header")`
  margin-bottom: 9rem;
  @media (max-width: 1199px) {
    margin-bottom: 6.7142rem;
  }
`;

export const SubTitle = styled("div")`
  color: rgba(38, 44, 55, 0.5);
  margin-bottom: 3.8571rem;
  @media (max-width: 1199px) {
    margin-bottom: 3.4rem;
  }
`;

export const MainTitle = styled(BigH1)`
  line-height: 1.13;
  padding-right: 8rem;
`;

export const Block = styled("div")`
  margin-bottom: 9rem;
  @media (max-width: 1199px) {
    margin-bottom: 6.7142rem;
  }
`;

export const UpdateDate = styled(SubTitle)`
  text-align: right;
  margin-bottom: 0;
`;
