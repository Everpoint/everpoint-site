import styled from "astroturf";

export const ConditionsContainer = styled("ul")`
  list-style: none;
  margin: 0 0 5rem 0;
  @media (max-width: 991px) {
    margin: 0 0 3.4rem 0;
  }
`;

export const ConditionItemIcon = styled("div")`
  align-self: flex-start;
  margin-right: 1.7142rem;
  width: 2.2857rem;
  min-height: 2.2857rem;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
  @media (max-width: 1199px) {
    margin-right: 1.6rem;
    width: 2rem;
  }
  @media (max-width: 991px) {
    width: 1.4285rem;
    margin-right: 1.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    margin-right: 1rem;
  }
`;

export const ConditionItem = styled("li")`
  display: flex;
  align-items: center;
  font-size: 1.2857rem;
  line-height: 1.33;
  margin-bottom: 1.4rem;
  @media (max-width: 1199px) {
    font-size: 1.1428rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 991px) {
    font-size: 1rem;
    line-height: 1.43;
    margin-bottom: 1rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    font-size: 0.8571rem;
    line-height: 1.5;
  }
`;
