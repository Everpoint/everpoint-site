import { css } from "astroturf";

export const injectGlobals = () => {
  return css`
    @import url("../assets/normalize.scss");
    html,
    body {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: 14px;
      font-family: "Open Sans", Tahoma, sans-serif;
      color: #262c37;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      letter-spacing: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    img {
      outline: none;
    }
    :global(#___gatsby) {
      width: 100%;
      height: 100%;
      > div:first-child {
        width: 100%;
        height: 100%;
      }
    }
    :global(#__replain_widget) {
      @media (max-width: 767px) and (orientation: portrait) {
        right: 8px !important;
        bottom: 8px !important;
      }
    }
  `;
};
