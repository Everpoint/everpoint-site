import { css } from "astroturf";

const styles = css`
  .addressLink {
    margin-bottom: 1.4285rem;
    @media (max-width: 991px) {
      font-size: 1.14285rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export default styles;
