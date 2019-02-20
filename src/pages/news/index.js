import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { ScrollbarConsumer } from "../../components/ScrollbarProvider/ScrollbarProvider";
import { PaginationFull } from "../../components/Pagination/Full/PaginationFull";
import { PaginationSimple } from "../../components/Pagination/Simple/PaginationSimple";
import { isMobile } from "../../utils/browser";
import { rowColumns } from "../../utils/array";
import { H2 } from "../../components/Typography/Headlines";
import { Section as Main } from "../../components/Elements/Section";
import { Header } from "../../components/News/Header/Header";
import { Article } from "../../components/News/Article/Article";
import styles, { Section, Column } from "../../styles/news";

const articlesPerPage = 8;

class NewsBase extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  state = {
    columnsCount: 2,
    currentPage: 1,
    columns: [],
    pageCount: 0,
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    const columnsCount = isMobile() ? 1 : 2;
    const { currentPage } = this.state;
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const AllNews = allMarkdownRemark ? allMarkdownRemark.edges : [];

    const news = this.pagination(currentPage);
    const pageCount = Math.ceil(AllNews.length / articlesPerPage);
    const columns = rowColumns(news, columnsCount);

    this.setState({ pageCount, columns, columnsCount });
  };

  pagination = page => {
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const AllNews = allMarkdownRemark ? allMarkdownRemark.edges : [];

    const from = articlesPerPage * (page - 1);
    const to = from + articlesPerPage;

    return AllNews.slice(from, to);
  };

  onPageChange = currentPage => {
    const { columnsCount } = this.state;
    const { scrollbar } = this.props;

    const items = this.pagination(currentPage);
    const columns = rowColumns(items, columnsCount);

    this.setState(
      {
        currentPage,
        columns,
      },
      () => {
        if (scrollbar) {
          scrollbar.scrollTo(0, 0, 0);
        } else {
          window.scrollTo(0, 0);
        }
      },
    );
  };

  render() {
    const { columnsCount, columns, currentPage, pageCount } = this.state;
    const { data } = this.props;
    const allMarkdownRemark = data.allMarkdownRemark;
    const markdownRemark = data.markdownRemark;

    return (
      <>
        <Header title={markdownRemark && markdownRemark.frontmatter.title} />
        <Main as="main" withoutPaddingBottom>
          <Section as="section">
            {!allMarkdownRemark && <H2>Список статей пуст</H2>}
            {columns.map((col, index) => (
              <Column key={index} oneColumn={columnsCount === 1}>
                {!allMarkdownRemark && <H2>Список статей пуст</H2>}
                {col.map(({ node }) => (
                  <Article key={node.id} {...node.frontmatter} />
                ))}
              </Column>
            ))}
          </Section>
          {pageCount > 1 && (
            <>
              <PaginationFull
                className={styles.paginationFull}
                currentPage={currentPage}
                pageCount={pageCount}
                slots={7}
                onPageChange={this.onPageChange}
              />
              <PaginationSimple
                pageCount={pageCount}
                currentPage={currentPage}
                onPageChange={this.onPageChange}
                className={styles.paginationSimple}
              />
            </>
          )}
        </Main>
      </>
    );
  }
}

const News = props => (
  <ScrollbarConsumer>
    {({ scrollbar }) => <NewsBase scrollbar={scrollbar} {...props} />}
  </ScrollbarConsumer>
);

export default News;

export const newsPageQuery = graphql`
  query AllNews {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: [DESC] }
      filter: { frontmatter: { templateKey: { eq: "about" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            logo
            title
            date(formatString: "DD.MM.YYYY")
            description
            link
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
