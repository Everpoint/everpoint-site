import styled, { css } from "astroturf";

export const EvergisOnlineContainer = styled("div")``;

export const FiguresTitle = styled("h4")`
  margin: 4rem 0 4.8rem 0;
  font-size: 1.1428rem;
  font-weight: 600;
  line-height: 1.5;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
`;

const styles = css`
  .mainTitle {
    margin-bottom: 6.8571rem;
    @media (max-width: 1199px) {
      margin-bottom: 5.1428rem;
    }
    @media (max-width: 991px) {
      margin-bottom: 3.8571rem;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      margin-bottom: 2.5714rem;
    }
    @media (max-width: 767px) and (orientation: portrait) {
      margin-bottom: 2rem;
    }
  }
  .sectionWithScreenshots {
    p {
      margin-bottom: 9rem;
      @media (max-width: 1199px) {
        margin-bottom: 5rem;
      }
      @media (max-width: 991px) {
        margin-bottom: 4rem;
      }
      @media (max-width: 991px) {
        margin-bottom: 4rem;
      }
      @media (max-width: 812px) and (orientation: landscape) {
        margin-bottom: 3rem;
      }
      @media (max-width: 767px) and (orientation: portrait) {
        margin-bottom: 2rem;
      }
    }
  }
  .header {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image: url(../assets/img/portfolio/evergisOnline/header/pattern.png);
      background-position: top;
      background-size: cover;
    }
  }
  .headerLeftSide {
    transition-delay: 0ms;
  }
`;

export default styles;
