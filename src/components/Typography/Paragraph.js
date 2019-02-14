import styled from "astroturf";

export const Paragraph = styled("p")`
  font-size: 1.2857rem;
  line-height: 1.5;
  margin-bottom: 1.6rem;
  @media (max-width: 991px) {
    font-size: 1.1428rem;
    margin-bottom: 1.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  &.withoutMargin {
    margin: 0;
  }
`;
