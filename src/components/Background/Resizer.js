import React, { Component } from "react";

import { SvgWrapper } from "./styles";
import { getElementWidthAndHeight } from "../../utils/dom";
import { getSVGBackgroundByIndex } from "./getBackground";

export class Resizer extends Component {
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

  onResize = () => {
    const ref = this.wrapper;
    if (ref) {
      const child = ref.firstElementChild || ref.firstChild;

      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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
    }
  };

  onRef = ref => {
    if (ref) {
      this.wrapper = ref;
    }
  };

  render() {
    const { isResized } = this.state;

    return (
      <SvgWrapper style={{ visibility: isResized ? "visible" : "hidden" }} ref={this.onRef}>
        {getSVGBackgroundByIndex()}
      </SvgWrapper>
    );
  }
}
