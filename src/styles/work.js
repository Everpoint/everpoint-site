import styled, { css } from "astroturf";

export const WorkMain = styled("main")`
  padding-top: 8rem;
  @media (max-width: 1199px) {
    padding-top: 5rem;
  }
  @media (max-width: 991px) {
    padding-top: 5.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    padding-top: 3.4rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding-top: 10.8rem;
  }
`;

export const DevelopmentCycleContainer = styled("article")`
  max-width: 76.4285rem;
  width: 100%;
  margin: 0 auto;
`;

export const Footer = styled("footer")`
  padding-top: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1199px) {
    padding-top: 1.8rem;
  }
  @media (max-width: 991px) {
    padding-top: 0;
  }
`;

const styles = css`
  .developmentCycleTitle {
    padding: 7.4rem 0 0 6.4rem;
  }
  .developmentWithinCompany {
    background-color: #f3f4f7;
    padding-bottom: 3.4rem;
    @media (max-width: 991px) {
      padding-top: 3.5714rem;
    }
  }
`;

export default styles;
