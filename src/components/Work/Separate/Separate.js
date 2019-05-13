import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { isElementInViewport } from "../../../utils/dom";
import { ScrollbarConsumer } from "../../../components/ScrollbarProvider/ScrollbarProvider";
import styles, { Container, Svg, Line, LineOdd } from "./styles";

export class SeparateBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
    offset: PropTypes.number,
    odd: PropTypes.bool,
  };

  static defaultProps = {
    fullWidth: 618,
    offset: 0,
  };

  state = {
    width: 0,
    scale: 1,
  };

  container = null;

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  shouldComponentUpdate() {
    const vh = window.innerHeight;

    return (
      this.container &&
      isElementInViewport({
        el: this.container,
        offsetY: this.container.offsetHeight,
        offsetTop: vh / 2,
      })
    );
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop, elementYPosition, fullWidth } = this.props;
    const svg = this.container;

    if (prevScrollTop !== scrollTop && svg) {
      const percent = elementYPosition({ element: svg, percent: true }) * 2;
      const width = (fullWidth * percent) / 100;

      this.setState({ width: Math.round(width) });
    }
  }

  onResize = () => {
    this.setState({ scale: this.getScale() });
  };

  onRef = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  getScale = () => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (vw <= 991) {
      return 0.647;
    } else if (vw <= 1199) {
      return 0.7956;
    } else {
      return 1;
    }
  };

  render() {
    const { width, scale } = this.state;
    const { fullWidth: fullWidthWithProps, odd, Element, offset } = this.props;
    const fullWidth = fullWidthWithProps;

    return (
      <Container ref={this.onRef} style={{ transform: `scale(${scale})` }}>
        <Svg
          viewBox="0 0 900 81"
          width={900}
          height={81}
          x={0}
          y={0}
          xmlns="http://www.w3.org/2000/svg"
        >
          {odd ? <LineOdd width={width} offset={offset} /> : <Line width={width} offset={offset} />}
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
