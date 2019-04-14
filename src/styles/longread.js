import { css } from "astroturf";

const styles = css`
  .scrollbar {
    width: 100%;
    height: 100%;
  }

  .londreadHtmlMobile {
    height: auto;
    overflow-y: auto;
  }

  .longreadHtml {
  }

  .londreadBodyMobile {
    height: auto;
    overflow: visible;
    :global(#___gatsby) {
      height: auto;
      > div:first-child {
        height: auto;
      }
    }
  }

  .longreadBody {
  }
`;

export default styles;
