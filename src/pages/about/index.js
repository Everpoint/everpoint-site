import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import sortBy from "lodash/sortBy";
import { graphql } from "gatsby";

import { Background } from "../../components/NewMainAnimation/Background";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { BackendComponent } from "../../components/Backend/Backend";
import { PaginationSimple } from "../../components/Pagination/Simple/PaginationSimple";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2 } from "../../components/Atoms/Atoms";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { ConstellationPoints } from "../../components/ConstellationPoints/ConstellationPoints";
import { fade, slideUp, transition } from "../../components/Transition/animation";
import { isMobile } from "../../utils/browser";
import styles, { Main, LeftSide, RightSide, NewsContainer } from "../../styles/about";
import { animation } from "../../components/NewMainAnimation/Section";

export class About extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    status: PropTypes.string,
  };

  state = {
    x: 0,
    y: 0,
    isMobile: false,
  };

  componentDidMount() {
    this.setState({ isMobile: isMobile() });
  }

  onTransform = coordinates => this.setState(coordinates);

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

    const { status } = this.props;
    const { x, y, isMobile } = this.state;

    return (
      <MainLayoutConsumer>
        {({
          selectedSectionIndex,
          onSectionChange,
          sectionDirection,
          isSwipeEvent,
          transitionEnd,
        }) => {
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

          const transformToPoints = `translate(${x}px, ${y}px)`;

          const backgroundStyles = transitionEnd
            ? {
                transform: transformToPoints,
                transition: "transform 500ms ease",
              }
            : {};

          return (
            <Main>
              <Background
                className={styles.background}
                status={status}
                location={location}
                style={backgroundStyles}
              />
              <LeftSide className={animation(status)}>
                <H2 as="h1">{markdownRemark && markdownRemark.frontmatter.title}</H2>
                <GoNextLink to="/news" gatsby big>
                  Все комментарии
                </GoNextLink>
              </LeftSide>
              <NewsContainer>
                <ConstellationPoints
                  isMobile={isMobile}
                  transitionEnd={transitionEnd}
                  status={status}
                  x={x}
                  y={y}
                  onTransform={this.onTransform}
                  selectedSectionIndex={selectedSectionIndex}
                  onSectionChange={onSectionChange}
                />
                <RightSide className={animation(status)}>
                  <BackendComponent
                    sections={sections}
                    selectedSectionIndex={selectedSectionIndex}
                  />
                  <NewsCard
                    isSwipeEvent={isSwipeEvent}
                    onSectionChange={onSectionChange}
                    direction={sectionDirection}
                    {...section}
                  />
                  <PaginationSimple
                    pageCount={sections.length}
                    currentPage={selectedSectionIndex + 1}
                    onPageChange={page =>
                      this.onPageChange(page, selectedSectionIndex, onSectionChange)
                    }
                  />
                </RightSide>
              </NewsContainer>
            </Main>
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default About;

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
