import styled, { css } from "astroturf";
// https://github.com/idiotWu/react-smooth-scrollbar
// API https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md
import Scrollbar from "react-smooth-scrollbar";

export const ScrollBar = styled(Scrollbar)`
  width: 100%;
  height: 100%;
  :global(.scroll-content) {
    width: 100%;
    height: 100%;
    will-change: transform;
    > div:first-child {
      width: 100%;
      height: 100%;
    }
  }

  :global(.scrollbar-track) {
    display: none !important;
  }
`;

const styles = css`
  .swiper {
    width: 100%;
    height: 100%;
  }
`;

export default styles;
