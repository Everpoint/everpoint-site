import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { Link } from "gatsby";

import { ReactComponent as Close } from "../../assets/img/icons/close.svg";
import { ReactComponent as Arrow } from "../../assets/img/icons/arrow.svg";
import { ScrollbarConsumer } from "../ScrollbarProvider/ScrollbarProvider";
import { getBackRouteByLocationPathName } from "../../routes";
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
    pathname: PropTypes.string,
    scrollTop: PropTypes.number,
    className: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.string),
    native: PropTypes.bool,
  };

  render() {
    const { pathname, scrollTop, className, children, projects, native } = this.props;

    const transform = `translateY(${native ? 0 : scrollTop}px)`;
    const fixed = Math.floor(scrollTop) > 0;
    const arrowControl = !!projects;
    const currentPageIndex =
      projects && projects.findIndex(id => id === pathname.replace(/\//g, ""));
    const currentProject = projects && projects[currentPageIndex];
    const prevProjectPage = projects && projects[currentPageIndex - 1];
    const nextProjectPage = projects && projects[currentPageIndex + 1];

    const color = getColorById(currentProject, fixed);

    return (
      <LongreadNavbarContainer className={cn(className, color)} style={{ transform }} fixed={fixed}>
        {children}
        {arrowControl && prevProjectPage && (
          <Link to={`/${prevProjectPage}`} className={cn(styles.arrowBtn, styles.leftArrowBtn)}>
            <Arrow />
            Предыдущий
          </Link>
        )}
        <Link className={styles.longreadCloseBtn} to={getBackRouteByLocationPathName(pathname)}>
          <Close />
        </Link>
        {arrowControl && nextProjectPage && (
          <Link to={`/${nextProjectPage}`} className={cn(styles.arrowBtn, styles.rightArrowBtn)}>
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
