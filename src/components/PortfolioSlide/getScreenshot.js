import React from "react";
import cn from "classnames";

import { MultiScreenshots } from "./MultiScreenshots";
import { fade } from "../Transition/animation";

import { Screenshot, transition, slideLeft, slideRight } from "./styles";

export const getScreenshot = props => {
  const { screenshots, text, status, direction, disableTransition } = props;

  const animation = direction > 0 ? slideLeft[status] : slideRight[status];

  if (Array.isArray(screenshots)) {
    return (
      <MultiScreenshots
        disableTransition={disableTransition}
        className={cn(animation, fade[status], transition[status])}
        alt={text}
        screenshots={screenshots}
      />
    );
  } else {
    return (
      <Screenshot
        disableTransition={disableTransition}
        className={cn(animation, fade[status], transition[status])}
        src={screenshots}
        alt={text}
      />
    );
  }
};
