import { css } from "astroturf";

const styles = css`
  .supporticonsParallax {
    top: -20%;
    max-width: 86.2857rem;
    height: 100%;
    transform: translate(-50%, 0);
    svg {
      width: 1.7142rem;
      height: 1.7142rem;
      &:nth-child(1) {
        right: 10%;
        top: 14.5%;
      }
      &:nth-child(2) {
        width: 2.2857rem;
        height: 2.2857rem;
        right: 17%;
        top: 18%;
      }
      &:nth-child(3) {
        width: 3.4285rem;
        height: 3.4285rem;
        right: 25%;
        top: 10.5%;
      }
      &:nth-child(4) {
        right: 34%;
        top: 22.5%;
      }
      &:nth-child(5) {
        right: 41%;
        top: 7.5%;
      }
      &:nth-child(6) {
        width: 2.2857rem;
        height: 2.2857rem;
        right: 44%;
        top: 19%;
      }
      &:nth-child(7) {
        width: 2.2857rem;
        height: 2.2857rem;
        right: 53%;
        top: 30%;
      }
      &:nth-child(8) {
        width: 3rem;
        height: 3rem;
        right: 59%;
        top: 16%;
      }
      &:nth-child(9) {
        width: 3.4285rem;
        height: 3.4285rem;
        right: 64%;
        top: 23%;
      }
      &:nth-child(10) {
        width: 2.2857rem;
        height: 2.2857rem;
        right: 77%;
        top: 22%;
      }
      &:nth-child(11) {
        right: 86%;
        top: 17%;
      }
    }
    @media (max-width: 1199px) {
      svg {
        width: 1.4642rem;
        height: 1.4642rem;
        &:nth-child(2) {
          width: 1.95rem;
          height: 1.95rem;
        }
        &:nth-child(3) {
          width: 2.9285rem;
          height: 2.9285rem;
        }
        &:nth-child(6) {
          width: 1.95rem;
          height: 1.95rem;
        }
        &:nth-child(7) {
          width: 1.95rem;
          height: 1.95rem;
        }
        &:nth-child(8) {
          width: 2.5642rem;
          height: 2.5642rem;
        }
        &:nth-child(9) {
          width: 2.9285rem;
          height: 2.9285rem;
        }
        &:nth-child(10) {
          width: 1.95rem;
          height: 1.95rem;
        }
      }
    }
    @media (max-width: 991px) {
      max-width: 44.2857rem;
      svg {
        width: 1.0285rem;
        height: 1.0285rem;
        &:nth-child(2) {
          width: 1.3642rem;
          height: 1.3642rem;
        }
        &:nth-child(3) {
          width: 2.05rem;
          height: 2.05rem;
        }
        &:nth-child(6) {
          width: 1.3642rem;
          height: 1.3642rem;
        }
        &:nth-child(7) {
          width: 1.3642rem;
          height: 1.3642rem;
        }
        &:nth-child(8) {
          width: 1.7928rem;
          height: 1.7928rem;
        }
        &:nth-child(9) {
          width: 2.05rem;
          height: 2.05rem;
        }
        &:nth-child(10) {
          width: 1.3642rem;
          height: 1.3642rem;
        }
      }
    }
    @media (max-width: 812px) and (orientation: landscape) {
      svg {
        width: 0.7785rem;
        height: 0.7785rem;
        &:nth-child(2) {
          width: 1.0428rem;
          height: 1.0428rem;
        }
        &:nth-child(3) {
          width: 1.5642rem;
          height: 1.5642rem;
        }
        &:nth-child(6) {
          width: 1.0428rem;
          height: 1.0428rem;
        }
        &:nth-child(7) {
          width: 1.0428rem;
          height: 1.0428rem;
        }
        &:nth-child(8) {
          width: 1.3642rem;
          height: 1.3642rem;
        }
        &:nth-child(9) {
          width: 1.5642rem;
          height: 1.5642rem;
        }
        &:nth-child(10) {
          width: 1.0428rem;
          height: 1.0428rem;
        }
      }
    }
  }
`;

export default styles;
