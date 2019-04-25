import React, { Component } from "react";
import Helmet from "react-helmet";
import cn from "classnames";

import { isMobile, isTablet } from "../utils/browser";
import { getProject, getBackRouteByLocationPathName, mergedRoutes } from "../routes/utils";
import { ViewportHeight } from "../components/ViewportHeight/ViewportHeight";
import { ScrollbarProvider } from "../components/ScrollbarProvider/ScrollbarProvider";
import { LongreadNavbar } from "../components/LongreadNavbar/LongreadNavbar";
import { CookieNotice } from "../components/CookieNotice/CookieNotice";
import styles from "../styles/longread";

export class LongreadLayout extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { routes: staticRoutes, location } = nextProps;
    const { routes: prevRoutes, pages } = prevState;

    const state = {};

    if (prevRoutes.length === 0) {
      return {
        routes: mergedRoutes({ routes: staticRoutes, ...nextProps }),
      };
    }

    if (pages.length === 0) {
      const routes = mergedRoutes({ routes: staticRoutes, ...nextProps });
      const projects = getProject({ allProject: true, routes }).map(({ id }) => `/${id}`);
      const vacancy = getProject({
        allProject: true,
        routes,
        parentId: "jobs",
        childrenId: "vacancy",
      });
      const isPortfolioLongread = projects.some(project =>
        project.includes(location.pathname.replace(/\//g, "")),
      );
      const isVacancyPage = location.pathname.includes("vacancy");

      if (isPortfolioLongread && projects) {
        state.pages = projects;
      } else if (isVacancyPage && vacancy && vacancy.items) {
        state.pages = vacancy.items.map(item => item.longreadLink);
      }
    }

    return state;
  }

  state = {
    routes: [],
    pages: [],
    isTablet: null,
    isMobile: null,
    currentPage: 0,
  };

  componentDidMount() {
    this.setState({
      isMobile: isMobile(),
      isTablet: isTablet(),
    });
  }

  componentDidUpdate({ location: prevLocation }, { pages: prevPages }) {
    const { pages } = this.state;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname || prevPages.length !== pages.length) {
      const currentPage = pages.findIndex(page => {
        const isVacancyPage = location.pathname.includes("vacancy");
        const pathname = decodeURI(location.pathname);
        return isVacancyPage ? page.includes(pathname) : page.includes(pathname.split("/")[1]);
      });

      this.setState({ currentPage: currentPage < 0 ? 0 : currentPage });
    }
  }

  goBack = e => {
    const { routes } = this.state;
    const { location, navigate } = this.props;
    e.preventDefault();

    const isPoliticsPage = location.pathname.indexOf("politics") === 1;
    const isVacancyPage = location.pathname.includes("vacancy");
    const to = getBackRouteByLocationPathName(location.pathname, routes);

    if (isPoliticsPage && location.state && location.state.prevPathname) {
      navigate(location.state.prevPathname);
    } else if (isVacancyPage) {
      navigate(to, {
        state: { scrollTo: "vacancy" },
      });
    } else {
      navigate(to);
    }
  };

  render() {
    const { pages, isMobile, isTablet, currentPage, routes } = this.state;
    const { children, location, navigate } = this.props;

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
          currentPage={currentPage}
          pages={pages}
          isMobile={isMobile}
          nativeScrollbar={isMobile || isTablet}
          goBack={this.goBack}
          location={location}
        />
        {React.cloneElement(children, {
          routes,
          isMobile,
          isTablet,
          isMobileOrTablet: isMobile || isTablet,
        })}
        <CookieNotice navigate={navigate} location={location} />
      </ScrollbarProvider>
    );
  }
}
