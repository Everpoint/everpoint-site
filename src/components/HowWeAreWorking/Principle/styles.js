import styled from "astroturf";

import { H4 } from "../../../components/Typography/Headlines";

export const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  &.longread {
    justify-content: space-between;
    margin-top: 4.444rem;
  }
`;

export const Item = styled("article")`
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

export const Title = styled(H4)`
  height: 2.8571rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Description = styled("p")`
  font-size: 1.1428rem;
  line-height: 1.5;
`;

export const Badge = styled("div")`
  width: 4rem;
  height: 4rem;
  box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.05);
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.7142rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
  &.longread {
    margin: 0 1.7142rem 0 0;
    width: 2.8571rem;
    height: 2.8571rem;
    background-color: transparent;
    box-shadow: none;
    background-size: contain;
  }
`;

export const Content = styled("div")``;
