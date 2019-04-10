import React, { Component } from "react";
import sortBy from "lodash/sortBy";

import { mergedRoutes } from "../routes/utils";
import Mobile from "../components/MobileMainPages";
import { isMobile } from "../utils/browser";
import { MainLayoutProvider } from "../components/MainLayoutProvider/MainLayoutProvider";
import { Helmet } from "../components/Helmet/Helmet";
import { ViewportHeight } from "../components/ViewportHeight/ViewportHeight";
import { Navbar } from "../components/Navbar/Navbar";
import { PageTransition } from "../components/Transition/PageTransition";
import { CookieNotice } from "../components/CookieNotice/CookieNotice";
import styles from "../styles/longread";

export class MainLayout extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { routes: staticRoutes } = nextProps;
    const { routes } = prevState;

    if (routes.length === 0) {
      return {
        routes: mergedRoutes({ routes: staticRoutes, ...nextProps }),
      };
    }

    return null;
  }

  state = {
    isMobile: null,
    routes: [],
  };

  componentDidMount() {
    this.setState({
      isMobile: isMobile(),
    });
  }

  render() {
    const { isMobile, routes } = this.state;
    const { children, location, titles: titlesQl, news, navigate } = this.props;
    const titles = titlesQl ? titlesQl.edges.map(({ node }) => ({ ...node.frontmatter })) : [];

    if (isMobile === null) {
      return null;
    }

    const newsSection =
      news && news.edges
        ? sortBy(
            news.edges.map(({ node }) => ({ ...node.frontmatter, id: node.id })),
            "date",
          ).reverse()
        : [];

    return (
      <>
        <Helmet
          htmlAttributes={{
            class: isMobile && styles.londreadHtmlMobile,
          }}
          bodyAttributes={{
            class: isMobile && styles.londreadBodyMobile,
          }}
        />
        <CookieNotice />
        <ViewportHeight />
        {isMobile ? (
          <Mobile
            routes={routes}
            news={newsSection}
            titles={titles}
            navigate={navigate}
            location={location}
          />
        ) : (
          <MainLayoutProvider routes={routes} news={newsSection} titles={titles}>
            <Navbar location={location} data={titles} routes={routes} />
            <PageTransition location={location} routes={routes}>
              {children}
            </PageTransition>
          </MainLayoutProvider>
        )}
      </>
    );
  }
}
