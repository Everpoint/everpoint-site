import styled from "astroturf";

import { Button } from "../../components/Buttons/Buttons";

export const BulletsContainer = styled("div")`
  display: none;
  @media (max-width: 991px) {
    padding: 0 1rem;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    align-items: center;
    left: 50%;
    transform: translate(-50%, calc(100% + 1rem));
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 812px) and (orientation: landscape) and (max-height: 320px) {
    transform: translate(-50%, calc(100% + 0.2rem));
  }
  @media (max-width: 812px) and (orientation: portrait) and (max-height: 490px) {
    transform: translate(-50%, calc(100% + 0.5rem));
  }
`;

const ControlBtn = styled(Button)`
  display: flex;
  align-items: center;
  width: 1.4rem;
  height: 1.4rem;
  background: none;
  svg {
    width: 100%;
    height: 0.7rem;
    path {
      fill: rgba(38, 44, 55, 0.35);
      stroke: rgba(38, 44, 55, 0.35);
    }
  }
  &.disabled {
    path {
      fill: rgba(38, 44, 55, 0.15);
      stroke: rgba(38, 44, 55, 0.15);
    }
  }
`;

export const PrevBtn = styled(ControlBtn)``;

export const NextBtn = styled(ControlBtn)`
  transform: rotate(180deg);
`;

export const Amount = styled("span")`
  text-align: center;
  display: block;
  width: 3.6428rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: rgba(38, 44, 55, 0.35);
  font-size: 0.8571rem;
  @media (max-width: 812px) {
    width: 2.5714rem;
    font-size: 0.7142rem;
  }
`;
