import { Component } from "react";

import { isMobile, browser } from "../../utils/browser";

export class ViewportHeight extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { isMobile: prevIsMobile } = prevState;

    if (prevIsMobile === null && typeof window === "object") {
      return {
        isMobile: isMobile(),
      };
    }

    return null;
  }

  state = {
    isMobile: null,
    resizeIsPossible: true,
  };

  timer = 0;
  interval = 0;
  vh = 0;

  componentDidMount() {
    const { isMobile } = this.state;

    if (isMobile) {
      window.addEventListener("orientationchange", this.onOrientationChange);
      this.onOrientationChange();
    } else {
      this.onResize();
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    const { isMobile } = this.state;

    if (isMobile) {
      clearTimeout(this.timer);
      clearTimeout(this.interval);
      window.removeEventListener("orientationchange", this.onOrientationChange);
    } else {
      window.removeEventListener("resize", this.onResize);
    }
  }

  onOrientationChange = () => {
    clearTimeout(this.timer);
    clearTimeout(this.interval);

    this.setState({ resizeIsPossible: true });

    this.interval = setInterval(() => {
      this.onResize();
    }, 0);

    setTimeout(() => {
      this.destroyUpdateVh();
    }, 2000);
  };

  destroyUpdateVh = () => {
    this.setState({ resizeIsPossible: false });
    clearInterval(this.interval);
  };

  onResize = () => {
    const { isMobile, resizeIsPossible } = this.state;
    const {
      parsedResult: {
        browser: { name },
      },
    } = browser();

    const vh =
      name !== "Safari" ? document.documentElement.clientHeight * 0.01 : window.innerHeight * 0.01;

    if ((!resizeIsPossible && isMobile) || vh === this.vh) {
      return;
    }

    const axis = Math.abs(window.orientation);

    if (axis === 90 && isMobile) {
      window.scrollTo(0, 1);
    }

    this.vh = vh;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  render() {
    return null;
  }
}
