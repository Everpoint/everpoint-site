import styled from "astroturf";
import cn from "classnames";

import { fade, slideUp, transition } from "../Transition/animation";

export const animation = status => cn(slideUp[status], fade[status], transition[status]);

export const Side = styled("section")`
  will-change: transform, opacity;
`;
