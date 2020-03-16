import { css } from "astroturf";

export const common = css`
  .container {
    max-width: 114.2857rem;
    padding-left: 6.4285rem;
    padding-right: 6.4285rem;
    @media (max-width: 1199px) {
      padding-left: 2.8rem;
      padding-right: 2.8rem;
    }
    @media (max-width: 991px) {
      padding-left: 2.2857rem;
      padding-right: 2.2857rem;
    }

    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  div.russiaBackground {
    @media (max-width: 1199px) {
      background-size: 184%;
      background-position-y: 53%;
    }
    @media (max-width: 991px) {
      background-size: 251%;
      background-position-y: 54%;
    }
  }
`;
