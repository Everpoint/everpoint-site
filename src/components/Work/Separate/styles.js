import styled from "astroturf";
import withProps from "recompose/withProps";

export const Container = styled("div")`
  position: relative;
  width: 100%;
  height: 5.7142rem;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 400ms ease;
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

export const Line = withProps(({ width }) => ({
  ...paths,
  d: `M128 1v${Math.min(width, 40)}h${width > 40 ? Math.min(width, 269) : 0}M503 41h${
    width > 309 ? Math.min(width - 309, 269) : 0
  }v${width > 578 ? Math.min(width - 578, 618) : 0}`,
}))(styled("path")``);

export const LineOdd = withProps(({ width }) => ({
  ...paths,
  d: `M772 1v${Math.min(width, 40)}h-${width > 40 ? Math.min(width, 270) : 0}M397 41h-${
    width > 309 ? Math.min(width - 309, 269) : 0
  }v${width > 578 ? Math.min(width - 578, 618) : 0}`,
}))(styled("path")``);
