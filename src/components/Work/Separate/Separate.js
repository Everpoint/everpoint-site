import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ScrollbarConsumer } from "../../../components/ScrollbarProvider/ScrollbarProvider";
import styles, { Container, Svg, Line, LineOdd } from "./styles";

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
    const { fullWidth, odd, Element } = this.props;

    return (
      <Container>
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
        {Element && <Element className={cn({ [styles.isHidden]: width < fullWidth / 2 })} />}
      </Container>
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
