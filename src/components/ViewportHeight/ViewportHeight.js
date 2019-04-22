import React, { Component } from "react";
import debounce from "lodash/debounce";

import { isMobile, isTablet } from "../../utils/browser";

export class ViewportHeight extends Component {
  constructor(props) {
    super(props);
    this.onResizeDebounced = debounce(this.onResize, 200);
  }

  componentDidMount() {
    this.onResize();

    if (isMobile() || isTablet()) {
      window.addEventListener("orientationchange", this.onResize);
      window.addEventListener("orientationchange", this.onResizeDebounced);
    } else {
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    if (isMobile() || isTablet()) {
      window.removeEventListener("orientationchange", this.onResize);
      window.removeEventListener("orientationchange", this.onResizeDebounced);
    } else {
      window.removeEventListener("resize", this.onResize);
    }
  }

  onResize = () => {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  render() {
    return <div style={{ display: "none" }} />;
  }
}
