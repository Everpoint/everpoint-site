import styled, { css } from "astroturf";

export const NativeScrollbar = styled("div")`
  :global(.scrollbar-track) {
    display: none !important;
  }
`;

const styles = css`
  .swiper {
    width: 100%;
    height: 100%;
    &.native {
      height: auto;
    }
  }
`;

export default styles;
