import styled, { css } from "astroturf";

export const HowWeAreWorkingContainer = styled("div")`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    will-change: opacity, transform;
    padding: 1.7142rem;
    width: 100%;
    height: 100%;
    border-radius: 0.1428rem;
    box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
    background-color: #fff;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    padding: 1.2rem;
  }
`;

export const Title = styled("h4")`
  font-size: 1.2857rem;
  font-weight: 600;
  @media (max-width: 991px) {
    font-size: 1.1428rem;
    &:nth-child(4) {
      display: none;
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 0.7142rem;
  }
  @media (max-height: 300px),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    margin-bottom: 0.8rem;
  }
`;

export const Paragraph = styled("p")`
  font-size: 1.1428rem;
  line-height: normal;
  @media (max-width: 991px) {
    font-size: 0.7142rem;
    margin-bottom: 0.8rem;
    ~ br {
      display: none;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 0.5714rem;
  }
  @media (max-height: 300px),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    margin-bottom: 0.4rem;
  }
`;

export const PrinciplesContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Principle = styled("section")`
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 4);
  height: 9.4285rem;
  > span {
    text-align: center;
    white-space: nowrap;
    @media (max-width: 1000px) {
      white-space: normal;
    }
  }
`;

export const Badge = styled("div")`
  width: 4rem;
  height: 4rem;
  box-shadow: 0 8px 8px 0 rgba(10, 18, 33, 0.05);
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.7142rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const styles = css`
  .howWeAreWorkingLink {
    align-self: flex-end;
    @media (max-width: 940px) {
      align-self: flex-start;
    }
  }
`;

export default styles;
