import styled, { css } from "astroturf";

import { Article } from "../components/Elements/Article";

export const Section = styled(Article)`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled("div")`
  width: 50%;
  margin-bottom: 3.4rem;
  &:first-child {
    padding-right: 2.4rem;
  }
  &:last-child {
    padding-left: 2.4rem;
  }
  &.oneColumn {
    width: 100%;
    padding: 0;
  }
  @media (max-width: 991px) {
    margin-bottom: 1.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1rem;
  }
`;

const styles = css`
  .paginationFull {
    @media (max-width: 767px) and (orientation: portrait) {
      display: none;
    }
  }
  .paginationSimple {
    display: none;
    @media (max-width: 767px) and (orientation: portrait) {
      display: flex;
      transform: none;
      position: static;
      left: auto;
      bottom: auto;
      margin-bottom: 3rem;
      > span {
        width: 3.4rem;
        color: #000;
        font-size: 1rem;
        font-weight: 600;
      }
      svg {
        height: 0.9rem;
        path {
          fill: rgba(38, 44, 55, 1);
          stroke: rgba(38, 44, 55, 1);
        }
      }
      button {
        &:first-child {
          margin-right: 1rem;
        }
        &:last-child {
          margin-left: 1rem;
        }
      }
    }
  }
`;

export default styles;
