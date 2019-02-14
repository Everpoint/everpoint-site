import styled from "astroturf";

export const FiguresSection = styled("section")`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  @media (max-width: 1199px) {
    margin: -2rem 0 1rem 0;
  }
  @media (max-width: 991px) {
    padding: 0 2.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 0;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin: 2rem 0 0 0;
  }
`;

export const Figure = styled("figure")`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100% / 3);
  text-align: center;
  margin: 1.71425rem 0;
  svg {
    flex-shrink: 0;
  }
  p {
    display: flex;
    align-items: center;
    padding: 1.7142rem 1rem 0 1rem;
    margin: 0;
    flex-grow: 1;
    flex-shrink: 0;
  }
  @media (max-width: 1199px) {
    width: 38%;
    margin: 1.71425rem auto;
    p {
      max-width: 20rem;
    }
  }
  @media (max-width: 991px) {
    width: 50%;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin: 1.71425rem auto 0.6rem auto;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    margin: 0 0 2.8571rem 0;
    p {
      max-width: none;
      padding: 1.2857rem 0 0 0;
    }
  }
`;
