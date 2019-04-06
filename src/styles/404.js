import styled, { css } from "astroturf";

import { Main } from "../components/MainPageElements/Main";

export const Main404 = styled(Main)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Article = styled("article")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
  will-change: transform, opacity;
`;

export const Title = styled("h2")`
  font-weight: 600;
  margin: 4.5714rem 0 1rem 0;
`;

export const Description = styled("p")`
  text-align: center;
  font-size: 1.1428rem;
  margin-bottom: 0;
`;

const styles = css`
  .svg404 {
    fill: transparent;
    max-width: 100%;
    path {
      stroke: rgba(0, 0, 0, 0.1);
      stroke-width: 4px;
    }
  }
  .down {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
  .up {
    path {
      stroke: #90c53d;
      animation-duration: 1s;
      animation-timing-function: ease-out;
      animation-iteration-count: 1;
      &:nth-of-type(1) {
        animation-name: fourOuter;
      }
      &:nth-of-type(2) {
        animation-name: zeroOuter;
      }
      &:nth-of-type(3) {
        animation-name: fourOuter;
      }
      &:nth-of-type(4) {
        animation-name: fourInner;
      }
      &:nth-of-type(5) {
        animation-name: zeroInner;
      }
      &:nth-of-type(6) {
        animation-name: fourInner;
      }
      @keyframes fourOuter {
        from {
          stroke-dasharray: 571.817px, 571.817px;
          stroke-dashoffset: 571.817px;
        }
        to {
          stroke-dasharray: 571.817px, 571.817px;
          stroke-dashoffset: 0;
        }
      }
      @keyframes zeroOuter {
        from {
          stroke-dasharray: 504.764px, 504.764px;
          stroke-dashoffset: 504.764px;
        }
        to {
          stroke-dasharray: 504.764px, 504.764px;
          stroke-dashoffset: 0;
        }
      }
      @keyframes fourInner {
        from {
          stroke-dasharray: 194.654px, 194.654px;
          stroke-dashoffset: 194.654px;
        }
        to {
          stroke-dasharray: 194.654px, 194.654px;
          stroke-dashoffset: 0;
        }
      }
      @keyframes zeroInner {
        from {
          stroke-dasharray: 292.74px, 292.74px;
          stroke-dashoffset: 292.74px;
        }
        to {
          stroke-dasharray: 292.74px, 292.74px;
          stroke-dashoffset: 0;
        }
      }
    }
  }
`;

export default styles;
