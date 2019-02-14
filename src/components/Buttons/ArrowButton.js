import React from "react";

import { IconBtn } from "./IconButtons";
import { ReactComponent as Arrow } from "../../assets/img/icons/arrow.svg";

export const ArrowButton = ({ children, ...props }) => {
  return (
    <IconBtn {...props}>
      <Arrow />
      <span>
        {children}
      </span>
    </IconBtn>
  );
};
