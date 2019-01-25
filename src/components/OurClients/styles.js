import styled from "astroturf";

export const OurClientsContainer = styled("div")`
  height: 20rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 85.7142rem;
  @media (max-width: 992px) {
    height: 15.2857rem;
  }
  @media (max-width: 768px) {
    height: 12rem;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    height: 10.1428rem;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
    padding: 1.4rem 0;
    height: 16rem;
  }
`;

export const OurClientsItem = styled("div")`
  width: calc(100% / 6);
  height: 50%;
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f3f4f7;
  background-size: 65%;
  @media (max-width: 992px) {
    background-size: 60%;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: portrait) {
    width: calc(100% / 3);
    height: 25%;
    background-size: 55%;
  }
`;
