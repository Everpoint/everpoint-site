import styled from "astroturf";

import { Section as SectionUI } from "../styles";

export const Section = styled(SectionUI)`
  height: 37.2857rem;
  position: relative;
  padding-top: 2.4rem;
`;

export const Blur = styled("div")`
  pointer-events: none;
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 2.4rem;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  filter: blur(0);
`;
