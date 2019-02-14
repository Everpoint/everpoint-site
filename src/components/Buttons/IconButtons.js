import React from "react";
import styled from "astroturf";

import { Button } from "./Buttons";

export const IconButton = styled(Button)`
  padding: 0.4rem;
  width: 1.4285rem;
  height: 1.4285rem;
  box-sizing: content-box;
  transition: none;
`;

export const Hamburger = styled(IconButton)`
  background: url(../../assets/img/icons/burger-menu.svg) center center no-repeat;
  background-size: 1.4285rem 1rem;
  &.isOpen {
    background: url(../../assets/img/icons/close-menu.svg) center center no-repeat;
    background-size: 1.4285rem 1rem;
  }
`;

export const IconBtn = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
