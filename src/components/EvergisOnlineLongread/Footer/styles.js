import styled from "astroturf";

export const FooterContainer = styled("footer")`
  display: flex;
  height: 34.8571rem;
  @media (max-width: 1199px) {
    height: 29.1428rem;
  }
  @media (max-width: 991px) {
    height: 26rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
    height: auto;
  }
`;

const Section = styled("section")`
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 1.7142rem;
  line-height: normal;
  width: 50%;
  padding: 0 5rem;
  > figure {
    max-width: 37.8571rem;
    margin-bottom: 0;
  }
  @media (max-width: 1199px) {
    padding: 0 3.5714rem;
    font-size: 1.4285rem;
  }
  @media (max-width: 991px) {
    font-size: 1.2857rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    padding: 3.1428rem 2.4285rem;
    > figure {
      max-width: none;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 2.1428rem 1.7142rem;
    font-size: 1.1428rem;
  }
`;

export const LeftSide = styled(Section)`
  background-color: #353d46;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  > figure {
    > div {
      margin-top: 2.2857rem;
      font-weight: 600;
      @media (max-width: 1199px) {
        margin-top: 1.4rem;
      }
    }
  }
`;

export const RightSide = styled(Section)`
  align-items: center;
  background-color: #1b242c;
  justify-content: flex-start;
  > figure {
    a {
      color: #00aaff;
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
