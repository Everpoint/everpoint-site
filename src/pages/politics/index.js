import React from "react";
import { graphql } from "gatsby";

import {
  PoliticsContainer,
  Introduction,
  MainTitle,
  City,
  Block,
  UpdateDate,
} from "../../styles/politics";
import { isReactElement } from "../../utils/dom";
import { Content, HTMLContent } from "../../cms/common/Content";
import styles from "../../styles/typography";

export const Politics = React.memo(props => {
  const { title, city, introduction, blocks, updateDate } = props;
  const IntroductionContent = isReactElement(introduction) ? Content : HTMLContent;

  return (
    <PoliticsContainer as="main">
      <Block as="header">
        <MainTitle>{title}</MainTitle>
        <City>{city}</City>
        <IntroductionContent
          className={styles.typography}
          Element={Introduction}
          content={introduction}
        />
      </Block>
      {blocks &&
        blocks.map(({ block }, index) => {
          const BlockElement = isReactElement(block) ? Content : HTMLContent;
          return (
            <BlockElement
              key={`politics-block-${index}`}
              className={styles.typography}
              Element={Block}
              content={block}
            />
          );
        })}
      <UpdateDate>{updateDate}</UpdateDate>
    </PoliticsContainer>
  );
});

export default ({ data, ...props }) => {
  const normalizedData = data && data.markdownRemark && data.markdownRemark.frontmatter;
  return <Politics {...props} {...normalizedData} />;
};

export const politicsPageQuery = graphql`
  query politicsPage {
    markdownRemark(frontmatter: { templateKey: { eq: "politics-page" } }) {
      frontmatter {
        title
        city
        updateDate
        introduction
        blocks {
          block
        }
      }
    }
  }
`;
