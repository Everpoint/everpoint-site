import React, { Component } from "react";
import { Location } from "@reach/router";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

import { backgrounds } from "../../components/MainPageElements/Background";
import styles, { NativeScrollbar, ScrollBar } from "./styles";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { Swiper } from "../../components/Swiper/Swiper";
import { mobileMenu as mobileMenuWidth } from "../../components/Navbar/styles";
import { navigateTo, getRouteByLocation, getRouteById, routes } from "../../routes";

import "../ScrollbarProvider/plugins/disableScrollByDirection";
import "../ScrollbarProvider/plugins/determineScrollingPlugin";

const ScrollContext = React.createContext();

export class MainLayoutProviderComponent extends Component {
  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 200);
    this.checkBlockIsCenter = throttle(this.checkBlockIsCenter, 100);
    this.checkNavbarIntoContent = throttle(this.checkNavbarIntoContent, 100);
    this.scrollToBlock = debounce(this.scrollToBlock, 100);
    const { location } = props;

    const currentRoute = getRouteByLocation(location);
    const id = currentRoute && currentRoute.id;
    const sections = (currentRoute && currentRoute.sections) || [];

    const idFromLocalstorage = typeof window === "object" && localStorage.getItem(id);
    const selectedSectionIndexFromStorage =
      idFromLocalstorage && sections
        ? sections.findIndex(section => section.id === idFromLocalstorage)
        : 0;

    if (typeof window === "object") {
      localStorage.removeItem(id);
    }

    this.onNavigateToDebounced = debounce(this.onNavigateTo, 200, {
      leading: true,
      trailing: false,
    });

    this.state = {
      scrollTop: 0,
      limitY: 0,
      coloredNav: false,
      currentRoute: null,
      direction: 1,
      transitionEnd: true,
      disableHover: false,
      mobileMenuIsOpen: false,
      damping: 0.1,
      thresholdIsActive: false,

      // sections
      isSwipeEvent: null,
      isClickEvent: null,
      selectedSectionIndex: selectedSectionIndexFromStorage,
      sections: (currentRoute && currentRoute.sections) || [],
      sectionDirection: 1,
      lastSectionIndex: 0,
      disableBackgroundTransition: false,
    };
  }

  defaultDamping = 0.1;
  threshold = 0;
  scrolling = false;
  timer = 0;
  scrollbar = null;
  scrollable = null;
  lefsideSection = null;
  timeout = 0;
  disableSwipeNavigation = false;

  componentDidMount() {
    this.setCurrentRoute();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("orientationchange", this.onOrientationChange);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.timeout);

    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("orientationchange", this.onOrientationChange);
  }

  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname) {
      this.setCurrentRoute();
    }
  }

  onKeyDown = () => {
    const { damping } = this.state;

    if (damping !== this.defaultDamping) {
      this.setState({
        damping: this.defaultDamping,
      });
    }
  };

  getSize = () => {
    return {
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    };
  };

  onResize = () => {
    const { currentRoute, selectedSectionIndex } = this.state;
    const { width } = this.getSize();

    if (width > mobileMenuWidth) {
      this.setState({ mobileMenuIsOpen: false });
    }

    if (currentRoute && currentRoute.scrollable) {
      if (this.scrollbar && width <= mobileMenuWidth) {
        this.setState(
          {
            scrollTop: 0,
            coloredNav: false,
          },
          () => {
            this.scrollbar.scrollTo(0, 0, 0);
          },
        );
      } else {
        this.scrollToBlock(selectedSectionIndex, true);
      }
    }
  };

  setCurrentRoute = () => {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    clearTimeout(this.timeout);

    if (currentRoute) {
      const { sections } = currentRoute;

      this.setState({
        currentRoute,
        coloredNav: false,
        isSwipeEvent: false,
        isClickEvent: false,
        sections: sections || [],
      });
    }
  };

  checkNavbarIntoContent = () => {
    const { currentRoute, selectedSectionIndex, damping } = this.state;

    if (
      this.scrollable &&
      this.scrollable.children[selectedSectionIndex] &&
      damping === this.defaultDamping
    ) {
      const headerHeight = 80;
      const { top } = this.scrollable.children[selectedSectionIndex].getBoundingClientRect();

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

  getIndexFromDirection = (currentRoute, direction) => {
    if (!currentRoute) return 0;

    const { sections, maxItemCount } = currentRoute;

    const { isClickEvent } = this.state;
    const sectionsLength = maxItemCount || (sections && sections.length) || 1;
    const indexFromDirection = direction < 0 && !isClickEvent ? sectionsLength - 1 : 0;

    return indexFromDirection;
  };

  checkBlockIsCenter = (direction, divider = 2) => {
    const { selectedSectionIndex } = this.state;
    const value = selectedSectionIndex + direction;
    const currentBlock = this.scrollable && this.scrollable.children[value];

    if (currentBlock) {
      const { height } = this.getSize();

      const { top, bottom } = currentBlock.getBoundingClientRect();

      if (direction > 0) {
        const blockIsCenter = top < height / divider;
        if (blockIsCenter) {
          this.onSectionChange({ value: 1 });
        }
      }

      if (direction < 0) {
        const blockIsCenter = bottom > height / divider;
        if (blockIsCenter) {
          this.onSectionChange({ value: -1 });
        }
      }
    }
  };

  onScroll = e => {
    const { width } = this.getSize();

    const { disableHover, scrollTop, currentRoute } = this.state;
    const { offset, limit } = e;
    const { y: offsetY } = offset;
    const { y: limitY } = limit;

    if (width <= mobileMenuWidth && currentRoute && currentRoute.scrollable) {
      return;
    }

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
        thresholdIsActive: offsetY >= limitY || offsetY === 0,
      },
      () => {
        const direction = offsetY > scrollTop ? 1 : -1;

        this.checkBlockIsCenter(direction);
        this.checkNavbarIntoContent();

        if (offsetY >= limitY || offsetY === 0) {
          this.threshold = 0;
        }
      },
    );
  };

  onWheel = e => {
    const { thresholdIsActive, scrollTop } = this.state;
    const direction = e.deltaY > 0 ? 1 : -1;
    const normalizeDeltaY = direction > 0 ? 53 : -53;

    if (thresholdIsActive || (scrollTop === 0 && direction < 0)) {
      this.threshold = this.threshold + normalizeDeltaY;
    }

    this.setState({ direction, isSwipeEvent: false, damping: this.defaultDamping });

    this.checkNavbarIntoContent();
    this.onNavigateToDebounced(direction);
  };

  onExited = () => {
    this.setState({
      transitionEnd: true,
      coloredNav: false,
      scrollTop: 0,
      limitY: 0,
      lastSectionIndex: 0,
    });
  };

  determineScrollingEvent = scrolling => (this.scrolling = scrolling);

  onNavLinkClick = ({ id, event, navigate, selectedSectionIndex, isClickEvent, transitionEnd }) => {
    const { currentRoute } = this.state;
    const prevIndex = routes.findIndex(route => route.id === currentRoute.id);
    const currentIndex = routes.findIndex(route => route.id === id);
    const direction = currentIndex > prevIndex ? 1 : -1;

    if (currentRoute && currentRoute.id === id) {
      event && event.preventDefault();
      return;
    }

    const nextPage = routes[currentIndex];
    const prevPageId = currentRoute && currentRoute.id;
    const nextPageId = nextPage && nextPage.id;

    const selectedSectionIndexFromIndex = this.getIndexFromDirection(nextPage, direction);

    const disableBackgroundTransition =
      (prevPageId === "portfolio" && nextPageId === "about") ||
      (prevPageId === "about" && nextPageId === "portfolio");

    this.setState(
      {
        selectedSectionIndex: selectedSectionIndex || selectedSectionIndexFromIndex,
        direction,
        isClickEvent,
        mobileMenuIsOpen: false,
        disableBackgroundTransition,
        transitionEnd,
      },
      () => {
        if (navigate && nextPage) {
          navigate(nextPage.route);
        }
      },
    );
  };

  onScrollableRef = ref => {
    if (ref) {
      this.scrollable = ref;
    }
  };

  onScrollBarRef = ref => {
    if (ref) {
      this.scrollbar = ref.scrollbar;
    }
  };

  onLeftSideSectionRef = ref => {
    if (ref) {
      this.lefsideSection = ref;
    }
  };

  toggleMobileMenu = () =>
    this.setState(({ mobileMenuIsOpen }) => ({
      mobileMenuIsOpen: !mobileMenuIsOpen,
    }));

  scrollToBlock = (index, onlyScrollIfNeeded = false) => {
    if (this.scrollbar && this.scrollable && this.scrollable.children[index]) {
      const { height } = this.getSize();

      let offsetTop = height / 2;

      if (this.lefsideSection) {
        offsetTop = this.lefsideSection.offsetTop;
      }

      this.setState(
        {
          damping: 0.2,
        },
        () => {
          this.scrollbar.scrollIntoView(this.scrollable.children[index], {
            offsetTop,
            onlyScrollIfNeeded,
          });
        },
      );
    }
  };

  onSectionChange = ({
    value,
    id,
    pageId,
    isSwipeEvent = false,
    isClickEvent = false,
    index = null,
  }) => {
    const { width } = this.getSize();
    const { navigate } = this.props;
    const { selectedSectionIndex, sections, currentRoute } = this.state;

    const pageIsChanged = pageId && currentRoute && currentRoute.id !== pageId;
    const sectionsLength =
      (currentRoute && currentRoute.maxItemCount) || (sections && sections.length) || 1;

    const nextValue = id
      ? sections.findIndex(item => item.id === id)
      : index !== null
      ? index
      : selectedSectionIndex + value;

    if (pageIsChanged) {
      const { sections } = getRouteById(pageId);
      const index = sections.findIndex(item => item.id === id);

      this.onNavLinkClick({
        isClickEvent,
        selectedSectionIndex: index,
        id: pageId,
        navigate,
        disableBackgroundTransition: false,
      });
    } else {
      if (nextValue >= sectionsLength || nextValue < 0) return;

      const sectionDirection = selectedSectionIndex > nextValue ? -1 : 1;

      if (currentRoute.scrollable && isClickEvent && width >= mobileMenuWidth) {
        this.scrollToBlock(nextValue);
      }

      this.setState({
        isSwipeEvent,
        isClickEvent,
        sectionDirection,
        selectedSectionIndex: nextValue,
        disableBackgroundTransition: false,
      });
    }
  };

  onSwiped = () => {
    this.disableSwipeNavigation = false;
  };

  onSwiping = ({ isUp, isDown, yRatio }) => {
    const { damping } = this.state;

    if (isUp && yRatio > 25 && !this.disableSwipeNavigation) {
      this.onNavigateTo(1, true);
      this.disableSwipeNavigation = true;
    } else if (isDown && yRatio > 25 && !this.disableSwipeNavigation) {
      this.onNavigateTo(-1, true);
      this.disableSwipeNavigation = true;
    }

    if (damping !== this.defaultDamping) {
      this.setState({
        damping: this.defaultDamping,
      });
    }
  };

  onEnter = () => {
    if (this.scrollbar) {
      this.scrollbar.scrollTop = 0;
    }
    this.setState({ transitionEnd: false });
  };

  onNavigateTo = (direction, routeSwipeUpAndDown = false) => {
    const { height } = this.getSize();

    const { currentRoute, scrollTop, limitY, selectedSectionIndex, sections } = this.state;
    const { navigate, location } = this.props;
    const { pathname } = location;

    const scrollable = currentRoute && currentRoute.scrollable;

    if (scrollable && (scrollTop === 0 || limitY === scrollTop) && !routeSwipeUpAndDown) {
      const ratio = height / 4.8;

      if (Math.abs(this.threshold) < ratio) {
        return;
      }
    }

    if (scrollable && scrollTop > 0 && limitY !== scrollTop) {
      return;
    }

    const slider = currentRoute && currentRoute.slider;
    const up = selectedSectionIndex === 0 && direction < 0;
    const nextIndex = selectedSectionIndex + direction;
    const sectionsLength = currentRoute.maxItemCount || sections.length;

    const down = nextIndex === sectionsLength;

    if (slider && !up && !down && !routeSwipeUpAndDown) {
      // section change
      const sectionDirection = selectedSectionIndex > nextIndex ? -1 : 1;

      this.setState({
        disableBackgroundTransition: false,
        sectionDirection,
        selectedSectionIndex: nextIndex,
      });
    } else {
      // page change
      const nextPage = navigateTo({ navigate, pathname, direction });
      const prevPageId = currentRoute && currentRoute.id;
      const nextPageId = nextPage && nextPage.id;

      const disableBackgroundTransition =
        (prevPageId === "portfolio" && nextPageId === "about") ||
        (prevPageId === "about" && nextPageId === "portfolio");

      const selectedSectionIndexFromIndex = this.getIndexFromDirection(nextPage, direction);

      if (nextPage) {
        this.setState({
          transitionEnd: false,
          selectedSectionIndex: selectedSectionIndexFromIndex,
          lastSectionIndex: selectedSectionIndex,
          direction,
          disableBackgroundTransition,
        });

        this.threshold = 0;
      }
    }
  };

  render() {
    const {
      scrollTop,
      coloredNav,
      direction,
      transitionEnd,
      disableHover,
      currentRoute,
      mobileMenuIsOpen,
      damping,

      // sections
      isSwipeEvent,
      selectedSectionIndex,
      sections,
      sectionDirection,
      disableBackgroundTransition,
      lastSectionIndex,
    } = this.state;
    const { children } = this.props;

    return (
      <ScrollContext.Provider
        value={{
          scrollTop,
          onScrollableRef: this.onScrollableRef,
          coloredNav,
          onEnter: this.onEnter,
          onExited: this.onExited,
          direction,
          onNavLinkClick: this.onNavLinkClick,
          transitionEnd,
          currentRoute,
          mobileMenuIsOpen,
          toggleMobileMenu: this.toggleMobileMenu,

          // sections
          scrollToBlock: this.scrollToBlock,
          onLeftSideSectionRef: this.onLeftSideSectionRef,
          isSwipeEvent,
          onSectionChange: this.onSectionChange,
          selectedSectionIndex,
          sections,
          sectionDirection,
          disableBackgroundTransition,
          lastSectionIndex,
        }}
      >
        <ImagesDownloadListener images={backgrounds} />
        <Swiper
          className={styles.swiper}
          onSwiping={this.onSwiping}
          onSwiped={this.onSwiped}
          preventDefaultTouchmoveEvent={true}
        >
          {false ? (
            <NativeScrollbar onWheel={this.onWheel}>{children}</NativeScrollbar>
          ) : (
            <ScrollBar
              ref={this.onScrollBarRef}
              damping={damping}
              disableHover={disableHover || !transitionEnd}
              plugins={{
                disableScrollByDirection: {
                  direction: {
                    x: true,
                    y:
                      mobileMenuIsOpen ||
                      (currentRoute && !currentRoute.scrollable) ||
                      !transitionEnd,
                  },
                },
                determineScrollingEvent: { callback: this.determineScrollingEvent },
              }}
              onScroll={this.onScroll}
              onWheel={this.onWheel}
            >
              {children}
            </ScrollBar>
          )}
        </Swiper>
      </ScrollContext.Provider>
    );
  }
}

export const MainLayoutProvider = ({ children }) => (
  <Location>
    {props => <MainLayoutProviderComponent {...props}>{children}</MainLayoutProviderComponent>}
  </Location>
);

export const MainLayoutConsumer = ScrollContext.Consumer;
