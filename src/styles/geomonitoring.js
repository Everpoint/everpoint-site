import styled, { css } from "astroturf";

export const GeomonitoringContainer = styled("div")`
  h1 {
    margin-bottom: 3.4rem;
  }
  h3 {
    margin-top: 7.4rem;
  }
  @media (max-width: 1199px) {
    h3 {
      margin-top: 5rem;
    }
  }
  @media (max-width: 991px) {
    h1 {
      margin-bottom: 2.2rem;
    }
    h3 {
      margin-top: 4rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    h1 {
      margin-bottom: 1.4rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    h3 {
      margin-top: 2rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    h3 {
      margin-top: 1rem;
    }
  }
`;

export const Footer = styled("footer")`
  position: relative;
  background-color: rgba(38, 44, 55, 0.1);
  padding: 5.2857rem 0;
  text-align: center;
  h3 {
    max-width: 44rem;
    margin: 0 auto;
  }
  @media (max-width: 1199px) {
    padding: 4.4rem 0;
    h3 {
      max-width: 38rem;
      font-size: 1.4285rem;
    }
  }
  @media (max-width: 991px) {
    h3 {
      font-size: 1.2857rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    padding: 2.2857rem 0;
    h3 {
      max-width: 28rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 1.7142rem 2.8rem;
    h3 {
      max-width: none;
      font-size: 0.8571rem;
    }
  }
`;

const styles = css`
  .headerRightSide {
    @media (max-width: 767px) and (orientation: portrait) and (max-height: 524px) {
      flex-shrink: 1;
      flex-grow: 1;
    }
  }
  .headerLeftSide {
    padding-right: 1rem;
    max-width: 34rem;
    p {
      display: block;
      margin-bottom: 0;
    }
    @media (max-width: 767px) and (orientation: portrait) and (max-height: 524px) {
      p {
        margin-bottom: 2rem;
      }
    }
  }
  .firstExperienceSection {
    background-color: #64c76c;
    color: #fff;
    img {
      margin-top: 3.4rem;
      margin-bottom: 0;
    }
    @media (max-width: 1199px) {
      img {
        margin-top: 2.4rem;
      }
    }
  }
  .whatIsHeDoing {
    background-color: #ebf1f9;
  }
  .telegramBtn {
    right: 3.4285rem;
    bottom: 3.4285rem;
    position: absolute;
    background-color: #90c53d;
    @media (max-width: 1199px) {
      right: 2.2857rem;
      bottom: 2.2857rem;
    }
    @media (max-width: 991px) {
      width: 2.2857rem;
      height: 2.2857rem;
      right: 1.1428rem;
      bottom: 1.1428rem;
      svg {
        width: 1.1rem;
        height: 1rem;
      }
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      width: 1.7142rem;
      height: 1.7142rem;
      svg {
        width: 1rem;
        height: 0.8rem;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      right: 0.6rem;
      bottom: 0.6rem;
    }
  }
`;

export default styles;
