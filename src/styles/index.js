import { css } from "astroturf";

const styles = css`
  .indexContainer {
    @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape), only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {
      margin: 2.5971rem auto 0 auto;
      height: calc(100% - 2.5971rem);
    }
  }
`;

export default styles;
