import React, { Component } from "react";
import PropTypes from "prop-types";

import { SvgWrapper } from "./styles";
import { getElementWidthAndHeight } from "../../utils/dom";
import { getSVGBackgroundByIndex } from "./getBackground";

export class Resizer extends Component {
  static propTypes = {
    transitionEnd: PropTypes.bool,
    isAboutPage: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  shouldComponentUpdate({ transitionEnd: nextSransitionEnd }, nextState) {
    const { transitionEnd } = this.props;

    return transitionEnd !== nextSransitionEnd;
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
    }
  };

  onRef = ref => {
    if (ref) {
      this.wrapper = ref;
    }
  };

  render() {
    const { transitionEnd, isAboutPage } = this.props;

    return (
      <SvgWrapper ref={this.onRef}>
        {getSVGBackgroundByIndex({
          isAboutPage,
          style: { visibility: transitionEnd ? "visible" : "hidden" },
        })}
      </SvgWrapper>
    );
  }
}
