import { Component } from "react";

import { isMobile, isTablet, browser } from "../../utils/browser";

export class ViewportHeight extends Component {
  state = {
    isMobile: null,
    resizeIsPossible: true,
  };

  timeout = 0;
  interval = 0;
  vh = 0;

  componentDidMount() {
    if (isMobile() || isTablet()) {
      window.addEventListener("orientationchange", this.onOrientationChange);
      this.onOrientationChange();
    } else {
      this.onResize();
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    clearTimeout(this.interval);
    window.removeEventListener("orientationchange", this.onOrientationChange);
    window.removeEventListener("resize", this.onResize);
  }

  onOrientationChange = () => {
    clearTimeout(this.timeout);
    clearTimeout(this.interval);

    this.setState({ resizeIsPossible: true });

    this.interval = setInterval(() => {
      this.onResize();
    }, 0);

    this.timeout = setTimeout(() => {
      this.destroyUpdateVh();
    }, 2000);
  };

  destroyUpdateVh = () => {
    this.setState({ resizeIsPossible: false });
    clearInterval(this.interval);
  };

  onResize = () => {
    const { resizeIsPossible } = this.state;
    const {
      parsedResult: {
        browser: { name },
      },
    } = browser();

    const vh =
      name !== "Safari" ? document.documentElement.clientHeight * 0.01 : window.innerHeight * 0.01;

    if ((!resizeIsPossible && (isMobile() || isTablet())) || vh === this.vh) {
      return;
    }

    const axis = Math.abs(window.orientation);

    if (axis === 90 && isMobile()) {
      window.scrollTo(0, 1);
    }

    this.vh = vh;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  render() {
    return null;
  }
}
