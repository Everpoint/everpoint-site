import styled from "astroturf";

export const BigH1 = styled("h1")`
  line-height: normal;
  margin-bottom: 2.1428rem;
  font-size: 4.5714rem;
  @media (max-width: 1199px) {
    font-size: 3.4285rem;
  }
  @media (max-width: 991px) {
    font-size: 2.5714rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 2.2857rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    font-size: 1.7142rem;
  }
`;

export const H1 = styled("h1")`
  line-height: normal;
  font-size: 3.4285rem;
  margin-bottom: 1.5rem;
  @media (max-width: 1199px) {
    font-size: 2.5714rem;
  }
  @media (max-width: 991px) {
    font-size: 1.7142rem;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.4285rem;
    margin-bottom: 1rem;
  }
  &.portfolio {
    font-size: 2.5714rem;
    @media (max-width: 1199px) {
      font-size: 2.2857rem;
    }
    @media (max-width: 991px) {
      font-size: 1.7142rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 1.4285rem;
    }
  }
`;

export const H2 = styled("h2")`
  line-height: normal;
  font-size: 3rem;
  margin-bottom: 2.1428rem;
  @media (max-width: 1199px) {
    font-size: 2.2857rem;
  }
  @media (max-width: 991px) {
    font-size: 1.7142rem;
    margin-bottom: 1.8428rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.42857rem;
    margin-bottom: 1rem;
  }
  &.small {
    font-size: 2.5714rem;
    @media (max-width: 1199px) {
      font-size: 2.2857rem;
    }
    @media (max-width: 991px) {
      font-size: 1.4285rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 1.2857rem;
    }
  }
`;

export const H3 = styled("h3")`
  line-height: normal;
  font-size: 1.7142rem;
  @media (max-width: 991px) {
    font-size: 1.4285rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.2857rem;
  }
`;

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
  line-height: 1.5;
  margin-bottom: 1.44rem;
  @media (max-width: 991px) {
    font-size: 1rem;
    line-height: 1.43;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
    line-height: 1.5;
  }
  &.big {
    font-size: 1.2857rem;
    line-height: 1.33;
    margin-bottom: 2rem;
    @media (max-width: 1199px) {
      font-size: 1.1428rem;
      line-height: 1.5;
    }
    @media (max-width: 991px) {
      font-size: 1rem;
      line-height: 1.43;
      margin-bottom: 1.64rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 0.8571rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
`;
