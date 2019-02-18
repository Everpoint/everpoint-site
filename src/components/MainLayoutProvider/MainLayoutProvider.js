import React, { Component } from "react";
import { Location } from "@reach/router";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

import { preloadBgImages } from "../../components/Background/getBackground";
import { ScrollBar } from "./styles";
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
  }

  state = {
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
    preventDefaultTouchmoveEvent: true,
    disableTransition: true,
    disableNavigation: false,

    // sections
    isSwipeEvent: false,
    selectedSectionIndex: 0,
    sections: [],
    sectionDirection: 1,
  };

  defaultDamping = 0.1;
  threshold = 0;
  scrolling = false;
  timer = 0;
  scrollbar = null;
  scrollable = null;
  lefsideSection = null;
  timeout = 0;

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

  onResize = () => {
    const { currentRoute, selectedSectionIndex } = this.state;
    const {
      container: { width },
    } = this.scrollbar.getSize();

    if (width > mobileMenuWidth) {
      this.setState({ mobileMenuIsOpen: false });
    }

    if (currentRoute && currentRoute.scrollable) {
      if (width <= mobileMenuWidth) {
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

  sectionsFromAdditionalMenu = additionalMenu => {
    const sliderIdArray = [];
    additionalMenu &&
      additionalMenu.forEach(({ children, title }) =>
        children.forEach(item => sliderIdArray.push({ ...item, parentTitle: title })),
      );

    return sliderIdArray;
  };

  getSelectedSectionIndexFromLocalstorage = (currentRoute, sections) => {
    const { selectedSectionIndex } = this.state;
    const { id } = currentRoute;
    if (id === "portfolio") {
      const idFromLocalstorage = localStorage.getItem(id);
      const selectedSectionIndexFromStorage = sections.findIndex(
        section => section.id === idFromLocalstorage,
      );
      localStorage.removeItem(id);

      return selectedSectionIndexFromStorage > 0
        ? Math.max(+selectedSectionIndexFromStorage, 0)
        : selectedSectionIndex;
    } else {
      return selectedSectionIndex;
    }
  };

  setCurrentRoute = () => {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    clearTimeout(this.timeout);

    if (currentRoute) {
      const { slider, additionalMenu, scrollable, id } = currentRoute;

      // todo remove
      const sections =
        id === "about"
          ? Array.from({ length: 5 }, (_, index) => index)
          : this.sectionsFromAdditionalMenu(additionalMenu);

      const selectedSectionIndex = this.getSelectedSectionIndexFromLocalstorage(
        currentRoute,
        sections,
      );

      const sliderState =
        slider || scrollable
          ? {
              sliderDirection: 1,
              selectedSectionIndex,
              sections: slider || scrollable ? sections : [],
            }
          : {
              selectedSectionIndex: 0,
              sections: [],
              sliderDirection: 1,
            };

      this.setState({ currentRoute, coloredNav: false, disableNavigation: true, ...sliderState });
    } else {
      this.setState({ currentRoute: null, coloredNav: false, disableNavigation: true });
    }

    this.timeout = setTimeout(() => {
      this.setState({
        disableNavigation: false,
      });
    }, 100);
  };

  checkNavbarIntoContent = () => {
    const { currentRoute, selectedSectionIndex, damping } = this.state;

    if (
      this.scrollable &&
      this.scrollable.children[selectedSectionIndex] &&
      damping === this.defaultDamping
    ) {
      const headerHeight = 82;
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

  onNavigateTo = (direction, routeSwipeUpAndDown = false) => {
    const {
      container: { height },
    } = this.scrollbar.getSize();

    const {
      currentRoute,
      scrollTop,
      limitY,
      selectedSectionIndex,
      sections,
      disableNavigation,
    } = this.state;
    const { navigate, location } = this.props;
    const { pathname } = location;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        disableNavigation: false,
      });
    }, 100);

    const scrollable = currentRoute && currentRoute.scrollable;

    if (scrollable && (scrollTop === 0 || limitY === scrollTop) && !routeSwipeUpAndDown) {
      const ratio = height / 3;

      if (Math.abs(this.threshold) < ratio) {
        return;
      }
    }

    if ((scrollable && scrollTop > 0 && limitY !== scrollTop) || disableNavigation) {
      return;
    }

    const slider = currentRoute && currentRoute.slider;
    const up = selectedSectionIndex === 0 && direction < 0;
    const nextIndex = selectedSectionIndex + direction;
    const down = nextIndex === sections.length;

    if (slider && !up && !down && !routeSwipeUpAndDown) {
      const sectionDirection = selectedSectionIndex > nextIndex ? -1 : 1;
      this.setState({
        disableTransition: false,
        sectionDirection,
        disableNavigation: true,
        selectedSectionIndex: nextIndex,
      });
    } else {
      const jumped = navigateTo({ navigate, pathname, direction });

      if (jumped) {
        this.setState({
          disableTransition: false,
          selectedSectionIndex: 0,
          transitionEnd: false,
          disableNavigation: true,
          direction,
        });

        this.threshold = 0;
      }
    }
  };

  checkBlockIsCenter = (direction, divider = 2) => {
    const { selectedSectionIndex } = this.state;
    const value = selectedSectionIndex + direction;
    const currentBlock = this.scrollable && this.scrollable.children[value];

    if (currentBlock) {
      const {
        container: { height },
      } = this.scrollbar.getSize();

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
    const {
      container: { width },
    } = this.scrollbar.getSize();

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
    const direction = Math.sign(e.deltaY);
    const normalizeDeltaY = direction > 0 ? 53 : -53;

    if (thresholdIsActive || (scrollTop === 0 && direction < 0)) {
      this.threshold = this.threshold + normalizeDeltaY;
    }

    this.setState({ direction, isSwipeEvent: false, damping: this.defaultDamping });

    this.checkNavbarIntoContent();

    this.onNavigateTo(direction);
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

  onNavLinkClick = ({ transitionEnd, id, event, navigate, selectedSectionIndex }) => {
    const { currentRoute } = this.state;
    const prevIndex = routes.findIndex(route => route.id === currentRoute.id);
    const currentIndex = routes.findIndex(route => route.id === id);
    const direction = currentIndex > prevIndex ? 1 : -1;

    if (currentRoute && currentRoute.id === id) {
      event && event.preventDefault();
      return;
    }

    this.setState(
      {
        disableTransition: false,
        selectedSectionIndex: selectedSectionIndex || 0,
        direction,
        transitionEnd,
        mobileMenuIsOpen: false,
      },
      () => {
        const page = routes[currentIndex];
        if (navigate && page) {
          navigate(page.route);
        }
      },
    );
  };

  onTransitionEnd = (e, transitionEnd = true) => this.setState({ transitionEnd });

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
    if (this.scrollable && this.scrollable.children[index]) {
      const {
        container: { height },
      } = this.scrollbar.getSize();

      let offsetTop = height / 2;

      if (this.lefsideSection) {
        offsetTop = this.lefsideSection.getBoundingClientRect().top;
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

  onSectionChange = ({ value, id, pageId, isSwipeEvent = false, isClickEvent = false }) => {
    const {
      container: { width },
    } = this.scrollbar.getSize();
    const { navigate } = this.props;
    const { selectedSectionIndex, sections, currentRoute } = this.state;

    const pageIsChanged = pageId && currentRoute && currentRoute.id !== pageId;

    const nextValue = id
      ? sections.findIndex(item => item.id === id)
      : selectedSectionIndex + value;

    if (pageIsChanged) {
      const { additionalMenu } = getRouteById(pageId);
      const sectionFromMenu = this.sectionsFromAdditionalMenu(additionalMenu);
      const index = sectionFromMenu.findIndex(item => item.id === id);

      this.onNavLinkClick({
        isSwipeEvent,
        selectedSectionIndex: index,
        transitionEnd: false,
        disableTransition: false,
        id: pageId,
        navigate,
      });
    } else {
      if (nextValue >= sections.length || nextValue < 0) return;

      const sectionDirection = selectedSectionIndex > nextValue ? -1 : 1;

      if (currentRoute.scrollable && isClickEvent && width >= mobileMenuWidth) {
        this.scrollToBlock(nextValue);
      }

      this.setState({
        isSwipeEvent,
        sectionDirection,
        disableTransition: false,
        selectedSectionIndex: nextValue,
      });
    }
  };

  onSwiped = ({ isUp, isDown, yRatio }) => {
    if (isUp && yRatio > 25) {
      this.onNavigateTo(1, true);
    } else if (isDown && yRatio > 25) {
      this.onNavigateTo(-1, true);
    }
  };

  onSwiping = () => {
    const { damping } = this.state;

    if (damping !== this.defaultDamping) {
      this.setState({
        damping: this.defaultDamping,
      });
    }
  };

  setPreventDefaultTouchmoveEvent = preventDefaultTouchmoveEvent =>
    this.setState({ preventDefaultTouchmoveEvent });

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
      preventDefaultTouchmoveEvent,
      disableTransition,

      // sections
      isSwipeEvent,
      selectedSectionIndex,
      sections,
      sectionDirection,
    } = this.state;
    const { children } = this.props;

    return (
      <ScrollContext.Provider
        value={{
          scrollTop,
          onScrollableRef: this.onScrollableRef,
          coloredNav,
          onExited: this.onExited,
          direction,
          onNavLinkClick: this.onNavLinkClick,
          transitionEnd,
          onTransitionEnd: this.onTransitionEnd,
          currentRoute,
          mobileMenuIsOpen,
          toggleMobileMenu: this.toggleMobileMenu,
          setPreventDefaultTouchmoveEvent: this.setPreventDefaultTouchmoveEvent,

          // sections
          scrollToBlock: this.scrollToBlock,
          onLeftSideSectionRef: this.onLeftSideSectionRef,
          isSwipeEvent,
          onSectionChange: this.onSectionChange,
          selectedSectionIndex,
          sections,
          sectionDirection,
          disableTransition,
        }}
      >
        <ImagesDownloadListener images={preloadBgImages} />
        <Swiper
          preventDefaultTouchmoveEvent={preventDefaultTouchmoveEvent}
          onSwiping={this.onSwiping}
          onSwiped={this.onSwiped}
        >
          <ScrollBar
            ref={this.onScrollBarRef}
            damping={damping}
            disableHover={disableHover || !transitionEnd}
            plugins={{
              disableScrollByDirection: {
                direction: {
                  x: true,
                  y: mobileMenuIsOpen || (currentRoute && !currentRoute.scrollable),
                },
              },
              determineScrollingEvent: { callback: this.determineScrollingEvent },
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

export const MainLayoutProvider = ({ children }) => (
  <Location>
    {props => <MainLayoutProviderComponent {...props}>{children}</MainLayoutProviderComponent>}
  </Location>
);

export const MainLayoutConsumer = ScrollContext.Consumer;
