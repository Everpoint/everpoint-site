import styled from "astroturf";

export const Blank = styled("article")`
  padding: 2.8571rem;
  border-radius: 0.1428rem;
  box-shadow: 0 2.2857rem 2.2857rem 0 rgba(10, 18, 33, 0.15);
  background-color: #fff;
  @media (max-width: 991px) {
    padding: 2.1428rem;
    box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 1.4285rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    padding: 1rem;
  }
`;
