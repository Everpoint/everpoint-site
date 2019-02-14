import React, { Component } from "react";

import { Viewport, Container } from '../../styles/cms';

export class PreviewContainer extends Component {
  state = {
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.updateSize();
    this.interval = setInterval(() => this.updateSize(), 444);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateSize = () => {
    const { width, height } = this.state;
    if (this.container) {
      const { width: w, height: h } = this.container.getBoundingClientRect();
      if (width !== w || height !== h) {
        this.setState({ width: Math.round(w), height: Math.round(h) });
      }
    }
  };

  onRef = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { width, height } = this.state;
    const { children, ...props } = this.props;

    return (
      <>
        <Viewport>
          {width}x{height}
        </Viewport>
        <Container ref={this.onRef} {...props}>
          {children}
        </Container>
      </>
    );
  }
}
