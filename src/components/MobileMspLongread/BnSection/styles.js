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
  @media (max-width: 1199px) {
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
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
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
  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 1rem;
    figure {
      h2 {
        height: auto;
        max-width: 16rem;
        margin: 0.7rem 0 1rem 0;
      }
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
  @media (max-width: 1199px) {
    max-width: 26rem;
    p,
    ul {
      &:last-child {
        margin-bottom: 14%;
      }
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    h3 {
      display: none;
    }
    > p:nth-child(2) {
      margin-top: -1rem;
    }
    p,
    ul {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const styles = css`
  .bnWithVideo {
    article {
      display: flex;
      align-items: center;
      justify-content: space-around;
      max-width: 86.2857rem;
      > h3:first-child {
        display: none;
      }
    }
    &.bnWithVideoLeft {
      article {
        padding: 0 0 6rem 0;
      }
    }
    &.bnWithVideoRight {
      article {
        > div {
          &:first-child {
            margin-right: 2.4rem;
          }
        }
        padding: 0 0 0 4.4rem;
      }
    }
    @media (min-width: 1200px) {
      padding: 0 5.7142rem 0 5.7142rem;
    }
    @media (max-width: 1199px) {
      padding-top: 0;
      padding-bottom: 0;
      &.bnWithVideoLeft,
      &.bnWithVideoRight {
        article {
          justify-content: space-between;
          padding: 1.6rem 0 0 0;
        }
      }
    }
    @media (max-width: 991px) {
      &.bnWithVideoLeft,
      &.bnWithVideoRight {
        article {
          padding: 0;
        }
      }
    }
    @media (max-width: 812px) and (orientation: landscape) {
      padding-top: 2.2rem;
      article {
        align-items: flex-start;
      }
      &.bnWithVideoLeft {
        article {
          > div:last-child {
            margin-left: 2rem;
          }
        }
      }

      &.bnWithVideoRight {
        article {
          > div:last-child {
            margin-right: 2rem;
          }
        }
      }
    }
    @media (max-width: 767px) and (orientation: portrait) {
      padding-bottom: 2.6rem;
      > article {
        flex-direction: column;
        > h3:first-child {
          display: block;
          align-self: flex-start;
          margin-bottom: 0.7rem;
        }
      }
      &.bnWithVideoRight {
        article {
          > div {
            &:first-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  .firstBlockWithVideos {
    margin-top: 5.7142rem;
    padding: 7.4rem 0 0 0;
    background-color: rgba(203, 229, 240, 0.3);
    @media (max-width: 991px) {
      margin-top: 0;
      padding: 4.4rem 0 0 0;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      padding: 2.4rem 0 0 0;
    }
  }
  .top1Paragraph {
    @media (max-width: 991px) {
      padding-bottom: 3rem;
    }
    @media (max-width: 812px) and (orientation: landscape) {
      padding-bottom: 0;
      margin-bottom: 1.44rem;
    }
  }
  .mobilePortraitOrder1 {
    @media (max-width: 767px) and (orientation: portrait) {
      order: 1;
    }
  }
  .mobilePortraitOrder2 {
    @media (max-width: 767px) and (orientation: portrait) {
      order: 2;
    }
  }
`;

export default styles;
