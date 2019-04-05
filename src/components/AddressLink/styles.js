import { css } from "astroturf";

const styles = css`
  .addressLink {
    margin-bottom: 1.4285rem;
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      margin-bottom: 0.6rem;
    }
  }
`;

export default styles;
