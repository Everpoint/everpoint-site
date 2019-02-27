import React, { Component } from "react";
import cn from "classnames";

import { isMobile, isTablet } from "../utils/browser";
import { getProject, getBackRouteByLocationPathName } from "../routes";
import { ViewportHeight } from "../components/ViewportHeight/ViewportHeight";
import { Helmet } from "../components/Helmet/Helmet";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import { LongreadNavbar } from "../components/LongreadNavbar/LongreadNavbar";
import styles from "../styles/longread";

class LongredLayout extends Component {
  state = {
    projects: null,
    isTablet: null,
    isMobile: null,
  };

  componentDidMount() {
    const { location } = this.props;

    const prevPage = getBackRouteByLocationPathName(location.pathname);

    if (prevPage.includes("portfolio")) {
      const projects = getProject({ allProject: true }).map(({ id }) => id);
      this.setState({ projects });
    }

    this.setState({ isMobile: isMobile(), isTablet: isTablet() });
  }

  render() {
    const { projects, isMobile, isTablet } = this.state;
    const { children, location } = this.props;

    if (isTablet === null && isMobile === null) {
      return <div style={{ display: "none" }} />;
    }

    return (
      <ScrollbarProvider
        nativeScrollbar={isMobile || isTablet}
        location={location}
        className={styles.scrollbar}
        withScrollbarY
      >
        <Helmet
          htmlAttributes={{
            class: cn(isMobile || isTablet ? styles.londreadHtmlMobile : styles.longreadHtml),
          }}
          bodyAttributes={{
            class: cn(isMobile || isTablet ? styles.londreadBodyMobile : styles.longreadBody),
          }}
        />
        <ViewportHeight />
        <LongreadNavbar
          nativeScrollbar={isMobile || isTablet}
          projects={projects}
          pathname={location.pathname}
        />
        {React.cloneElement(children, {
          isMobile,
          isTablet,
          isMobileOrTablet: isMobile || isTablet,
        })}
      </ScrollbarProvider>
    );
  }
}

export default LongredLayout;
