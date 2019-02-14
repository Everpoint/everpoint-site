import { css } from "astroturf";

const styles = css`
  .portfolioContainer {
    > section:last-child {
      position: relative;
      width: 100%;
      max-width: 42.1428rem;
      max-height: 51.1428rem;
      height: calc(100% - 7rem);
      > div {
        width: 100%;
        height: 100%;
        > div {
          width: 100%;
          height: 100%;
        }
      }
      @media (max-width: 1199px) {
        max-width: 32.1428rem;
        max-height: 33.7857rem;
      }
      @media (max-height: 700px) and (orientation: landscape) {
        max-width: 34.1428rem;
      }
      @media (max-width: 991px) {
        max-width: 26.2857rem;
        max-height: 30.4857rem;
      }
      @media (max-width: 812px) and (orientation: landscape) {
        flex-shrink: 0;
        max-width: 20rem;
        height: 14.2857rem;
        max-height: calc(100vh - 11rem);
      }
      @media (max-width: 812px) and (orientation: landscape) and (max-height: 320px) {
        max-width: 20rem;
        align-items: flex-start;
        max-height: calc(100vh - 6.4rem);
      }
      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
        max-height: 10rem;
        align-self: center;
        margin-bottom: 2rem;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      flex-direction: column;
      > section:last-child {
        max-height: 16.1428rem;
        height: 100%;
        margin-bottom: 3.4rem;
        @media (max-height: 490px) {
          margin-bottom: 2.4rem;
        }
      }
    }
  }
  .portfolioLeftSide {
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      width: 100%;
      height: 100%;
      align-self: flex-end;
      > div {
        width: 100%;
      }
    }
    @media (max-width: 812px) and (orientation: landscape) {
      > div {
        width: 100%;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      height: auto;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      > div {
        .menu {
          display: none;
        }
      }
    }
  }
`;

export default styles;
