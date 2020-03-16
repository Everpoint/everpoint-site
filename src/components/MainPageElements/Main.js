import styled from "astroturf";

export const Main = styled("main")`
  max-width: 114.2857rem;
  padding: 5.9285rem 6.4285rem 0 6.4285rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1199px) {
    padding: 5.9285rem 2.8rem 0 2.8rem;
  }
  @media (max-width: 991px) {
    padding: 5.7142rem 2.2857rem 0 2.2857rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 4.5714rem 1.7142rem 0 1.7142rem;
  }
`;
