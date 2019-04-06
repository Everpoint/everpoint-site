import styled, { css } from "astroturf";

import { Main as MainBlock } from "../components/MainPageElements/Main";
import { Side } from "../components/MainPageElements/Section";

export const Main = styled(MainBlock)`
  @media (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

export const LeftSide = styled(Side)``;

export const Rightside = styled(Side)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 42.1428rem;
  max-height: 51.1428rem;
  @media (max-width: 1199px) {
    max-width: 32.1428rem;
    max-height: 33.7857rem;
  }
  @media (max-height: 700px) and (orientation: landscape) {
    max-width: 34.1428rem;
  }
  @media (max-width: 991px) {
    max-width: 27.2857rem;
    max-height: 36.2857rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    flex-shrink: 0;
    max-width: 20rem;
    height: 14.2857rem;
    max-height: calc(100vh - 6rem);
    max-height: calc(var(--vh, 1vh) * 100 - 6rem);
    margin-bottom: 2rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    max-height: 16.1428rem;
    height: 100%;
    margin-bottom: 3.4rem;
    @media (max-height: 490px) {
      margin-bottom: 2.4rem;
    }
  }
`;

const styles = css`
  .menu {
    display: block;
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      display: none;
    }
  }
`;

export default styles;
