import styled from "astroturf";

export const TaglineAwardsContainer = styled("div")`
  width: 100%;
  height: 9rem;
  background-color: #323232;
  padding: 1.1428rem;
  margin-bottom: 5.2857rem;
  @media (max-width: 724px) {
    height: 11.0714rem;
    margin-bottom: 4rem;
  }
  @media (max-width: 524px) {
    width: 100vw;
    height: 13.5714rem;
    margin-bottom: 3rem;
    margin-left: -1.4285rem;
  }
`;

export const TaglineAwardsBlock = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #de923e;
  color: #fff;
  @media (max-width: 724px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  @media (max-width: 524px) {
    align-items: center;
  }
`;

export const TaglineAwardsLeftBlock = styled("div")`
  display: flex;
  padding: 0 1.7142rem;
  @media (max-width: 524px) {
    padding-top: 1rem;
    display: block;
  }
`;

export const LoyaltyContainer = styled("div")`
  width: 1.7142rem;
  height: 1.7142rem;
  @media (max-width: 724px) {
    padding-top: 0.2rem;
    width: 0.95rem;
    height: 0.95rem;
  }
  @media (max-width: 524px) {
    float: left;
  }
`;

export const TaglineAwardsLeftText = styled("div")`
  padding-left: 0.7142rem;
  display: flex;
  flex-direction: column;
  > span {
    white-space: nowrap;
    &:first-child {
      font-size: 1.1428rem;
      color: #de923e;
      text-transform: uppercase;
      font-weight: 600;
    }
    &:last-child {
      color: #d6d6d6;
      font-size: 0.8571rem;
    }
  }
  @media (max-width: 724px) {
    padding-bottom: 1rem;
    > span {
      &:first-child {
        font-size: 1rem;
      }
      &:last-child {
        font-size: 0.7142rem;
      }
    }
  }
`;

export const TaglineAwardsCenterBlock = styled("div")`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  > span {
    white-space: nowrap;
    line-height: normal;
    &:first-child {
      padding-bottom: 0.7142rem;
    }
  }
  @media (max-width: 724px) {
    padding-left: 3.4rem;
    font-size: 0.8571rem;
  }
  @media (max-width: 524px) {
    padding-left: 0;
    text-align: center;
  }
`;

export const TaglineAwardsRightBlock = styled("div")`
  flex-shrink: 0;
  position: relative;
  width: 11.1428rem;
  height: 100%;
  transform: translateY(calc(50% + 0.2rem));
  > div {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    left: 0;
    width: 7.6428rem;
    &:first-child {
      z-index: 1;
    }
    &:last-child {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
  @media (max-width: 724px) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  @media (max-width: 524px) {
    flex-shrink: 1;
    position: static;
    width: 7.4rem;
    > div {
      max-width: 5rem;
      &:first-child,
      &:last-child {
        //position: static;
        //transform: none;
      }
    }
  }
`;
