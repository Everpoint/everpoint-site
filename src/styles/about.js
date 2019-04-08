import styled from "astroturf";

import { Main as MainBlock } from "../components/MainPageElements/Main";
import { Side } from "../components/MainPageElements/Section";

export const Main = styled(MainBlock)`
  @media (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    padding-bottom: 1.2rem;
  }
`;

export const LeftSide = styled(Side)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  @media (max-width: 812px) and (orientation: landscape) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin-bottom: 1.4rem;
    h1 {
      margin-bottom: 0.4rem;
    }
  }
`;

export const Content = styled("div")`
  position: relative;
  flex-shrink: 0;
  z-index: 4;
`;

export const RightSide = styled(Side)`
  width: 100%;
  height: 100%;
  @media (max-width: 767px) and (orientation: portrait) {
    align-self: center;
    max-width: 20.1428rem;
  }
`;

export const NewsContainer = styled("div")`
  width: 28.5714rem;
  height: 26rem;
  position: relative;
  @media (max-width: 991px) {
    width: 22.8571rem;
    height: 24.3571rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    display: flex;
    justify-content: center;
    width: 100%;
    max-height: 18.0714rem;
    margin-bottom: 3.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    height: 100%;
    max-height: 18.0714rem;
    margin-bottom: 1.4rem;
  }
`;
