import styled, { css } from "astroturf";

export const TeamMembersContainer = styled("div")`
  position: relative;
  margin-left: auto;
  width: calc(21.4285rem * 2 + 2.1428rem);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  min-height: 26.7857rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms linear;
  @media (max-width: 1199px) {
    width: calc(20rem * 2 + 2.1428rem);
  }
  @media (max-width: 991px) {
    display: none;
  }
  &.isVisible {
    pointer-events: auto;
    opacity: 1;
  }
  > article {
    &:first-child {
      margin-right: 2.1428rem;
    }
  }
  &.oneItem {
    align-items: center;
    > article {
      margin-right: 0;
    }
  }
`;

export const NoVacancyDescription = styled("p")`
  font-size: 0.8571rem;
  font-weight: 400;
  margin-top: 1.4rem;
  margin-bottom: 0;
  @media (max-width: 812px) and (orientation: landscape) {
    margin-top: 0;
    font-size: 0.7142rem;
  }
  @media (max-height: 340px) {
    span:last-child {
      display: none;
    }
  }
`;

export const PhotoContainer = styled("div")`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 21.4285rem;
  line-height: normal;
  background-color: #fff;
  &:first-child {
    margin-right: 2.1428rem;
  }
  > img {
    max-width: none;
    width: auto;
    height: 100%;
  }
  @media (max-width: 1199px) {
    width: calc(50% - 2.1428rem / 2);
    max-width: none;
  }
  @media (max-width: 991px) {
    will-change: opacity, transform;
    width: 100%;
    height: 100%;
    border-radius: 0.1428rem;
    box-shadow: 0 0.8571rem 0.8571rem 0 rgba(10, 18, 33, 0.1);
  }
`;

const styles = css`
  .noVacancyCard {
    @media (max-height: 300px),
      only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
      > div:nth-child(2) {
        font-size: 0.8rem;
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      > div:nth-child(2) {
        margin-bottom: 0;
      }
      p {
        margin-top: 0.6rem;
      }
    }
  }
  .vacancyCard {
    @media (max-width: 767px) and (orientation: portrait) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export default styles;
