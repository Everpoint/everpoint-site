import styled, { css } from "astroturf";

import { Link as ContactLink } from "../components/Atoms/Atoms";

export const ContactsLeftSide = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    h1 {
      margin-bottom: 0.4rem;
    }
  }
`;

export const Link = styled(ContactLink)`
  @media (max-width: 991px) {
    margin-bottom: 0.2rem;
  }
`;

export const SocialBlock = styled("div")`
  @media (max-width: 812px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    a {
      margin-top: 0.4rem;
    }
  }
`;

export const TelegramBtnContainer = styled("div")`
  &.disableTransition {
    transition: none;
  }
`;

export const BtnGroup = styled("div")`
  display: flex;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  button {
    &:first-child {
      margin-right: 0.7142rem;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 767px) and (max-height: 275px) and (orientation: landscape),
    only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    top: 3.4rem;
  }
`;

export const SocialLink = styled("a")`
  opacity: 0.25;
  display: inline-block;
  cursor: pointer;
  width: 1.7142rem;
  height: 1.7142rem;
  margin-right: 1rem;
  background-repeat: no-repeat;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1199px) {
    width: 1.14285rem;
    height: 1.14285rem;
  }
  @media (max-width: 991px) {
    margin-top: 1.7142rem;
  }
`;

const styles = css`
  .willChangeContactsLeftSideClassName {
    @media (max-width: 940px) {
      flex-shrink: 1;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      align-self: flex-end;
      padding-bottom: 1rem;
    }
  }
  .willChangeRightSideClassName {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-end;
    z-index: 2;
    height: 15rem;
    button {
      &:first-child {
        margin-right: 0.7142rem;
      }
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      display: none;
    }
  }
  .contactsRightSide {
    display: flex;
    align-items: flex-end;
  }
  .address {
    cursor: default;
    &:hover {
      color: #262c37;
    }
    @media (min-width: 992px) {
      br {
        display: none;
      }
    }
    @media (max-width: 991px) {
      margin-bottom: 0.4rem;
    }
  }
  .telegramBtn {
    background-color: #90c53d;
    position: absolute;
    right: 6rem;
    bottom: 4.5714rem;
    @media (max-width: 1024px) {
      right: 3.5714rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      right: 1.7857rem;
      bottom: 1.4142rem;
    }
  }
`;

export default styles;
