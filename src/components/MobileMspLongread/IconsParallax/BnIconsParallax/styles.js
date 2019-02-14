import { css } from "astroturf";

const styles = css`
  .bnIconsParallax {
    max-width: 38.5714rem;
    height: 90.8%;
    transform: translate(-50%, -50.4%);
    margin-left: 6vh;
    margin-left: calc(var(--vh, 1vh) * 6);
    svg {
      width: 2.8571rem;
      height: 2.8571rem;
      &:nth-child(1) {
        right: 28%;
        top: 19.5%;
      }
      &:nth-child(2) {
        right: 39%;
        top: 27.5%;
      }
      &:nth-child(3) {
        right: 32%;
        top: 36.5%;
      }
      &:nth-child(4) {
        right: 0;
        top: 41.5%;
      }
      &:nth-child(5) {
        right: 45%;
        top: 42.5%;
      }
      &:nth-child(6) {
        right: 26%;
        top: 44%;
      }
      &:nth-child(7) {
        right: 51%;
        top: 48%;
      }
      &:nth-child(8) {
        right: 73%;
        top: 53%;
      }
      &:nth-child(9) {
        right: 52%;
        top: 55%;
      }
      &:nth-child(10) {
        right: 94%;
        top: 56%;
      }
      &:nth-child(11) {
        right: 65%;
        top: 62%;
      }
      &:nth-child(12) {
        right: 58%;
        top: 69%;
      }
      &:nth-child(13) {
        right: 68.5%;
        top: 76%;
      }
    }
    @media (max-width: 1199px) {
      height: 92.8%;
      max-width: 22.5714rem;
      margin-left: 2vh;
      margin-left: calc(var(--vh, 1vh) * 2);
      svg {
        width: 2.1428rem;
        height: 2.1428rem;
      }
    }
    @media (max-width: 991px) {
      height: 82.8%;
      max-width: 23.5714rem;
      margin-left: -1vh;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      top: 4rem;
      transform: translate(-50%, 0);
      height: 72.8%;
      margin-left: 0;
      svg {
        width: 1.7857rem;
        height: 1.7857rem;
      }
    }
  }
`;

export default styles;
