import { css } from "astroturf";

export const injectGlobals = () => {
  return css`
    @import url("../assets/normalize.scss");
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic");
    html,
    body {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: 14px;
      font-family: "Open Sans", Tahoma, sans-serif;
      color: #262c37;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      letter-spacing: 0;
    }
    body {
      overflow: hidden;
    }
    html {
      overflow-y: auto;
    }
    img {
      outline: none;
    }
  `;
};
