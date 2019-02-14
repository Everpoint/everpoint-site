import styled, { css } from "astroturf";

export const NewsContainer = styled("div")`
  width: 28.5714rem;
  height: 26rem;
  position: relative;
  max-height: calc(100vh - 14rem);
  max-height: calc(var(--vh, 1vh) * 100 - 14rem);
  @media (max-width: 991px) {
    width: 22.8571rem;
    height: 24.3571rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    max-height: 18.0714rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    height: 100%;
    max-height: 18.0714rem;
  }
`;

export const WillChangeNews = styled("div")`
  will-change: transform, opacity;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  &.disableTransition {
    transition: none;
  }
`;

const styles = css`
  .aboutContainer {
    > section:first-child {
      z-index: 1;
      h1 {
        @media (max-width: 812px) and (orientation: landscape),
          (max-width: 767px) and (orientation: portrait) {
          margin-bottom: 0.4rem;
        }
      }
    }
    > section:last-child {
      max-height: calc(100% - 4rem);
    }
    @media (max-width: 767px) and (orientation: portrait) {
      flex-direction: column;
      align-items: flex-start;
      > section:last-child {
        align-self: center;
        margin-bottom: 3.4rem;
        width: 100%;
        max-width: 20.1428rem;
        @media (max-height: 490px) {
          margin-bottom: 2.4rem;
        }
      }
    }
    @media (max-width: 812px) and (orientation: landscape) {
      padding-bottom: 1.2rem;
      > section:last-child {
        height: 100%;
        > div {
          display: flex;
          align-items: center;
          height: 100%;
        }
      }
    }
    @media (max-width: 767px) and (max-height: 320px) and (orientation: landscape) {
      > section:first-child {
        margin-bottom: 2rem;
      }
      > section:last-child {
        max-height: 100%;
        margin-bottom: 2rem;
      }
    }
    @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape), only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
      padding-bottom: 0.9rem;
    }
  }
  .isAboutSlide {
    will-change: transform;
    bottom: auto;
    right: auto;
    top: -13rem;
    left: 0;
    height: calc(100% + 26rem);
    @media (max-width: 1199px) {
      top: -20rem;
      left: -82rem;
      width: calc(100% + 100rem);
      height: calc(100% + 51rem);
    }
    @media (max-width: 767px) and (orientation: portrait) {
      top: -43rem;
      left: -84rem;
      width: calc(100% + 93rem);
      height: calc(100% + 79rem);
      @media (max-height: 490px) {
        top: -53rem;
      }
    }
    @media (max-width: 812px) and (orientation: landscape) {
      top: -21rem;
      left: -79rem;
      width: calc(100% + 90rem);
      height: calc(100% + 44rem);
    }
  }
`;

export default styles;
