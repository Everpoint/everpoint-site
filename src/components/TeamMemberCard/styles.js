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
  @media (max-width: 991px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Name = styled("div")`
  font-size: 1.2857rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 1.1428rem;
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
    margin: 1.5rem auto;
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
