import { Component } from "react";
import debounce from "lodash/debounce";

import { isMobile, isTablet } from "../../utils/browser";

export class ViewportHeight extends Component {
  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 200);
  }

  componentDidMount() {
    this.onResize();

    if (isMobile() || isTablet()) {
      window.addEventListener("orientationchange", this.onResize);
    } else {
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.onResize);
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const vh = window.innerHeight * 0.01;

    const axis = Math.abs(window.orientation);

    if (axis === 90 && (isMobile() || isTablet())) {
      window.scrollTo(0, 1);
    }

    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  render() {
    return null;
  }
}
