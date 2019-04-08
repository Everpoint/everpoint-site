import styled, { css } from "astroturf";

import { Date } from "../../../components/NewsCard/styles";

export const Container = styled("article")`
  position: relative;
  margin-bottom: 5rem;
  &:before {
    content: "";
    width: 9.1428rem;
    height: 0.2857rem;
    position: absolute;
    background-color: #f3f4f7;
    top: 0;
    left: 0;
  }
  @media (max-width: 991px) {
    margin-bottom: 3.4285rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1.7142rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-bottom: 2.2857rem;
  }
`;

export const Logo = styled("img")`
  width: auto;
  height: 3.4285rem;
  margin: 2.8rem 0 1.8rem 0;
  @media (max-width: 1199px) {
    height: 2.8571rem;
  }
  @media (max-width: 991px) {
    height: 2.2857rem;
    margin: 1.8rem 0 1rem 0;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 1.7142rem;
    margin: 1.4rem 0 0.7rem 0;
  }
`;

export const Title = styled("h2")`
  font-size: 1.2857rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

export const PublishDate = styled(Date)``;

export const Description = styled("p")`
  font-size: 1rem;
  margin: 1.34rem 0;
  line-height: 1.43;
  @media (max-width: 991px) {
    font-size: 0.8571rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    line-height: 1.4;
    margin: 1rem 0;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin: 0.74rem 0;
  }
`;

const styles = css`
  .read {
    color: #90c53d;
  }
`;

export default styles;
