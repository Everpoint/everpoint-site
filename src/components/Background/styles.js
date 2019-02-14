import styled, { css } from "astroturf";

import { FullViewportContainer } from "../../styles/main";

const styles = css`
  .default {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .earth {
    background-image: url(../../assets/img/main-slides/earth.svg);
  }
  .europeRussia {
    background-image: url(../../assets/img/main-slides/russia.svg);
  }
  .moscow {
    background-image: url(../../assets/img/main-slides/moscow.svg);
    @media (max-width: 767px) and (orientation: portrait) {
      background-size: 344%;
      background-position: 51% 51%;
    }
  }
  .busPngPreview {
    background-position: 75% center;
    background-image: url(../../assets/img/main-slides/bus.png);
  }
  .bus {
    background-position: 75% center;
    background-image: url(../../assets/img/main-slides/bus.svg);
  }
  .metro {
    background-position: 75% center;
    background-image: url(../../assets/img/main-slides/metro.svg);
  }
  .bus,
  .metro,
  .busPngPreview {
    @media (max-width: 812px) and (orientation: landscape) {
      background-position: 74% 24%;
      background-size: 130%;
    }
    @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
      only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
      background-position: 53% 28%;
      background-size: 107%;
    }
  }
`;

export default styles;

export const SvgWrapper = styled(FullViewportContainer)``;
