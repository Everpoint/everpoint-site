import React, { PureComponent } from "react";
import { Location } from "@reach/router";
import debounce from "lodash/debounce";
import { ScrollBar } from "./styles";

import { navigateTo, getRouteByLocation } from "../../routes";

import "./plugins/disableScrollByDirection";
import "./plugins/determineScrollingPlugin";

const ScrollContext = React.createContext();

export class ScrollProviderComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.onNavigateTo = debounce(this.onNavigateTo, 400);
    this.onResize = debounce(this.onResize, 400);
  }

  state = {
    scrollTop: 0,
    limitY: 0,
    coloredNav: false,
    currentRoute: null,
    direction: 1,
    transitionEnd: false,
    disableHover: false,
    mobileMenuIsOpen: false,
  };

  threshold = 0;
  scrolling = false;
  timer = 0;
  scrollbar = null;

  componentDidMount() {
    this.setCurrentRoute();
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname) {
      this.setCurrentRoute();
    }
  }

  onResize = () => {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewportWidth > 930) {
      this.setState({ mobileMenuIsOpen: false });
    }
  };

  setCurrentRoute = () => {
    const { location } = this.props;

    const currentRoute = getRouteByLocation(location);
    if (currentRoute) {
      this.setState({ currentRoute, coloredNav: false });
    } else {
      this.setState({ currentRoute: null, coloredNav: false });
    }
  };

  checkNavbarIntoContent = () => {
    const { currentRoute } = this.state;

    if (this.rightSide) {
      const headerHeight = 80;
      const { top } = this.rightSide.getBoundingClientRect();

      const scrollable = currentRoute && currentRoute.scrollable;

      if (top <= headerHeight && scrollable) {
        this.setState({
          coloredNav: true,
        });
      } else {
        this.setState({
          coloredNav: false,
        });
      }
    } else {
      this.setState({
        coloredNav: false,
      });
    }
  };

  onNavigateTo = direction => {
    const { navigate, location } = this.props;
    const { pathname } = location;
    const { currentRoute, scrollTop, limitY } = this.state;

    const scrollable = currentRoute && currentRoute.scrollable;

    if (scrollable && (scrollTop === 0 || limitY === scrollTop)) {
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );
      const ratio = viewportHeight / 3;
      const diff = Math.abs(this.threshold) - scrollTop;

      if (diff < ratio) {
        return;
      }
    }

    if (scrollable && scrollTop > 0 && limitY !== scrollTop) {
      return;
    }

    this.setState({
      transitionEnd: false,
      direction,
    });

    this.threshold = 0;
    navigateTo({ navigate, pathname, direction });
  };

  onScroll = e => {
    const { disableHover } = this.state;
    const { offset, limit } = e;
    const { y: offsetY } = offset;
    const { y: limitY } = limit;

    clearTimeout(this.timer);

    if (!disableHover) {
      this.setState({
        disableHover: true,
      });
    }

    this.timer = setTimeout(() => {
      this.setState({
        disableHover: false,
      });
    }, 200);

    this.setState(
      {
        scrollTop: offsetY,
        limitY,
      },
      () => {
        this.checkNavbarIntoContent();
      },
    );
  };

  onWheel = e => {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    let deltaY = e.deltaY;

    if (isFirefox) {
      deltaY = deltaY * 28;
    }

    this.threshold = this.threshold + deltaY;
    let direction = 1;

    if (deltaY < 0) {
      direction = -1;
    }

    this.setState({ direction });

    this.checkNavbarIntoContent();
    this.onNavigateTo(direction);
  };

  onRightSideRef = ref => {
    if (ref) {
      this.rightSide = ref;
    }
  };

  onExited = () => {
    this.scrollbar.scrollTop = 0;
    this.setState({
      coloredNav: false,
      scrollTop: 0,
      limitY: 0,
    });
  };

  determineScrollingEvent = scrolling => (this.scrolling = scrolling);

  onNavLinkClick = ({ direction, transitionEnd, id, event }) => {
    const { currentRoute } = this.state;

    if (currentRoute && currentRoute.id === id) {
      event.preventDefault();
      return;
    }

    this.setState({ direction, transitionEnd, mobileMenuIsOpen: false });
  };

  onTransitionEnd = (e, transitionEnd = true) => this.setState({ transitionEnd });

  onScrollBarRef = ref => {
    if (ref) {
      this.scrollbar = ref.scrollbar;
    }
  };

  toggleMobileMenu = () =>
    this.setState(({ mobileMenuIsOpen }) => ({
      mobileMenuIsOpen: !mobileMenuIsOpen,
    }));

  render() {
    const {
      scrollTop,
      coloredNav,
      direction,
      transitionEnd,
      disableHover,
      currentRoute,
      mobileMenuIsOpen,
    } = this.state;
    const { children } = this.props;

    return (
      <ScrollContext.Provider
        value={{
          scrollTop,
          onRightSideRef: this.onRightSideRef,
          coloredNav,
          onExited: this.onExited,
          direction,
          onNavLinkClick: this.onNavLinkClick,
          transitionEnd,
          onTransitionEnd: this.onTransitionEnd,
          currentRoute,
          mobileMenuIsOpen,
          toggleMobileMenu: this.toggleMobileMenu,
        }}
      >
        <ScrollBar
          ref={this.onScrollBarRef}
          disableHover={disableHover || !transitionEnd}
          plugins={{
            disableScrollByDirection: { direction: { x: true, y: mobileMenuIsOpen } },
            determineScrollingEvent: { callback: this.determineScrollingEvent },
          }}
          onScroll={this.onScroll}
          onWheel={this.onWheel}
        >
          {children}
        </ScrollBar>
      </ScrollContext.Provider>
    );
  }
}

export const ScrollProvider = ({ children }) => (
  <Location>
    {props => <ScrollProviderComponent {...props}>{children}</ScrollProviderComponent>}
  </Location>
);

export const ScrollConsumer = ScrollContext.Consumer;
