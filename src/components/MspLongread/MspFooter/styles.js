import styled, { css } from "astroturf";

import { Section } from "../../../components/Elements/Section";

export const Footer = styled(Section)`
  position: relative;
  background-color: #e0f0f6;
  height: 22.9285rem;
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
  article {
    display: flex;
    align-items: center;
    height: 100%;
    h1 {
      margin-bottom: 1.2rem;
    }
    @media (max-width: 320px) {
      justify-content: center;
    }
  }
  @media (hover: hover) {
    > div {
      &:last-child {
        transform: scale(1);
        transition: transform 200ms ease-in;
      }
    }
    &:hover {
      > div {
        transition: transform 200ms ease-out;
        &:last-child {
          transform: scale(1.1);
        }
      }
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    height: 17.1428rem;
  }
`;

export const Content = styled("div")`
  position: relative;
  z-index: 1;
`;

export const Phones = styled("img")`
  margin-top: 2rem;
  top: 50%;
  transform: translate(0, -50%);
  left: -8rem;
  width: 72rem;
  max-width: none;
  position: absolute;
  height: auto;
  @media (max-width: 1088px) {
    left: -10vw;
    width: 85vw;
  }
  @media (max-width: 991px) {
    margin-top: 1rem;
    left: -18.8vw;
    width: 104vw;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-top: -1rem;
    left: -11rem;
    width: 42rem;
  }
`;

export const PhonesContainer = styled("div")`
  top: 0;
  right: 0;
  width: 50vw;
  position: absolute;
  height: 100%;
`;

export const StoreContainer = styled("div")`
  margin-top: 2rem;
  display: flex;
  a {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const styles = css`
  .goToMobileMspLink {
    color: rgba(38, 44, 55, 0.5);
    svg {
      fill: rgba(38, 44, 55, 0.5);
    }
    @media (hover: hover) {
      &:hover {
        color: #387bc7;
        svg {
          fill: #387bc7;
        }
      }
    }
  }
`;

export default styles;
