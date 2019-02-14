import styled, { css } from "astroturf";

export const Nav = styled("nav")`
  display: flex;
  align-items: center;
  margin-bottom: 6.4rem;
  justify-content: center;
  button {
    &:first-child {
      margin-right: 1rem;
    }
    &:last-child {
      margin-left: 1rem;
    }
  }
  @media (max-width: 991px) {
    margin-bottom: 5.4rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-bottom: 3.4rem;
  }
`;

export const Page = styled("a")`
  position: relative;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  min-width: 2.2857rem;
  height: 2.2857rem;
  padding: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  &.selected {
    transition: none;
    cursor: default;
    color: #fff;
    background-color: #90c53d;
    border-radius: 50%;
  }
  @media (hover: hover) {
    &:hover:not(.selected) {
      transition: color 200ms ease-in;
      color: #90c53d;
    }
  }
`;

const styles = css``;

export default styles;
