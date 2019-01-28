import styled, { css } from "astroturf";

export const BnBlock = styled("div")`
  display: flex;
  margin-bottom: 2.2rem;
  img {
    width: 4.6rem;
    height: 4.6rem;
    margin-right: 2.2857rem;
  }
  h2 {
    display: flex;
    align-items: center;
    height: 4.6rem;
    margin-bottom: 0;
  }
  @media (max-width: 991px) {
    img {
      width: 3.8rem;
      height: 3.8rem;
      margin-right: 1rem;
    }
    h2 {
      height: 3.8rem;
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 0;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 0.4rem;
    }
    figure {
      margin: 0 0 -0.4rem 0;
    }
    h2 {
      height: 3rem;
    }
  }
`;

export const WithVideoContent = styled("div")`
  max-width: 38.5714rem;
  p,
  ul {
    &:last-child {
      margin-bottom: 11%;
    }
  }
`;

const styles = css`
  .bnWithVideo {
    @media (min-width: 1200px) {
      padding: 0 5.7142rem 0 5.7142rem;
    }
    article {
      display: flex;
      align-items: center;
      max-width: 86.2857rem;
    }
    &.bnWithVideoLeft {
      article {
        > div {
          &:first-child {
            margin-right: 9rem;
          }
        }
        padding: 3.4rem 0 6rem 0;
      }
    }
    &.bnWithVideoRight {
      article {
        > div {
          &:first-child {
            margin-right: 8rem;
          }
        }
        padding: 6rem 0 0 4.4rem;
      }
    }
  }
  .gradient {
    position: relative;
    &:before {
      pointer-events: none;
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }
  .gradientToTop {
    &:before {
      background-image: linear-gradient(to top, #e0f0f6, #fff);
    }
  }
  .gradientToBottom {
    &:before {
      background-image: linear-gradient(to bottom, #e0f0f6, #fff);
    }
  }
`;

export default styles;