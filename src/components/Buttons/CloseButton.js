import React from "react";

import { IconBtn } from "./IconButtons";
import { ReactComponent as Close } from "../../assets/img/icons/close.svg";

export const CloseButton = ({ ...props }) => {
  return (
    <IconBtn {...props}>
      <Close />
    </IconBtn>
  );
};
