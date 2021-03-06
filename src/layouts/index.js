import React, { Component } from "react";
import initReactFastclick from "react-fastclick";
import { StaticQuery, graphql } from "gatsby";

import { routes } from "../routes";
import { MainLayout } from "./main";
import { LongreadLayout } from "./longread";
import { injectGlobals } from "../components/injectGlobals";

initReactFastclick();
injectGlobals();

class Index extends Component {
  render() {
    const { children, pageContext, ...props } = this.props;

    return (
      <StaticQuery
        query={graphql`
          {
            titles: allMarkdownRemark(
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
            news: allMarkdownRemark(
              sort: { fields: [frontmatter___isVisible, frontmatter___date], order: [DESC, DESC] }
              filter: { frontmatter: { templateKey: { eq: "about" } } }
              limit: 5
            ) {
              totalCount
              edges {
                node {
                  id
                  frontmatter {
                    logo
                    title
                    date
                    description
                    link
                    isVisible
                  }
                }
              }
            }
            vacancy: allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "vacancy" }, isVisible: { eq: true } } }
            ) {
              totalCount
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    name
                    avatar
                  }
                }
              }
            }
            employees: allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "our-employees" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    employees {
                      name
                      isVisible
                      avatar
                      position
                      description
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          if (pageContext.layout === "longread") {
            return (
              <LongreadLayout routes={routes} {...data} {...props}>
                {children}
              </LongreadLayout>
            );
          }

          return (
            <MainLayout routes={routes} {...data} {...props}>
              {children}
            </MainLayout>
          );
        }}
      />
    );
  }
}

export default Index;
