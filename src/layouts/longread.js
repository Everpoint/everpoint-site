import React, { Component } from "react";
import cn from "classnames";

import { isMobile } from "../utils/browser";
import { getProject, getBackRouteByLocationPathName } from "../routes";
import { ViewportHeight } from "../components/ViewportHeight/ViewportHeight";
import { Helmet } from "../components/Helmet/Helmet";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import { LongreadNavbar } from "../components/LongreadNavbar/LongreadNavbar";
import styles from "../styles/longread";

class LongredLayout extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { isMobile: prevIsMobile } = prevState;

    if (prevIsMobile === null) {
      return {
        isMobile: isMobile(),
      };
    }

    return null;
  }

  state = {
    projects: null,
    isMobile: null,
  };

  componentDidMount() {
    const { location } = this.props;

    const prevPage = getBackRouteByLocationPathName(location.pathname);

    if (prevPage.includes("portfolio")) {
      const projects = getProject({ allProject: true }).map(({ id }) => id);
      this.setState({ projects });
    }
  }

  render() {
    const { projects, isMobile } = this.state;
    const { children, location } = this.props;

    return (
      <ScrollbarProvider
        native={isMobile}
        location={location}
        className={styles.scrollbar}
        withScrollbarY
      >
        <Helmet
          bodyAttributes={{
            class: cn({ [styles.londreadBodyMobile]: isMobile }),
          }}
        />
        <ViewportHeight />
        <LongreadNavbar native={isMobile} projects={projects} pathname={location.pathname} />
        {children}
      </ScrollbarProvider>
    );
  }
}

export default LongredLayout;
