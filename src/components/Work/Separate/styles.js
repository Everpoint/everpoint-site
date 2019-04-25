import styled, { css } from "astroturf";
import withProps from "recompose/withProps";

export const Container = styled("div")`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 5.8571rem;
  svg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    * {
      transition: stroke-opacity 400ms ease-in, fill-opacity 400ms ease;
    }
  }
`;

export const Svg = styled("svg")`
  display: block;
  fill: none;
  margin: 0 auto;
`;

export const paths = {
  stroke: "#262C37",
  strokeDasharray: "4,4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeOpacity: 0.25,
  strokeWidth: 2,
};

export const Line = withProps(({ width, offset }) => ({
  ...paths,
  d: `M128 1v${Math.min(width, 40)}h${width > 40 ? Math.min(width, 269 - offset) : 0}M${503 +
    offset} 41h${width > 309 ? Math.min(width - 309, 269 - offset) : 0}v${
    width > 578 ? Math.min(width - 578, 618) : 0
  }`,
}))(styled("path")``);

export const LineOdd = withProps(({ width, offset }) => ({
  ...paths,
  d: `M772 1v${Math.min(width, 40)}h-${width > 40 ? Math.min(width, 270 - offset) : 0}M${397 -
    offset} 41h-${width > 309 ? Math.min(width - 309, 269 - offset) : 0}v${
    width > 578 ? Math.min(width - 578, 618) : 0
  }`,
}))(styled("path")``);

const styles = css`
  .isHidden {
    path {
      stroke-opacity: 0;
    }
    circle {
      fill-opacity: 0;
    }
  }
`;

export default styles;
