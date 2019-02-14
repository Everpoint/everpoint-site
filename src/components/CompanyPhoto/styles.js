import styled, { css } from "astroturf";

export const CompanyPhotoBlockTransitionGroup = styled("div")`
  position: relative;
  will-change: opacity;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: calc(100vw / 5);
  height: calc(100vw / 5);
  @media (max-width: 991px) {
    width: calc(100vw / 4);
    height: calc(100vw / 4);
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    width: calc(100vw / 2);
    height: calc(100vw / 2);
  }
`;

export const CompanyPhotoBlock = styled("div")`
  will-change: opacity;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: calc(100% + 2px);
  background-position: center;
`;

export const CompanyPhotoContainer = styled("section")`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  background-color: rgba(38, 44, 55, 0.7);
  min-height: calc(100vw / 5 * 3);
  @media (max-width: 991px) {
    min-height: calc(100vw / 4 * 3);
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    min-height: calc(100vw / 2 * 3);
  }
`;

export const CompanyHeader = styled("header")`
  max-width: 114.2857rem;
  z-index: 1;
  top: calc(100vw / 5 * 2);
  left: calc(100vw / 5 / 2);
  transform: translateY(calc(-50%));
  position: absolute;
  color: #fff;
  > h1 {
    font-size: 4.5714rem;
    line-height: 100%;
    margin: 0 0 2.4571rem 0;
    @media (max-width: 1199px) {
      font-size: 3.4285rem;
      margin: 0 0 2rem 0;
    }
    @media (max-width: 991px) {
      font-size: 2.5714rem;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      font-size: 2.2857rem;
      margin: 0 0 1.4571rem 0;
    }
    @media (max-width: 767px) and (orientation: portrait) {
      font-size: 1.7142rem;
    }
  }
  @media (max-width: 991px) {
    top: calc(100vw / 4 * 2);
    left: calc(100vw / 4 / 2);
  }
  @media (max-width: 767px) and (orientation: portrait) {
    top: calc(100vw / 2 * 2);
    left: 1.7142rem;
    h1 {
      margin: 0;
    }
    hr {
      width: 8rem;
    }
  }
`;

const styles = css`
  .fadeIn {
    animation-name: fadeIn;
    animation-duration: 400ms;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  .fadeOut {
    animation-name: fadeOut;
    animation-duration: 400ms;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

export default styles;
