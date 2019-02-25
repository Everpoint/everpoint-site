import React, { Component } from "react";

import withProvider from "../../hoc/withProvider";
import { SvgWrapper } from "./styles";
import { getElementWidthAndHeight } from "../../utils/dom";

export class CoveringImageBase extends Component {
  state = {
    isResized: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  shouldComponentUpdate({ transitionEnd: nextTransitionEnd }, { isResized: nextIsResized }) {
    const { transitionEnd } = this.props;
    const { isResized } = this.state;

    return transitionEnd !== nextTransitionEnd || isResized !== nextIsResized;
  }

  onResize = () => {
    const ref = this.wrapper;
    if (ref) {
      const child = ref.firstElementChild || ref.firstChild;
      const isSvg = child instanceof SVGElement;
      const isImg = child instanceof HTMLImageElement;

      if (isSvg || isImg) {
        const viewportWidth = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0,
        );

        const viewportHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0,
        );

        const dispRatio = viewportHeight > 0 ? viewportWidth / viewportHeight : 1.0;

        const { width, height } = getElementWidthAndHeight(child);

        const imgRatio = height > 0 ? width / height : 1.0;

        if (imgRatio > dispRatio) {
          child.style.width = "auto";
          child.style.height = "100%";
        } else {
          child.style.width = "100%";
          child.style.height = "auto";
        }

        this.setState({ isResized: true });
      } else {
        console.error("CoveringImage: element is not image");
      }
    }
  };

  onRef = ref => {
    if (ref) {
      this.wrapper = ref;
    }
  };

  render() {
    const { isResized } = this.state;
    const { children, transitionEnd } = this.props;

    return (
      <SvgWrapper
        style={{ visibility: isResized && transitionEnd ? "visible" : "hidden" }}
        ref={this.onRef}
      >
        {children}
      </SvgWrapper>
    );
  }
}

export const CoveringImage = withProvider(CoveringImageBase);
