import styled from "astroturf";

import { HorizontalRule } from "../../../components/Typography/HorizontalRule";
import { BigH1 } from "../../../components/Typography/Headlines";

export const Container = styled("header")`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25.7142rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../../../assets/img/backgrounds/news-img.jpg);
  @media (max-width: 767px) and (orientation: portrait) {
    background-position: left center;
  }
`;

export const Content = styled("div")`
  width: 100%;
  max-width: 114.2857rem;
  margin: 0 auto;
  padding: 0 6rem;
  @media (max-width: 1199px) {
    padding: 0 3.4285rem;
  }
  @media (max-width: 767px) and (orientation: portrait),
    (max-width: 812px) and (orientation: landscape) {
    padding: 0 1.4285rem;
  }
`;

export const Hr = styled(HorizontalRule)`
  @media (max-width: 767px) and (orientation: portrait),
    (max-width: 812px) and (orientation: landscape) {
    width: 8rem;
  }
`;

export const Title = styled(BigH1)`
  color: #fff;
  margin-bottom: 0;
`;
