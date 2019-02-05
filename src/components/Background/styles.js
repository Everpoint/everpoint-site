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
    background-image: url(../../img/main-slides/earth.svg);
  }
  .europeRussia {
    background-image: url(../../img/main-slides/russia.svg);
  }
  .moscow {
    background-image: url(../../img/main-slides/moscow.svg);
  }
  .busPngPreview {
    background-position: 75% center;
    background-image: url(../../img/main-slides/bus.png);
  }
  .bus {
    background-position: 75% center;
    background-image: url(../../img/main-slides/bus.svg);
  }
  .metro {
    background-position: 75% center;
    background-image: url(../../img/main-slides/metro.svg);
  }
  .bus,
  .metro {
    @media (max-width: 812px) and (orientation: landscape) {
      background-position: 74% 24%;
      background-size: 130%;
    }
  }
`;

export default styles;

export const SvgWrapper = styled(FullViewportContainer)``;
