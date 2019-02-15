import { css } from "astroturf";

export const enterTimeout = 200;
export const exitTimeout = 400;

export const transition = css`
  .entered {
    transition-duration: ${enterTimeout}ms;
    transition-timing-function: ease-in;
    transition-property: transform, opacity;
  }
  .exiting {
    transition-duration: ${exitTimeout}ms;
    transition-timing-function: ease-out;
    transition-property: transform, opacity;
  }
`;

export const fade = css`
  .entering {
    opacity: 0;
  }
  .entered {
    opacity: 1;
  }
  .exiting {
    opacity: 0;
  }
`;

const styles = css`
  .fadeIn {
    animation-name: fadeIn;
    animation-duration: 200ms;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  .fadeOut {
    animation-name: fadeOut;
    animation-duration: 200ms;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

export default styles;
