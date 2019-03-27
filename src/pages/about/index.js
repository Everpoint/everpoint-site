import React, { Component } from "react";
import PropTypes from "prop-types";
import sortBy from "lodash/sortBy";
import { graphql } from "gatsby";

import { Background } from "../../components/MainPageElements/Background";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { BackendComponent } from "../../components/Backend/Backend";
import { PaginationSimple } from "../../components/Pagination/Simple/PaginationSimple";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { H2 } from "../../components/Atoms/Atoms";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { ConstellationPoints } from "../../components/ConstellationPoints/ConstellationPoints";
import { isMobile } from "../../utils/browser";
import { Main, LeftSide, Content, RightSide, NewsContainer } from "../../styles/about";
import { common } from "../../styles/common";
import { animation } from "../../components/MainPageElements/Section";

export class AboutBase extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    status: PropTypes.string,
  };

  state = {
    isMobile: false,
  };

  componentDidMount() {
    this.setState({ isMobile: isMobile() });
  }

  onPageChange = (page, prevPage, onSectionChange) => {
    if (page > prevPage) {
      onSectionChange({ value: 1, isSwipeEvent: true });
    } else {
      onSectionChange({ value: -1, isSwipeEvent: true });
    }
  };

  render() {
    const { data, location } = this.props;

    const allMarkdownRemark = data.allMarkdownRemark;

    const {
      status,
      selectedSectionIndex,
      onSectionChange,
      sectionDirection,
      isSwipeEvent,
      transitionEnd,
      currentRoute,
      lastSectionIndex,
      disableBackgroundTransition,
    } = this.props;
    const { isMobile } = this.state;

    const sections =
      allMarkdownRemark && allMarkdownRemark.edges
        ? sortBy(
            allMarkdownRemark.edges.map(({ node }) => ({ ...node.frontmatter, id: node.id })),
            "date",
          ).reverse()
        : [];

    const section =
      allMarkdownRemark && allMarkdownRemark.edges[selectedSectionIndex]
        ? sections[selectedSectionIndex]
        : {
            title: !allMarkdownRemark ? "Список пуст" : "Пусто",
            description: !allMarkdownRemark
              ? "Заполните статьи в системе управления содержимым"
              : "Заполните статью в системе управления содержимым",
          };

    const markdownRemark = data.markdownRemark;

    return (
      <Main>
        <Background
          style={{ transition: disableBackgroundTransition && "none" }}
          className={common.russiaBackground}
          status={status}
          location={location}
        />
        <LeftSide className={animation(status)}>
          <Content>
            <H2 as="h1">{markdownRemark && markdownRemark.frontmatter.title}</H2>
            <GoNextLink to="/news" gatsby big>
              Все комментарии
            </GoNextLink>
          </Content>
          <ConstellationPoints
            pointsAmount={currentRoute && currentRoute.maxItemCount}
            isMobile={isMobile}
            transitionEnd={transitionEnd}
            status={status}
            selectedSectionIndex={selectedSectionIndex}
            onSectionChange={onSectionChange}
          />
        </LeftSide>
        <NewsContainer>
          <RightSide className={animation(status)}>
            <BackendComponent
              sections={sections}
              selectedSectionIndex={lastSectionIndex || selectedSectionIndex}
            />
            <NewsCard
              isSwipeEvent={isSwipeEvent}
              onSectionChange={onSectionChange}
              direction={sectionDirection}
              {...section}
            />
            <PaginationSimple
              pageCount={sections.length}
              currentPage={(lastSectionIndex || selectedSectionIndex) + 1}
              onPageChange={page => this.onPageChange(page, selectedSectionIndex, onSectionChange)}
            />
          </RightSide>
        </NewsContainer>
      </Main>
    );
  }
}

export const AboutWithLayout = props => (
  <MainLayoutConsumer>
    {layoutProps => <AboutBase {...props} {...layoutProps} />}
  </MainLayoutConsumer>
);

export default AboutWithLayout;

export const aboutPageQuery = graphql`
  query LimitNews {
    allMarkdownRemark(
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
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
