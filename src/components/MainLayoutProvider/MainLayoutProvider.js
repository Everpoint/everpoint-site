import React, { Component } from "react";
import { Location } from "@reach/router";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

import { backgrounds } from "../../components/MainPageElements/Background";
import styles, { ScrollBar } from "./styles";
import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";
import { Swiper } from "../../components/Swiper/Swiper";
import { mobileMenu as mobileMenuWidth } from "../../components/Navbar/styles";
import { navigateTo, getRouteByLocation, getRouteById } from "../../routes/utils";

import "../ScrollbarProvider/plugins/disableScrollByDirection";

const ScrollContext = React.createContext();

export class MainLayoutProviderComponent extends Component {
  constructor(props) {
    super(props);
    this.onResize = debounce(this.onResize, 200);
    this.checkBlockIsCenter = throttle(this.checkBlockIsCenter, 100);
    this.checkNavbarIntoContent = throttle(this.checkNavbarIntoContent, 100);
    this.scrollToBlock = debounce(this.scrollToBlock, 100);
    this.onNavigateToThrottled = throttle(this.onNavigateTo, 200, {
      leading: true,
      trailing: false,
    });

    const { location, routes } = props;
    const currentRoute = getRouteByLocation(location, routes);
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
      scrollEvent: false,

      // sections
      selectedSectionIndex: selectedSectionIndexFromStorage,
      sections: (currentRoute && currentRoute.sections) || [],
      sectionDirection: 1,
      lastSectionIndex: 0,
      disableBackgroundTransition: false,
    };
  }

  defaultDamping = 0.1;
  threshold = 0;
  scrollbar = null;
  scrollable = null;
  lefsideSection = null;
  timer = 0;
  disableSwipeNavigation = false;

  componentDidMount() {
    this.setCurrentRoute();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);

    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  componentDidUpdate({ location: prevLocation }) {
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
    const { width } = this.getSize();

    if (width > mobileMenuWidth) {
      this.setState({ mobileMenuIsOpen: false });
    }
  };

  setCurrentRoute = () => {
    const { location, routes } = this.props;
    const { selectedSectionIndex, scrollEvent } = this.state;
    const currentRoute = getRouteByLocation(location, routes);
    const { state } = location;
    const sections = (currentRoute && currentRoute.sections) || [];
    this.setState(
      {
        currentRoute: currentRoute || "404",
        coloredNav: false,
        sections,
      },
      () => {
        const margin = 30;

        if (state && state.scrollTo && this.scrollbar) {
          const index = sections.findIndex(section => section.id === state.scrollTo);

          let offsetTop = 0;

          if (this.lefsideSection) {
            const { top } = this.lefsideSection.getBoundingClientRect();
            offsetTop = top + margin / 2;
          }

          this.scrollToBlock({
            index,
            offsetTop,
            damping: 0.4,
          });
        } else if (currentRoute && currentRoute.scrollable) {
          const { height: vh } = this.getSize();
          const scrollToEndBlock =
            scrollEvent && selectedSectionIndex === (currentRoute && sections.length - 1);

          let offsetTop = 0;
          if (this.lefsideSection) {
            const { height } = this.lefsideSection.getBoundingClientRect();
            offsetTop = vh / 2 + height / 2 - margin / 2;
          }

          let timetout = this.scrollable ? 0 : 44;

          setTimeout(() => {
            if (
              scrollToEndBlock &&
              this.scrollable &&
              this.scrollable.children[selectedSectionIndex]
            ) {
              const { height: rightBlockHeight } = this.scrollable.children[
                selectedSectionIndex
              ].getBoundingClientRect();
              offsetTop -= rightBlockHeight + vh * 0.3;
            }

            this.scrollToBlock({
              index: selectedSectionIndex,
              damping: scrollEvent ? 1 : 0.2,
              offsetTop,
            });
          }, timetout);
        }
      },
    );
  };

  checkNavbarIntoContent = () => {
    const { currentRoute } = this.state;

    if (this.scrollable && this.scrollable.children[0]) {
      const headerHeight = 80;
      const { top } = this.scrollable.children[0].getBoundingClientRect();

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
    }
  };

  getIndexFromDirection = (currentRoute, direction) => {
    if (!currentRoute) return 0;

    const { sections, maxItemCount } = currentRoute;

    const sectionsLength = maxItemCount || (sections && sections.length) || 1;
    const indexFromDirection = direction < 0 ? sectionsLength - 1 : 0;

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
    this.scrollbar.scrollLeft = 0;
    const { disableHover, scrollTop } = this.state;
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
    const { location, navigate } = this.props;
    const direction = e.deltaY > 0 ? 1 : -1;
    const normalizeDeltaY = direction > 0 ? 53 : -53;
    const is404Page = location.pathname.indexOf("404") === 1;
    if (thresholdIsActive || (scrollTop === 0 && direction < 0)) {
      this.threshold = this.threshold + normalizeDeltaY;
    }

    this.setState({ direction, damping: this.defaultDamping, scrollEvent: true });

    this.checkNavbarIntoContent();

    if (is404Page) {
      navigate("/");
    } else {
      this.onNavigateToThrottled(direction);
    }
  };

  onExited = () => {
    this.setState({
      transitionEnd: true,
      coloredNav: false,
      limitY: 0,
      lastSectionIndex: 0,
    });
  };

  onNavLinkClick = ({ id, event, navigate, selectedSectionIndex, transitionEnd }) => {
    const { routes } = this.props;
    const { currentRoute } = this.state;

    const prevIndex = routes.findIndex(route => route.id === currentRoute.id);
    const currentIndex = routes.findIndex(route => route.id === id);
    const direction = currentIndex > prevIndex ? 1 : -1;

    if (currentRoute && currentRoute.id === id) {
      event && event.preventDefault();
      return;
    }

    const nextPage = routes[currentIndex];
    const prevPageId = currentRoute ? currentRoute.id : "";
    const nextPageId = nextPage ? nextPage.id : "";

    const selectedSectionIndexFromIndex = this.getIndexFromDirection(nextPage, direction);

    const disableBackgroundTransition =
      (prevPageId === "portfolio" && nextPageId === "about") ||
      (prevPageId === "about" && nextPageId === "portfolio");

    this.setState(
      {
        scrollEvent: false,
        selectedSectionIndex:
          selectedSectionIndex >= 0 ? selectedSectionIndex : selectedSectionIndexFromIndex,
        direction,
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

  scrollToBlock = ({ index, damping = 0.2, offsetTop = 0 }) => {
    if (this.scrollbar && this.scrollable && this.scrollable.children[index]) {
      this.setState(
        {
          damping,
        },
        () => {
          this.scrollbar.scrollIntoView(this.scrollable.children[index], {
            offsetTop,
            onlyScrollIfNeeded: false,
          });
        },
      );
    }
  };

  onSectionChange = ({ value, id, pageId, index = null, scrollToBlock = false }) => {
    const { navigate, routes } = this.props;
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
      const { sections } = getRouteById(pageId, routes);
      const index = sections.findIndex(item => item.id === id);

      this.onNavLinkClick({
        selectedSectionIndex: index,
        id: pageId,
        navigate,
        disableBackgroundTransition: false,
      });
    } else {
      if (nextValue >= sectionsLength || nextValue < 0) return;

      const sectionDirection = selectedSectionIndex > nextValue ? -1 : 1;

      if (currentRoute.scrollable && scrollToBlock) {
        const margin = 30;
        this.scrollToBlock({
          index: nextValue,
          offsetTop: this.lefsideSection ? this.lefsideSection.offsetTop + margin / 2 : 0,
        });
      }

      this.setState({
        scrollEvent: false,
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
    const { damping, sections, selectedSectionIndex, currentRoute, scrollEvent } = this.state;
    const { location, navigate } = this.props;
    const is404Page = location.pathname.indexOf("404") === 1;
    const sectionsLength = (currentRoute && currentRoute.maxItemCount) || sections.length;
    const scrollable = currentRoute && currentRoute.scrollable;

    const page = sectionsLength === 0 && !scrollable;
    const goUp = isUp && yRatio > 25;
    const goDown = isDown && yRatio > 25;
    const goPrevSection = goDown && selectedSectionIndex - 1 >= 0;
    const goNextSection = goUp && selectedSectionIndex + 1 <= sectionsLength;
    const goPrevPage = goDown && (selectedSectionIndex === 0 || page);
    const goNextPage = goUp && (selectedSectionIndex + 1 === sectionsLength || page);

    if (!scrollEvent) {
      this.setState({ scrollEvent: true });
    }

    if (is404Page) {
      navigate("/");
    } else if ((goPrevPage || goNextPage) && !this.disableSwipeNavigation) {
      this.onNavigateTo(goNextPage ? 1 : -1, true);
      this.disableSwipeNavigation = true;
    } else if ((goPrevSection || goNextSection) && !this.disableSwipeNavigation) {
      this.setState({
        sectionDirection: goNextSection ? 1 : -1,
        selectedSectionIndex: selectedSectionIndex + (goNextSection ? 1 : -1),
        disableBackgroundTransition: false,
      });
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
      this.scrollbar.scrollLeft = 0;
      this.scrollbar.scrollTop = 0;
    }
    this.setState({ transitionEnd: false });
  };

  onNavigateTo = (direction, routeSwipeUpAndDown = false) => {
    const { height } = this.getSize();

    const {
      currentRoute,
      scrollTop,
      limitY,
      selectedSectionIndex,
      sections,
      transitionEnd,
    } = this.state;
    const { navigate, location, routes } = this.props;
    const { pathname } = location;

    if (!currentRoute) {
      return;
    }

    const scrollable = currentRoute && currentRoute.scrollable;
    const ratio = height / 4.8;
    const scrollableToTop =
      scrollable &&
      (Math.abs(this.threshold) > ratio || routeSwipeUpAndDown) &&
      direction < 0 &&
      scrollTop === 0;

    const scrollToBottom =
      scrollable && direction > 0 && limitY && scrollTop && scrollTop + 144 >= limitY;

    if ((!scrollable || scrollableToTop || scrollToBottom) && transitionEnd) {
      const slider = currentRoute && currentRoute.slider;
      const isPortfolioPage = currentRoute && currentRoute.id === "portfolio";
      const up = selectedSectionIndex === 0 && direction < 0;
      const nextIndex = selectedSectionIndex + direction;
      const sectionsLength = currentRoute.maxItemCount || sections.length;

      const down = nextIndex === sectionsLength;

      if (slider && !up && !down && !routeSwipeUpAndDown) {
        // section change
        const sectionDirection = selectedSectionIndex > nextIndex ? -1 : 1;

        this.setState({
          disableBackgroundTransition: false,
          transitionEnd: !isPortfolioPage,
          sectionDirection,
          selectedSectionIndex: nextIndex,
        });
      } else {
        // page change
        const nextPage = navigateTo({ navigate, pathname, direction, routes });
        const prevPageId = currentRoute ? currentRoute.id : "";
        const nextPageId = nextPage ? nextPage.id : "";

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
      selectedSectionIndex,
      sections,
      sectionDirection,
      disableBackgroundTransition,
      lastSectionIndex,
    } = this.state;
    const { children, news, titles } = this.props;

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
          news,
          titles,
          onLeftSideSectionRef: this.onLeftSideSectionRef,
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
            }}
            onScroll={this.onScroll}
            onWheel={this.onWheel}
          >
            {children}
          </ScrollBar>
        </Swiper>
      </ScrollContext.Provider>
    );
  }
}

export const MainLayoutProvider = ({ children, ...parentProps }) => (
  <Location>
    {props => (
      <MainLayoutProviderComponent {...parentProps} {...props}>
        {children}
      </MainLayoutProviderComponent>
    )}
  </Location>
);

export const MainLayoutConsumer = ScrollContext.Consumer;
