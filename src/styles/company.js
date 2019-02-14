import styled, { css } from "astroturf";

import { Section } from "../components/Elements/Section";

export const CompanyContainer = styled("main")``;

export const Footer = styled(Section)`
  padding-top: 5.3571rem;
  padding-bottom: 3.1428rem;
  background-color: #90c53d;
  background-image: url(../assets/img/backgrounds/companyFooter.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  color: #fff;
  @media (max-width: 1199px) {
    padding-top: 4.2857rem;
  }
  @media (max-width: 991px) {
    padding-top: 2.1428rem;
    padding-bottom: 1.4428rem;
  }
`;

export const ChatRow = styled("div")`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p {
    padding: 0 1.4285rem 0 0;
  }
  @media (max-width: 1199px) {
    position: relative;
    left: 4rem;
  }
  @media (max-width: 991px) {
    padding-top: 2rem;
    left: auto;
  }
`;

const styles = css`
  .whatAreWeDoing {
    color: #fff;
    background: url(../assets/img/backgrounds/whatAreWeDoing.png) top no-repeat,
      linear-gradient(to bottom, #19191d, #3c3b41),
      linear-gradient(to bottom, rgba(0, 170, 255, 0.05), rgba(0, 170, 255, 0.05));
    background-size: contain;
  }
  .ourClients {
    padding-bottom: 3.5714rem;
    @media (max-width: 1199px) {
      padding-bottom: 2.4285rem;
    }
    @media (max-width: 991px) {
      padding-bottom: 2.1428rem;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      padding-bottom: 1.4285rem;
    }
  }
  .ourClientsLogos {
    padding-top: 0;
    padding-bottom: 0;
    background-color: #f3f4f7;
  }
  .development {
    padding-bottom: 0;
    h2 {
      margin-bottom: 4.2857rem;
    }
    @media (max-width: 991px) {
      h2 {
        margin-bottom: 2.4rem;
      }
    }
    @media (max-width: 812px) and (orientation: landscape) {
      padding-top: 2rem;
      h2 {
        margin-left: 2rem;
        margin-bottom: 1rem;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      padding-top: 1.4rem;
      padding-bottom: 0;
      h2 {
        margin-bottom: 1.2rem;
      }
    }
  }
  button.companyTelegramBtn {
    flex-shrink: 0;
    background-color: #fff;
    svg {
      path {
        fill: #90c53d;
      }
    }
  }
`;

export default styles;
