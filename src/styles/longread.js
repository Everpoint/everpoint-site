import { css } from "astroturf";

const styles = css`
  .scrollbar {
    width: 100%;
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
