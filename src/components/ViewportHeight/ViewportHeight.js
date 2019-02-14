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

  timer = false;

  componentDidMount() {
    const { isMobile } = this.state;

    if (isMobile) {
      window.addEventListener("orientationchange", this.onOrientationChange);
    }

    this.onResize();
    this.onOrientationChange();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    const { isMobile } = this.state;

    if (isMobile) {
      window.removeEventListener("orientationchange", this.onOrientationChange);
    }

    window.removeEventListener("resize", this.onResize);
  }

  onOrientationChange = () => {
    clearTimeout(this.timer);

    this.setState({
      resizeIsPossible: true,
    });

    this.timer = setTimeout(() => {
      this.setState({
        resizeIsPossible: false,
      });
    }, 1000);
  };

  onResize = () => {
    const { isMobile, resizeIsPossible } = this.state;
    const {
      parsedResult: {
        browser: { name },
      },
    } = browser();

    if (!resizeIsPossible && isMobile) {
      return;
    }

    const vh =
      name !== "Safari" ? document.documentElement.clientHeight * 0.01 : window.innerHeight * 0.01;

    const axis = Math.abs(window.orientation);

    if (axis === 90 && name === "Safari") {
      window.scrollTo(0, 1);
    }

    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const setVhPropertyFromOrientationChanged = () => {
      const timeout = 120;
      return new window.Promise(resolve => {
        const go = (i, height0) => {
          window.innerHeight !== height0 || i >= timeout
            ? resolve()
            : window.requestAnimationFrame(() => go(i + 1, height0));
        };
        go(0, window.innerHeight);
      });
    };

    setVhPropertyFromOrientationChanged().then(() =>
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`),
    );
  };

  render() {
    return null;
  }
}
