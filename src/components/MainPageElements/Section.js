import styled from "astroturf";
import cn from "classnames";

import { fade, slideUp, slideDown, transition } from "../Transition/animation";

export const animation = (status, direction) => {
  const slide = direction > 0 ? slideUp[status] : slideDown[status];
  return cn(slide, fade[status], transition[status]);
};

export const Side = styled("section")`
  will-change: transform, opacity;
`;
