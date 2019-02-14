import styled, { css } from "astroturf";

export const MobileMspContainer = styled("div")``;

export const MobileMspStoreContainer = styled("div")`
  display: flex;
  a {
    &:first-child {
      margin-right: 1rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    a {
      width: 7.5rem;
      height: 2.0714rem;
      &:first-child {
        margin-right: 0;
      }
    }
  }
`;

export const Phones = styled("img")`
  position: absolute;
  opacity: 0;
  transition-duration: 400ms;
  transition-delay: 400ms;
  transition-property: opacity;
  transition-timing-function: ease-in;
  width: 124%;
  height: auto;
  max-width: 140rem;
  min-width: 114rem;
  top: 56%;
  left: calc(50% + 7rem);
  transform: translate(-50%, -50%);
  @media (max-width: 1100px) {
    left: calc(50% + 13rem);
  }
  @media (max-width: 812px) and (orientation: landscape) {
    width: 44rem;
    left: calc(44rem / 1.64);
    min-width: auto;
    top: calc(44rem / 3.2);
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: 44rem;
    left: calc(44rem / 2.86);
    min-width: auto;
    top: calc(44rem / 2.86);
  }
  &.animate {
    opacity: 1;
  }
`;

const styles = css`
  .mobileMspHeader {
    position: relative;
    .mobileMspHeaderLeftSide {
      width: 34.4rem;
      animation-delay: 0ms;
      z-index: 4;
      color: #0a2342;
      align-self: flex-end;
      padding-bottom: 6rem;
      @media (max-width: 1199px) {
        padding-bottom: 4.4rem;
      }
      @media (max-width: 991px) {
        width: 26rem;
        padding-bottom: 8.5714rem;
      }
      @media (max-width: 812px) and (orientation: landscape) {
        width: 17rem;
        margin-right: 0;
        padding-bottom: 1.7142rem;
        h1 {
          max-width: 15rem;
        }
      }
      label {
        background-color: rgba(67, 127, 163, 0.25);
      }
      @media (max-width: 767px) and (orientation: portrait) {
        width: auto;
        align-self: flex-start;
        padding-bottom: 1.7142rem;
        h1 {
          margin-bottom: 1.4rem;
        }
      }
    }
    .mobileMspHeaderRightSide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
    }
    @media (max-width: 767px) and (orientation: portrait) {
      align-items: flex-end;
    }
  }
`;

export default styles;
