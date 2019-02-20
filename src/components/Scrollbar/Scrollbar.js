import React, { Component } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
// https://github.com/idiotWu/react-smooth-scrollbar
// API https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md

import { isMobile, isTablet } from "../../utils/browser";
import styles, { ScrollBarContainer } from "./styles";

export class Scrollbar extends Component {
  static propTypes = {
    onScrollbarRef: PropTypes.func,
    className: PropTypes.string,
    withScrollbarY: PropTypes.bool,
  };

  state = {
    isMobileOrTablet: false,
  };

  componentDidMount() {
    this.setState({ isMobileOrTablet: isMobile() || isTablet() });
  }

  render() {
    const { isMobileOrTablet } = this.state;
    const { children, className, onScrollbarRef, withScrollbarY, ...props } = this.props;

    return (
      <ScrollBarContainer
        className={cn({ [styles.isMobile]: isMobileOrTablet }, className)}
        withScrollbarY={withScrollbarY}
        {...props}
        ref={onScrollbarRef}
      >
        {children}
      </ScrollBarContainer>
    );
  }
}
