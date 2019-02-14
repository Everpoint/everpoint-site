import { css } from "astroturf";

const styles = css`
  .jobsContainer {
    > section:first-child {
      flex-shrink: 1;
      padding-right: 4rem;
    }
    > section:last-child {
      position: relative;
      height: 25rem;
      flex-shrink: 1;
      > div {
        position: relative;
        height: 100%;
      }
    }
    @media (max-width: 1314px) {
      > section:last-child {
        height: 27.4rem;
      }
    }
    @media (max-width: 1199px) {
      justify-content: flex-start;
      > section:first-child {
        padding-right: 2rem;
        ul {
          margin-right: 0;
        }
      }
      > section:last-child {
        height: 22rem;
        display: flex;
        justify-content: center;
        flex-grow: 1;
        padding: 0;
      }
    }

    @media (min-width: 1024px) and (max-width: 1024px) {
      h2 {
        max-width: 14rem;
      }
      > section:last-child {
        justify-content: flex-end;
      }
    }

    @media (max-width: 991px) {
      > section:last-child {
        height: 100%;
        max-height: 22.4285rem;
        > div {
          width: 100%;
          max-width: 20rem;
        }
      }
    }

    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      > section:first-child {
        h2 {
          font-size: 1.2857rem;
          margin-bottom: 1rem;
        }
        ul {
          &:first-child {
            margin-bottom: 1.8rem;
          }
          li {
            margin-bottom: 0.4rem;
            a {
              font-size: 0.8571rem;
            }
          }
        }
      }
    }

    @media (max-width: 812px) and (orientation: landscape) {
      justify-content: space-between;
      > section:last-child {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 6rem;
        max-width: 17.1428rem;
        width: 100%;
        height: 100%;
        max-height: 16rem;
        margin-bottom: 0;
        align-self: center;
        > div {
          align-self: center;
          max-height: 17.4rem;
          max-width: 17.1428rem;
        }
      }
    }

    @media (max-width: 767px) and (orientation: portrait) {
      flex-direction: column;
      justify-content: space-between;
      > section:first-child {
        position: relative;
        width: calc(100% + 1.7142rem * 2);
        left: -1.7142rem;
        overflow-x: auto;
        align-self: flex-start;
        padding-right: 0;
        &::-webkit-scrollbar {
          display: none;
        }
        menu {
          margin: 0 1.7142rem 0 1.7142rem;
          display: flex;
          @media (max-height: 500px) {
            margin-top: 0;
          }
          > ul {
            h2 {
              white-space: nowrap;
              margin-bottom: 0.4rem;
            }
            li {
              margin-bottom: 0;
              a {
                white-space: nowrap;
              }
            }

            &:first-child {
              margin-bottom: 0;
              margin-right: 2.8571rem;
            }
            &:last-child {
              padding-right: 1.7142rem;
            }
          }
        }
      }
      > section:last-child {
        width: 100%;
        flex-grow: 0;
        margin-bottom: 3rem;
        max-height: 18.4444rem;
        max-width: 20.1428rem;
        @media (max-height: 490px) {
          margin-bottom: 2.4rem;
        }
        > div {
          max-width: none;
        }
      }
    }
    @media (max-height: 320px) {
      position: static;
      > section:first-child {
        margin-bottom: 4rem;
        h2 {
          font-size: 0.8571rem;
          margin-bottom: 0;
        }
        ul {
          &:first-child {
            margin-bottom: 1rem;
          }
          li {
            margin-bottom: 0;
            a {
              font-size: 0.7142rem;
            }
          }
        }
      }
      > section:last-child {
        max-height: calc(100vh - 4rem);
        max-height: calc(var(--vh, 1vh) * 100 - 4rem);
      }
    }
  }
`;

export default styles;
