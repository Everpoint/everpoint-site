import styled, { css } from "astroturf";
import Scrollbar from "react-smooth-scrollbar";

export const ScrollBarContainer = styled(Scrollbar)`
  > div {
    :global(.scroll-content) {
      will-change: transform;
    }
    :global(.scrollbar-track) {
      display: none !important;
    }
  }
  &.withScrollbar {
    > div {
      &:not(:first-child) {
        display: block !important;
      }
    }
  }
`;

const styles = css`
  .isMobile {
    > div {
      &:nth-child(2) {
        height: 4px;
        > div {
          height: inherit;
        }
      }
      &:nth-child(3) {
        width: 4px;
        > div {
          width: inherit;
        }
      }
    }
  }
`;

export default styles;
