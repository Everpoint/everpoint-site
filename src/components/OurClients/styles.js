import styled from "astroturf";

export const OurClientsContainer = styled("div")`
  padding: 3.8571rem 0 0 0;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 85.7142rem;
  @media (max-width: 1199px) {
    padding: 2.4571rem 0 0 0;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 1.6rem 0;
  }
`;

export const OurClientsItem = styled("div")`
  width: calc(100% / 6);
  height: 3.8571rem;
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-origin: content-box;
  padding: 0 1.4rem;
  background-color: #f3f4f7;
  background-size: contain;
  margin-bottom: 3.8571rem;
  @media (max-width: 1199px) {
    margin-bottom: 2.4571rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 0.8rem 1rem;
    margin-bottom: 0;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: calc(100% / 3);
  }
`;
