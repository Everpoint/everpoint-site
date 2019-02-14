import styled from "astroturf";

export const Section = styled("section")`
  width: 100%;
  padding: 8.4rem 8.1428rem 9rem 8.1428rem;
  @media (max-width: 1199px) {
    padding: 6rem 7.8571rem 6.4rem 7.8571rem;
  }
  @media (max-width: 991px) {
    padding: 4.7rem 3.1428rem 5.1rem 3.1428rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    padding: 3.2rem 1.4285rem 3.6rem 1.4285rem;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 2rem 1.4285rem 2.4rem 1.4285rem;
  }

  &.withoutPaddingTop {
    padding-top: 0;
  }

  &.withoutPaddingBottom {
    padding-bottom: 0;
  }
`;