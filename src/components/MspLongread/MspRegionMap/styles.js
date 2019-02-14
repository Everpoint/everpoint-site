import styled, { css } from "astroturf";

export const MspRegionMapContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 38.5714rem;
  margin-top: -3.4rem;
  margin-bottom: 1.4rem;
  svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1199px) {
    height: 32.5714rem;
    margin: 6.4rem 0;
  }
  @media (max-width: 991px) {
    height: 34.5714rem;
    margin: 4rem 0;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    height: 26.5714rem;
  }
  @media (max-width: 420px) {
    height: auto;
    margin: 2rem 0;
  }
`;

export const AchievementContainer = styled("div")`
  padding: 0 1rem 1.8rem 1rem;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (max-width: 1199px) {
    justify-content: center;
    padding: 0;
  }
  @media (max-width: 420px) {
    position: static;
  }
`;

export const Achievement = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% / 3);
  padding-bottom: 1.8rem;
  > span {
    white-space: nowrap;
    font-size: 4rem;
    line-height: normal;
    font-weight: 600;
    min-width: 2.8571rem;
    height: 4.8571rem;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 0.4142rem;
  }
  > p {
    line-height: normal;
    padding: 0 1.4rem;
    font-size: 1.1428rem;
    text-align: center;
    margin-bottom: 0;
  }
  &:nth-child(n + 4) {
    padding-bottom: 1rem;
    align-self: flex-start;
  }
  @media (max-width: 1199px) {
    justify-content: flex-start;
    height: 11.1428rem;
    width: 40%;
    padding-bottom: 0;
    align-self: flex-start;
    &:nth-child(even) {
      margin-left: 1rem;
    }
    &:nth-child(odd) {
      margin-right: 1rem;
    }
    &:nth-child(n + 4) {
      align-self: flex-start;
      padding-bottom: 0;
    }
    > p {
      width: 20rem;
    }
  }
  @media (max-width: 991px) {
    > p {
      font-size: 1rem;
    }
  }
  @media (max-width: 700px) {
    > span {
      font-size: 2.8571rem;
    }
    > p {
      width: auto;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    width: 50%;
    height: auto;
    &:nth-child(even) {
      margin-left: 0;
    }
    &:nth-child(odd) {
      margin-right: 0;
    }
    > p {
      padding: 0 0.8rem;
      font-size: 0.8571rem;
    }
    > span {
      height: 3rem;
      margin-bottom: 1.4285rem;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    padding-bottom: 2.8571rem;
    &:nth-child(n + 4) {
      padding-bottom: 2.8571rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    &:nth-child(odd) {
      margin-right: 0;
    }
  }
`;

export const MapWraper = styled("div")`
  width: 100%;
  height: 84.4%;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    height: auto;
  }
  path {
    fill: #f0f4f7;
    stroke: #fff;
  }
  @media (max-width: 1199px) {
    width: 112%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 812px) and (orientation: landscape) {
    width: 100vw;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;

const styles = css`
  path.isFull {
    fill: #fff;
    stroke: #e6ebf0;
    ~ path {
      fill: #fff;
      stroke: #e6ebf0;
    }
  }
`;

export default styles;
