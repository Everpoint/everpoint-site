import React, { Component } from "react";
import PropTypes from "prop-types";

import { ScrollbarConsumer } from "../../../components/ScrollbarProvider/ScrollbarProvider";
import { Svg, Line, LineOdd } from "./styles";

export class SeparateBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
    odd: PropTypes.bool,
  };

  static defaultProps = {
    fullWidth: 618,
  };

  state = {
    width: 0,
  };

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop, elementYPosition, fullWidth } = this.props;
    const svg = this.svg;

    if (prevScrollTop !== scrollTop && svg) {
      const percent = elementYPosition({ element: svg, percent: true }) * 2;
      const width = (fullWidth * percent) / 100;

      this.setState({ width: Math.round(width) });
    }
  }

  onRef = ref => {
    if (ref) {
      this.svg = ref;
    }
  };

  render() {
    const { width } = this.state;
    const { fullWidth, odd } = this.props;
    const strokeOpacity = width > fullWidth / 2 ? "0.25" : "0";

    return (
      <Svg
        ref={this.onRef}
        viewBox="0 0 900 81"
        width={900}
        height={81}
        x={0}
        y={0}
        xmlns="http://www.w3.org/2000/svg"
      >
        {odd ? <LineOdd width={width} /> : <Line width={width} />}
      </Svg>
    );
  }
}

export const Separate = props => (
  <ScrollbarConsumer>
    {({ scrollTop, elementYPosition }) => (
      <SeparateBase scrollTop={scrollTop} elementYPosition={elementYPosition} {...props} />
    )}
  </ScrollbarConsumer>
);
