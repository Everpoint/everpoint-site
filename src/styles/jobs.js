import styled, { css } from "astroturf";

import { Main as MainBlock } from "../components/NewMainAnimation/Main";
import { Side } from "../components/NewMainAnimation/Section";

export const Main = styled(MainBlock)`
  @media (max-width: 1199px) {
    justify-content: flex-start;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const BackgroundWrapper = styled(Side)`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LeftSide = styled(Side)`
  flex-shrink: 1;
  padding-right: 4rem;
  @media (max-width: 1199px) {
    padding-right: 2rem;
  }
  @media (min-width: 1024px) and (max-width: 1024px) {
    h2 {
      max-width: 14rem;
    }
  }

  @media (max-width: 767px) and (orientation: portrait) {
    padding-right: 0;
    width: calc(100% + 1.7142rem * 2);
    overflow-x: auto;
  }
`;

export const RightSide = styled(Side)`
  position: relative;
  height: 25rem;
  flex-shrink: 1;
  @media (max-width: 1306px) {
    height: 29.4rem;
  }
  @media (max-width: 1199px) {
    height: 22rem;
    padding: 0;
    margin: 0 auto;
  }
  @media (max-width: 991px) {
    max-width: 20rem;
    width: 100%;
    max-height: 22.4444rem;
    height: 100%;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    max-width: 18rem;
    max-height: 18rem;
    margin-bottom: 3.4rem;
  }
  @media (max-width: 767px) and (orientation: portrait) and (max-height: 490px) {
    margin-bottom: 2.4rem;
  }
`;

export const RightSideContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 991px) {
    width: 100%;
    height: 100%;
  }
`;

const styles = css`
  .background {
    @media (max-width: 767px) and (orientation: portrait) {
      background-size: 344%;
      background-position: 51% 51%;
    }
  }
  .menu {
    display: block;
    @media (max-width: 1199px) {
      ul {
        margin-right: 0;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      h2 {
        font-size: 1.2857rem;
        margin-bottom: 1rem;
      }
      ul {
        &:first-child {
          margin-bottom: 1.8rem;
        }
        li {
          margin-bottom: 0.4rem;
          a {
            font-size: 0.8571rem;
          }
        }
      }
    }
    @media (max-width: 812px) and (orientation: landscape) {
      h2 {
        font-size: 1.14285rem;
        margin-bottom: 0.4rem;
      }
      ul {
        &:first-child {
          margin-bottom: 1rem;
        }
        li {
          margin-bottom: 0.2rem !important;
          a {
            font-size: 0.8571rem;
          }
        }
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      margin: 0;
      display: flex;
      @media (max-height: 500px) {
        margin-top: 0;
      }
      > ul {
        h2 {
          white-space: nowrap;
          margin-bottom: 0.4rem;
        }
        li {
          margin-bottom: 0;
          a {
            white-space: nowrap !important;
          }
        }

        &:first-child {
          margin: 0 2.8571rem 0 1.7142rem;
        }
        &:last-child {
          padding-right: 1.7142rem;
        }
      }
    }
  }
`;

export default styles;
