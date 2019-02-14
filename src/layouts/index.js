import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

import { Helmet } from "../components/Helmet/Helmet";
import LongreadLayout from "./longread";
import { MainLayoutProvider } from "../components/MainLayoutProvider/MainLayoutProvider";
import { injectGlobals } from "../components/injectGlobals";
import { PageTransition } from "../components/Transition/PageTransition";
import { Navbar } from "../components/Navbar/Navbar";
import { ViewportHeight } from "../components/ViewportHeight/ViewportHeight";

injectGlobals();

class Layout extends Component {
  render() {
    const { children, location, allMarkdownRemark } = this.props;

    return (
      <MainLayoutProvider>
        <Helmet />
        <ViewportHeight />
        <Navbar location={location} data={allMarkdownRemark ? allMarkdownRemark.edges : []} />
        <PageTransition location={location}>{children}</PageTransition>
      </MainLayoutProvider>
    );
  }
}

export default ({ children, pageContext, ...props }) => {
  if (pageContext.layout === "longread") {
    return <LongreadLayout {...props}>{children}</LongreadLayout>;
  }
  return (
    <StaticQuery
      query={graphql`
        query Pages {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { in: ["about-page", "contact-page"] } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  id
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout {...data} {...props}>
          {children}
        </Layout>
      )}
    />
  );
};
