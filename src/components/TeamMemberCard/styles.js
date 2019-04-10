import styled, { css } from "astroturf";

import { Blank } from "../../components/Blank/Blank";

export const TeamMemberCardContainer = styled(Blank)`
  width: 100%;
  max-width: 21.4285rem;
  text-align: center;
  line-height: normal;
  @media (max-width: 1199px) {
    width: calc(50% - 2.1428rem / 2);
    max-width: none;
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    padding: 2.1428rem;
  }
  @media (max-width: 991px) {
    width: calc(50% - 1.4444rem / 2);
  }
  @media (max-width: 812px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &.vacancy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
    }
  }
  > svg {
    margin-bottom: 1rem;
    flex-shrink: 0;
  }
`;

export const VacancyAvatar = styled("div")`
  width: 100%;
  height: 11.4285rem;
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Name = styled("div")`
  font-size: 1.2857rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.1428rem;
  }
  &.vacancy {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    margin-bottom: 0;
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const Position = styled("div")`
  font-weight: 400;
  font-size: 1rem;
  color: rgba(33, 34, 36, 0.25);
  margin-bottom: 1rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
    margin-bottom: 0.6rem;
  }
`;

export const Description = styled("div")`
  font-weight: 400;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
  }
  @media (max-height: 340px) {
    display: none;
  }
`;

const styles = css`
  .avatarBlock {
    margin: 0 auto 1.5rem auto;
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      margin: 0 auto 0.6rem auto;
    }
    @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
      only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
      max-width: 5.4rem;
      max-height: 5.4rem;
    }
  }
`;

export default styles;
