import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Link } from "gatsby";

import { ReactComponent as Close } from "../../assets/img/icons/close.svg";
import { ReactComponent as Arrow } from "../../assets/img/icons/arrow.svg";
import { ScrollbarConsumer } from "../ScrollbarProvider/ScrollbarProvider";
import { getColorById } from "./getColorById";
import styles, { LongreadNavbarContainer } from "./styles";

export const getLongreadNavbarHeight = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const viewportHeight = document.documentElement.clientHeight || window.innerHeight || 0;

  if (
    (viewportWidth <= 767 && window.innerHeight > window.innerWidth) ||
    (viewportWidth <= 812 && window.innerHeight < window.innerWidth)
  ) {
    return 49;
  } else if (viewportWidth <= 991 || (viewportHeight <= 700 && viewportWidth > viewportHeight)) {
    return 66;
  } else {
    return 80;
  }
};

export class LongreadNavbarBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
    className: PropTypes.string,
    pages: PropTypes.arrayOf(PropTypes.string),
    nativeScrollbar: PropTypes.bool,
    isMobile: PropTypes.bool,
    currentPage: PropTypes.number,
    goBack: PropTypes.func,
  };

  render() {
    const {
      scrollTop,
      className,
      children,
      pages,
      currentPage,
      nativeScrollbar,
      goBack,
    } = this.props;
    const transform = `translateY(${nativeScrollbar ? 0 : scrollTop}px)`;
    const fixed = Math.floor(scrollTop) > 0;
    const color = getColorById({ id: pages[currentPage], fixed });
    const prev = pages[currentPage - 1];
    const next = pages[currentPage + 1];

    return (
      <LongreadNavbarContainer className={cn(className, color)} style={{ transform }} fixed={fixed}>
        {children}
        {prev && (
          <Link to={prev} className={cn(styles.arrowBtn, styles.leftArrowBtn)}>
            <Arrow />
            Предыдущий
          </Link>
        )}
        <button className={styles.longreadCloseBtn} onClick={goBack}>
          <Close />
        </button>
        {next && (
          <Link to={next} className={cn(styles.arrowBtn, styles.rightArrowBtn)}>
            Следующий
            <Arrow />
          </Link>
        )}
      </LongreadNavbarContainer>
    );
  }
}

export const LongreadNavbar = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <LongreadNavbarBase {...props} scrollTop={scrollTop} />}
  </ScrollbarConsumer>
);
