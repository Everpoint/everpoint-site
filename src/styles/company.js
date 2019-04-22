import styled, { css } from "astroturf";

import { Section } from "../components/Elements/Section";

export const CompanyContainer = styled("main")`
  position: relative;
`;

export const Footer = styled(Section)`
  padding-top: 5.3571rem;
  padding-bottom: 2.8rem;
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
    padding-bottom: 1.1428rem;
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

  p.chatText {
    padding: 4.4rem 0 0 0;
    text-align: right;
    @media (max-width: 991px) {
      padding: 2rem 4.4285rem 1.6rem 0;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      padding: 1rem 5.4285rem 1.6rem 0;
    }
    @media (max-width: 767px) and (orientation: portrait) {
      padding: 1rem 5.4285rem 1rem 0;
    }
  }
`;

export default styles;
