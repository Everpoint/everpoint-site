import styled from "astroturf";

import { Hamburger } from "../Buttons/IconButtons";
import { Link } from "../../styles/contacts";

export const AddressWindowContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.95);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ModalLink = styled(Link)`
  margin-bottom: 1.4285rem;
`;

export const CloseBtn = styled(Hamburger)`
  top: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled("div")`
  text-align: center;
`;

export const AddressBtnContainer = styled("div")`
  display: flex;
  > section {
    margin-right: 4.5714rem;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: 812px) and (orientation: landscape),
    (max-width: 767px) and (orientation: portrait) {
      margin-right: 1.4rem;
      a {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;
