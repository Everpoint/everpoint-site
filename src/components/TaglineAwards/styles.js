import styled from "astroturf";

export const TaglineAwardsContainer = styled("div")`
  width: 100%;
  background-color: #323232;
  padding: 2.2857rem 2.2857rem 1.2857rem 2.2857rem;
  margin-bottom: 3.4rem;
  @media (max-width: 767px) and (orientation: portrait) {
    padding: 1.4857rem 1.4857rem 1rem 1.4857rem;
  }
`;

export const TaglineAwardsBlock = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: #fff;
  flex-wrap: wrap;
  @media (max-width: 1064px) {
    justify-content: center;
  }
`;

export const Title = styled("h4")`
  line-height: 1.5;
  text-align: center;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.1428rem;
  margin-bottom: 2.4rem;
  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1.4rem;
  }
`;
