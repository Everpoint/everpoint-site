import { css } from "astroturf";

const styles = css`
  .scrollbar {
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
  .londreadBodyMobile {
    overflow-y: auto;
  }
  :global {
    html {
      overflow-y: auto;
    }
  }
`;

export default styles;
