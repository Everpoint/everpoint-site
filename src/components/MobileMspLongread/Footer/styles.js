import styled from "astroturf";

export const FooterContainer = styled("div")`
  overflow: hidden;
  position: relative;
  > article:first-child {
    text-align: center;
    pointer-events: none;
    width: 100%;
    top: 0;
    left: 50%;
    height: 17.8571rem;
    transform: translateX(-50%);
    position: absolute;
    p {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media (max-width: 1199px) {
    margin-top: 4.4rem;
    > article:first-child {
      max-width: 54rem;
    }
  }
  @media (max-width: 991px) {
    > article:first-child {
      max-width: 48rem;
      height: 12.8571rem;
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    > article:first-child {
      p {
        padding: 0 1.4285rem;
      }
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    > article:first-child {
      height: 9rem;
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-top: 0.4rem;
    > article:first-child {
      top: 0;
      left: 0;
      transform: none;
      height: 12.8571rem;
    }
  }
`;

export const Mobiles = styled("div")`
  display: flex;
  @media (max-width: 767px) and (orientation: portrait) {
    flex-direction: column;
  }
`;

export const Store = styled("div")`
  display: flex;
  > a:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    a {
      width: 7.2142rem;
      height: 2.0714rem;
      &:first-child {
        margin-right: 0.4rem;
      }
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-bottom: 2rem;
  }
`;

const Side = styled("div")`
  transition: background-color 200ms ease-in;
  background-color: #e0f0f6;
  width: 50%;
  display: flex;
  height: calc(40.7142rem + 17.8571rem);
  > article {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 17.8571rem;
    width: 100%;
    margin: 0;
    max-width: 42.8571rem;
    h3 {
      text-align: center;
    }
    img {
      position: absolute;
      bottom: 0;
      left: 50%;
      max-width: 30.5714rem;
      transition: transform 200ms ease-in;
    }
  }
  @media (hover: hover) {
    &:hover {
      background-color: #d2e6ed;
    }
  }
  @media (max-width: 1199px) {
    > article {
      h3 {
        font-size: 1.4285rem;
      }
    }
    height: calc(37.7142rem + 17.8571rem);
  }
  @media (max-width: 991px) {
    > article {
      padding-top: 12.8571rem;
      h3 {
        display: flex;
        align-items: center;
        height: 3.4rem;
      }
      img {
        max-width: 19.5714rem;
      }
    }
    height: calc(26.7142rem + 17.8571rem);
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    > article {
      h3 {
        font-size: 1.2857rem;
      }
    }
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    > article {
      img {
        max-width: 13.4rem;
      }
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    > article {
      padding-top: 9rem;
    }
    height: calc(25rem + 9rem);
  }
  @media (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    > article {
      h3 {
        height: auto;
      }
    }
  }
`;

export const LeftSide = styled(Side)`
  justify-content: flex-end;
  img {
    transform: translate(-50%, 28%);
  }
  @media (hover: hover) {
    &:hover {
      img {
        transform: translate(-50%, calc(28% - 5.7142rem));
      }
    }
  }
  @media (max-width: 991px) {
    img {
      transform: translate(-50%, 0);
    }
    @media (hover: hover) {
      &:hover {
        img {
          transform: translate(-50%, 0);
        }
      }
    }
  }
  &.isMobilePlatform {
    background-color: #e0f0f6;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    > article {
      padding-top: 0;
      justify-content: flex-end;
      img {
        position: static;
        transform: none;
      }
    }
    height: 36rem;
  }
`;

export const RightSide = styled(Side)`
  justify-content: flex-start;
  img {
    transform: translate(-50%, 59%);
  }
  @media (hover: hover) {
    &:hover {
      img {
        transform: translate(-50%, calc(59% - 5.7142rem));
      }
    }
  }
  @media (max-width: 991px) {
    h3 {
      max-width: 17rem;
    }
    img {
      transform: translate(-50%, calc(59% - 5.7142rem));
    }
  }
  &.isMobilePlatform {
    background-color: #d2e6ed;
  }
  @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
    img {
      transform: translate(-50%, calc(66% - 5.7142rem));
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    height: 24.4rem;
    > article {
      padding-top: 2rem;
      img {
        transform: translate(calc(-50% - 0.8rem), calc(66% - 5.7142rem));
      }
    }
  }
`;
