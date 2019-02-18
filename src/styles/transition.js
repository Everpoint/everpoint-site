import { css } from "astroturf";

export const transition = css`
  .entered {
    transition-duration: 200ms;
    transition-timing-function: linear;
    transition-property: transform, opacity;
  }
  .exiting {
    transition-duration: 200ms;
    transition-timing-function: linear;
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

export const slideUp = css`
  .entering {
    pointer-events: none;
    transform: translateY(40%);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(-40%);
  }
`;

export const slideDown = css`
  .entering {
    pointer-events: none;
    transform: translateY(-40%);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(40%);
  }
`;

export const slideLeft = css`
  .entering {
    pointer-events: none;
    transform: translateX(20%);
  }
  .entered {
    transform: translateX(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateX(-20%);
  }
`;

export const slideRight = css`
  .entering {
    pointer-events: none;
    transform: translateX(-20%);
  }
  .entered {
    transform: translateX(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateX(20%);
  }
`;

export const scrollScreenshotTransition = css`
  .entered {
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-property: transform, opacity;
  }
  .exiting {
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-property: transform, opacity;
  }
`;


export const scrollScreenshotTransitionNext = css`
  .entered {
    transition-delay: 400ms;
    transition-duration: 100ms;
    transition-timing-function: ease-in;
    transition-property: transform, opacity;
  }
  .exiting {
    transition-delay: 400ms;
    transition-duration: 100ms;
    transition-timing-function: ease-in;
    transition-property: transform, opacity;
  }
`;

export const screenshotSlideUp = css`
  .entering {
    pointer-events: none;
    transform: translateY(5rem);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(-5rem);
  }
`;

export const screenshotSlideDown = css`
  .entering {
    pointer-events: none;
    transform: translateY(-5rem);
  }
  .entered {
    transform: translateY(0px);
  }
  .exiting {
    pointer-events: none;
    transform: translateY(5rem);
  }
`;
