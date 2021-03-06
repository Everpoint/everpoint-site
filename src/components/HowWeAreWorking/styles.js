import styled, { css } from "astroturf";

export const HowWeAreWorkingContainer = styled("div")`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 0 1.7142rem 0 1.7142rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    background-color: transparent;
    box-shadow: none;
    padding: 1.2rem;
  }
`;

export const Title = styled("h4")`
  font-size: 1.2857rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
  line-height: normal;
  @media (max-width: 991px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.85714rem;
  }
`;

const styles = css`
  a.howWeAreWorkingLink {
    font-size: 1.1428rem;
    margin-top: 1.6rem;
    align-self: flex-end;
  }
  p.howWeAreWorkingParagraph {
    margin-bottom: 1.8rem;
  }
`;

export default styles;
