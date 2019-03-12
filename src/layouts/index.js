import React from "react";
import initReactFastclick from "react-fastclick";
import { StaticQuery, graphql } from "gatsby";

import { MainLayout } from "./main";
import LongreadLayout from "./longread";
import { injectGlobals } from "../components/injectGlobals";

initReactFastclick();
injectGlobals();

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
        <MainLayout {...data} {...props}>
          {children}
        </MainLayout>
      )}
    />
  );
};
