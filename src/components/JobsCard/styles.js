import styled, { css } from "astroturf";

import { Swiper } from "../../components/Swiper/Swiper";

export const JobsCardContainer = styled("section")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  @media (min-width: 1001px) {
    display: none;
  }
  &.disableTransition {
    transition: none;
    opacity: 1;
    transform: none;
  }
`;

export const JobsCardSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;

const styles = css``;

export default styles;
