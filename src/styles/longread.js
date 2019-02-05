import { css } from "astroturf";

const styles = css`
  .scrollbar {
    width: 100%;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }
`;

export default styles;
