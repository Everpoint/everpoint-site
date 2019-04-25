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
  width: calc(100% / 3);
  height: 9.4285rem;
  > span {
    text-align: center;
    white-space: nowrap;
    @media (max-width: 1000px) {
      white-space: normal;
    }
  }
  &.longread {
    align-items: flex-start;
    flex-direction: row;
    width: calc(100% / 2 - 3.5714rem);
    margin: 0;
    height: auto;
  }
`;

export const Title = styled(H4)`
  height: 2.8571rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: 1rem;
  &.longread {
    font-size: 1.4285rem;
  }
`;

export const Description = styled("p")`
  font-size: 1.1428rem;
  line-height: 1.5;
  color: rgba(38, 44, 55, 0.75);
`;

export const Badge = styled("div")`
  width: 5.1428rem;
  height: 5.1428rem;
  box-shadow: 0 0.5714rem 1.1428rem 0 rgba(144, 197, 61, 0.5);
  background-color: #90c53d;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 44% 44%;
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
    border-radius: 0;
  }
`;

export const Content = styled("div")``;
