import styled from "astroturf";
import withProps from "recompose/withProps";

export const Svg = withProps(() => ({ viewBox: "0 0 900 81", x: 0, y: 0 }))(styled("svg")`
  fill: none;
`);

const paths = {
  stroke: "#262C37",
  strokeDasharray: "4,4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeOpacity: ".25",
};

export const FirstLine = withProps(({ height, width }) => ({
  ...paths,
  d: `M128 0v${height}h${width}`,
}))(styled("path")``);

export const SecondLine = withProps(({ height, width }) => ({
  ...paths,
  d: `M503 40h${width}v${height}`,
}))(styled("path")``);

export const LightBulb = withProps(({ strokeOpacity }) => ({
  ...paths,
  strokeOpacity,
  d:
    "M444.2 76h-4.272V57.79c0-1.132-.683-2.155-1.742-2.617-10.17-4.435-17.246-14.418-17.186-26.01.08-15.347 12.866-27.947 28.586-28.16C465.792.783 479 13.54 479 29.31c0 11.527-7.056 21.443-17.182 25.86-1.06.463-1.745 1.486-1.745 2.62V76H455.8l-2.614 3.634c-.22.229-.59.366-.987.366H447.8c-.397 0-.767-.137-.988-.366L444.2 76z",
}))(styled("path")`
  transition: stroke-opacity 500ms ease-in;
`);

export const Filament = withProps(({ strokeOpacity }) => ({
  ...paths,
  strokeDasharray: "0",
  strokeOpacity,
  d: "M444 32l3.223-3.711L450.447 32l3.473-4 3.08 3.546",
}))(styled("path")`
  transition: stroke-opacity 500ms ease-in;
`);
