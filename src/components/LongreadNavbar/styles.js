import styled, { css } from "astroturf";

export const LongreadNavbarContainer = styled("nav")`
  z-index: 10;
  width: 100%;
  top: 0;
  position: fixed;
  height: 5.7142rem;
  will-change: transform;
  transition: background 200ms linear;
  a,
  button {
    font-size: 1.0714rem;
    padding: 0.4rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    transition: color 200ms linear;
    font-weight: 600;
    text-decoration: none;
    svg {
      width: 100%;
      height: 100%;
      max-width: 1.1428rem;
      max-height: 1.1428rem;
      path {
        transition: all 200ms linear;
      }
    }
  }

  &.fixed {
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.05);
    background-color: #fff;
  }

  @media (max-width: 991px) {
    height: 4.7142rem;
  }

  @media (max-height: 700px) and (orientation: landscape) {
    height: 4.7142rem;
  }

  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    height: 3.5rem;
    a,
    button {
      font-size: 0.9285rem;
      svg {
        max-width: 0.8rem;
        max-height: 0.8rem;
      }
    }
  }
`;

const styles = css`
  .longreadCloseBtn {
    cursor: pointer;
    border: none;
    outline: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  a.arrowBtn {
    top: 50%;
    transform: translateY(-50%);
    width: auto;
  }

  .leftArrowBtn {
    left: 3.4rem;
    svg {
      margin-right: 0.6rem;
    }
  }
  .rightArrowBtn {
    right: 3.4rem;
    svg {
      margin-left: 0.6rem;
      transform: rotate(180deg);
    }
  }

  @media (max-width: 1199px) {
    .leftArrowBtn {
      left: 1.8rem;
    }
    .rightArrowBtn {
      right: 1.8rem;
    }
  }

  @media (max-width: 767px) and (orientation: portrait) {
    a.arrowBtn {
      font-size: 0;
    }
    .leftArrowBtn {
      left: 1rem;
      svg {
        margin-right: 0;
      }
    }
    .rightArrowBtn {
      right: 1rem;
      svg {
        margin-left: 0;
      }
    }
  }
`;

export default styles;
