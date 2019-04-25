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
  margin-bottom: 30vh;
  &:nth-of-type(1) {
    transform: translateY(calc(-50% + 7.8571rem));
    margin-bottom: calc(30vh - 7.8571rem);
  }
  &:nth-of-type(2) {
    margin-bottom: calc(30vh + 2.1428rem);
  }
  &:nth-of-type(3) {
    margin-bottom: calc(30vh + 3.8571rem);
  }
  &:last-of-type {
    margin-bottom: 66vh;
  }
  @media (max-width: 1199px) {
    width: calc(20rem * 2 + 2.1428rem);
  }
  @media (max-width: 991px) {
    width: 100%;
  }
  > article {
    &:first-child {
      margin-right: 2.1428rem;
      @media (max-width: 991px) {
        margin-right: 1.4444rem;
      }
    }
  }
  &.oneItem {
    align-items: center;
    flex-wrap: nowrap;
    > article {
      margin-right: 0;
    }
  }
`;

export const NoVacancyDescription = styled("p")`
  font-size: 0.8571rem;
  font-weight: 400;
  margin-bottom: 0;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-weight: 600;
  }
`;

export const PhotoContainer = styled("div")`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 21.4285rem;
  line-height: normal;
  background-color: transparent;
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
`;

const styles = css`
  .noVacancyCard {
    width: 20rem;
    @media (max-width: 911px) {
      width: 18rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      width: 17rem;
      background-color: transparent;
      box-shadow: none;
      margin: 0 auto;
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
