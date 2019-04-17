import styled from "astroturf";

import { Article } from "../components/Elements/Article";
import { BigH1, H3 } from "../components/Typography/Headlines";
import { Paragraph } from "../components/Typography/Paragraph";
import { UnorderedList } from "../components/Typography/UnorderedList";

export const PoliticsContainer = styled(Article)`
  padding: 15.8571rem 0 10.2857rem 0;
`;

export const SubTitle = styled("div")`
  color: rgba(38, 44, 55, 0.5);
  margin-bottom: 3.8571rem;
`;

export const MainTitle = styled(BigH1)`
  line-height: 1.13;
`;

export const P = styled(Paragraph)`
  margin-bottom: 9.5714rem;
`;

export const Title = styled(H3)``;

export const Ul = styled(UnorderedList)`
  margin-bottom: 1.7142rem;
  li {
    font-size: 1.2857rem;
    margin-bottom: 1.74rem;
    padding-left: 4rem;
    &:before {
      width: 8px;
      height: 8px;
      top: 0.64rem;
      margin: 0 0 0 1.8rem;
    }
  }
`;
