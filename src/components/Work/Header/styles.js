import styled, { css } from "astroturf";

import { Paragraph } from "../../../components/Typography/Paragraph";
import { HorizontalRule } from "../../../components/Typography/HorizontalRule";
import { BigH1 } from "../../../components/Typography/Headlines";

export const HeaderContainer = styled("header")`
  width: 100%;
  height: calc(100vw * 0.665977961);
  max-height: 54.8571rem;
  position: relative;
  @media (max-width: 1199px) {
    max-height: 39.7857rem;
  }
  @media (max-width: 991px) {
    max-height: 30.7857rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    max-height: 23.0714rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    max-height: 12.8571rem;
  }
`;

export const OverflowContainer = styled("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(38, 44, 55, 0.7);
  }
`;

export const TitleContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const Hr = styled(HorizontalRule)`
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    width: 8rem;
  }
`;

export const Title = styled(BigH1)`
  color: #fff;
`;

export const Description = styled(Paragraph)`
  width: calc(100% - 6.2857rem);
  padding: 3.1428rem;
  background-color: #262c37;
  max-width: 85.7142rem;
  position: absolute;
  z-index: 1;
  color: #fff;
  left: 50%;
  bottom: 0;
  line-height: 1.33;
  margin-bottom: 0;
  transform: translate(-50%, 50%);
  box-shadow: -0.8571rem 0.8571rem 1.7142rem 0 rgba(38, 44, 55, 0.15);
  @media (max-width: 1199px) {
    padding: 2rem;
  }
  @media (max-width: 991px) {
    padding: 1.5714rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 1rem;
    font-size: 0.8571rem;
    width: calc(100% - 3rem);
  }
  @media (max-width: 812px) and (orientation: landscape) {
    box-shadow: -0.5714rem 0.5714rem 1.1428rem 0 rgba(38, 44, 55, 0.15);
  }

  @media (max-width: 767px) and (orientation: portrait) {
    box-shadow: -0.4285rem 0.4285rem 0.85714rem 0 rgba(38, 44, 55, 0.15);
    transform: translate(-50%, calc(100% - 1rem));
  }
`;

export const Photo = styled("img")`
  width: 100%;
  height: auto;
`;

const styles = css`
  .link {
    color: #90c53d;
  }
`;

export default styles;
