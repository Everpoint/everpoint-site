import styled, { css } from "astroturf";

import { H1, Paragraph } from "../../components/LongreadAtoms/Longread";

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0 6rem;
  overflow: hidden;
  @media (max-width: 992px) {
    padding: 0 4.4rem 0 3.1428rem;
  }
  @media (max-width: 576px) {
    padding: 0 2rem 0 1.7142rem;
  }
  @media (max-width: 440px) {
    padding: 0 2.2rem 0 1.7142rem;
  }
`;

export const HeaderBlock = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 114.2857rem;
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

const Section = styled("section")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  width: 50%;
  @media (max-width: 440px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const LeftSide = styled(Section)`
  color: #fff;
  @media (max-width: 440px) {
    order: 2;
    padding-bottom: 3rem;
  }
`;

export const LeftSideContent = styled("div")`
  margin-right: 4rem;
  @media (max-width: 992px) {
    margin-right: 3rem;
  }
  @media (max-width: 440px) {
    margin-right: 0;
  }
`;

export const RightSide = styled(Section)`
  position: relative;
  @media (max-width: 440px) {
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export const Title = styled(H1)`
  margin-top: 1rem;
  @media (max-width: 440px) {
    margin: 0.6rem 0 0.4rem 0;
  }
`;

export const Description = styled(Paragraph)`
  @media (max-width: 440px) {
    display: none;
  }
`;

export const Badge = styled("div")`
  display: inline-block;
  padding: 0.4285rem 1.5rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 0.2857rem;
  background-color: rgba(255, 255, 255, 0.25);
  @media (max-width: 768px) {
    padding: 0.1428rem 0.66rem;
    font-size: 0.8571rem;
  }
  @media (max-width: 440px) {
    padding: 0 0.44rem;
    font-size: 0.7142rem;
  }
`;

const styles = css`
  .leftSide {
    opacity: 0;
    animation-delay: 200ms;
    animation-fill-mode: forwards;
  }
  .projectLink {
    font-size: 1.2857rem;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 576px) {
      font-size: 0.8571rem;
    }
  }
  .scrollDownButton {
    font-weight: 500;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 992px) {
      bottom: 1.4rem;
    }
    @media (max-width: 768px) {
      bottom: 1rem;
    }
    @media (max-width: 440px) {
      bottom: 0.4rem;
    }
  }
`;

export default styles;