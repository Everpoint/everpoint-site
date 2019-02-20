import React, { Component } from "react";
import PropTypes from "prop-types";
// https://github.com/idiotWu/react-smooth-scrollbar
// API https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md

import { NativeScrollbar } from "./NativeScrollbar";
import { Swiper } from "../../components/Swiper/Swiper";
import { Scrollbar } from "../../components/Scrollbar/Scrollbar";

import "../ScrollbarProvider/plugins/disableScrollByDirection";
import { getLongreadNavbarHeight } from "../LongreadNavbar/LongreadNavbar";
import { isMobile, isTablet } from "../../utils/browser";

const ScrollBarContext = React.createContext();

export class ScrollbarProvider extends Component {
  static propTypes = {
    className: PropTypes.string,
    withScrollbarY: PropTypes.bool,
    location: PropTypes.object,
  };

  static defaultProps = {
    nativeScrollbar: false,
  };

  state = {
    scrollTop: 0,
    scrollbar: null,
  };

  componentDidMount() {
    const { nativeScrollbar } = this.props;

    if (nativeScrollbar) {
      window.addEventListener("scroll", this.onNativeScroll);
    }
  }

  componentWillUnmount() {
    const { nativeScrollbar } = this.props;

    if (nativeScrollbar) {
      window.removeEventListener("scroll", this.onNativeScroll);
    }
  }

  componentDidUpdate({ location: prevLocation }, prevState) {
    const { scrollbar } = this.state;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname) {
      if (scrollbar) {
        scrollbar.scrollTo(0, 0, 0);
      } else {
        const axis = Math.abs(window.orientation);
        const y = axis === 90 && (isMobile() || isTablet()) ? 1 : 0;

        window.scrollTo(0, y, 0);
      }
    }
  }

  onScroll = e => {
    const { offset } = e;
    const { y: offsetY } = offset;

    this.setState({
      scrollTop: offsetY,
    });
  };

  onScrollBarRef = ref => {
    if (ref) {
      this.setState({
        scrollbar: ref.scrollbar,
      });
    }
  };

  elementYPosition = ({ element, percent = true }) => {
    const { bottom, height: elementHeight } = element.getBoundingClientRect();
    const height = window.innerHeight;

    const value = bottom - height - elementHeight;
    const diff = value < -height ? -height : value > 0 ? 0 : value;

    return percent
      ? Math.min((Math.abs(diff) * 100) / (height - getLongreadNavbarHeight()), 100)
      : Math.abs(diff);
  };

  onNativeScroll = () => this.setState({ scrollTop: window.scrollY });

  render() {
    const { scrollTop, scrollbar } = this.state;
    const { children, className, withScrollbarY, nativeScrollbar } = this.props;

    return (
      <ScrollBarContext.Provider
        value={{ scrollTop, scrollbar, elementYPosition: this.elementYPosition, nativeScrollbar }}
      >
        <Swiper preventDefaultTouchmoveEvent={!nativeScrollbar}>
          {nativeScrollbar ? (
            <NativeScrollbar onScroll={this.onNativeScroll}>{children}</NativeScrollbar>
          ) : (
            <Scrollbar
              withScrollbarY={withScrollbarY}
              onScrollbarRef={this.onScrollBarRef}
              onScroll={this.onScroll}
              className={className}
              plugins={{
                disableScrollByDirection: { direction: { x: true, y: false } },
              }}
            >
              {children}
            </Scrollbar>
          )}
        </Swiper>
      </ScrollBarContext.Provider>
    );
  }
}

export const ScrollbarConsumer = ScrollBarContext.Consumer;
