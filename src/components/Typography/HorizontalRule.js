import styled from "astroturf";

export const HorizontalRule = styled("hr")`
  text-align: left;
  width: 11.4285rem;
  height: 0.6428rem;
  margin-bottom: calc(2.4571rem - 0.6428rem);
  background: #90c53d;
  @media (max-width: 991px) {
    height: 0.5714rem;
    margin-bottom: calc(2rem - 0.5714rem);
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 0.2857rem;
    margin-bottom: calc(1.4571rem - 0.2857rem);
  }
`;