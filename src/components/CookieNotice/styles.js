import styled from "astroturf";

import { Button } from "../../components/Buttons/Buttons";

export const CookieNoticeContainer = styled("div")`
  z-index: 9999;
  display: flex;
  align-items: center;
  color: #fff;
  width: calc(100% - 3.2857rem * 2);
  max-width: 64.2857rem;
  bottom: 1.7142rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.2857rem;
  position: fixed;
  padding: 1.7142rem;
  background-color: rgba(38, 44, 55, 0.9);
  box-shadow: 0 0.2857rem 0.5714rem 0 rgba(38, 44, 55, 0.25);
  opacity: 0;
  pointer-events: none;
  transition: opacity 400ms ease;
  @media (max-width: 767px) and (orientation: portrait) {
    width: calc(100% - 1.7142rem * 2);
    bottom: 1rem;
    padding: 1rem;
    justify-content: center;
    flex-direction: column;
    line-height: 1.5;
  }
  &.isVisible {
    pointer-events: auto;
    opacity: 1;
  }
  &.transitionDisabled {
    transition: none;
  }
  a {
    white-space: nowrap;
  }
`;

export const PrimaryButton = styled(Button)`
  flex-shrink: 0;
  text-transform: uppercase;
  width: 5.1428rem;
  margin: 0 0.5714rem 0 2.2857rem;
  @media (max-width: 767px) and (orientation: portrait) {
    margin: 1rem 0 0 0;
  }
`;
