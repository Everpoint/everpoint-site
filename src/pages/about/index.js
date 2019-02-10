import React, { Component } from "react";
import PropTypes from "prop-types";
import sortBy from "lodash/sortBy";
import { graphql } from "gatsby";
import cn from "classnames";

import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { BackendComponent } from "../../components/Backend/Backend";
import { Bullets } from "../../components/Bullets/Bullets";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2 } from "../../components/Atoms/Atoms";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { ConstellationPoints } from "../../components/ConstellationPoints/ConstellationPoints";
import { fade, slideUp, transition } from "../../components/Transition/animation";
import styles, { NewsContainer, WillChangeNews } from "../../styles/about";

export class About extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    status: PropTypes.string,
    disableTransition: PropTypes.bool,
  };

  state = {
    x: 0,
    y: 0,
  };

  onTransform = coordinates => this.setState(coordinates);

  render() {
    const { data } = this.props;

    const allMarkdownRemark = data.allMarkdownRemark;

    const { status, disableTransition } = this.props;
    const { x, y } = this.state;

    return (
      <MainLayoutConsumer>
        {({
          selectedSectionIndex,
          onSectionChange,
          sectionDirection,
          isSwipeEvent,
          transitionEnd,
        }) => {
          const section =
            allMarkdownRemark && allMarkdownRemark.edges[selectedSectionIndex]
              ? sortBy(
                  allMarkdownRemark.edges.map(({ node }) => ({...node.frontmatter, id: node.id})),
                  "date",
                ).reverse()[selectedSectionIndex]
              : {
                  title: !allMarkdownRemark ? "Список пуст" : "Пусто",
                  description: !allMarkdownRemark
                    ? "Заполните статьи в системе управления содержимым"
                    : "Заполните статью в системе управления содержимым",
                };

          const sections =
            allMarkdownRemark && allMarkdownRemark.edges ? allMarkdownRemark.edges : [];

          return (
            <MainAnimation
              {...this.props}
              disableTransition={disableTransition}
              withRightSideAnimation={false}
              x={x}
              y={y}
              backgroundClassName={styles.isAboutSlide}
              leftSide={
                <>
                  <H2 as="h1">СМИ о нас</H2>
                  <GoNextLink to="/news" gatsby>
                    Все комментарии
                  </GoNextLink>
                </>
              }
              containerClassName={styles.aboutContainer}
              rightSide={
                <NewsContainer>
                  <ConstellationPoints
                    disableTransition={disableTransition}
                    transitionEnd={transitionEnd}
                    status={status}
                    x={x}
                    y={y}
                    onTransform={this.onTransform}
                    selectedSectionIndex={selectedSectionIndex}
                  />
                  <WillChangeNews
                    disableTransition={disableTransition}
                    className={cn(slideUp[status], fade[status], transition[status])}
                  >
                    <BackendComponent
                      sections={sections}
                      selectedSectionIndex={selectedSectionIndex}
                    />
                    <NewsCard
                      disableTransition={disableTransition}
                      isSwipeEvent={isSwipeEvent}
                      onSectionChange={onSectionChange}
                      direction={sectionDirection}
                      {...section}
                    />
                    <Bullets
                      sections={sections}
                      selectedSectionIndex={selectedSectionIndex}
                      goPrev={() => onSectionChange({ value: -1, isSwipeEvent: true })}
                      goNext={() => onSectionChange({ value: 1, isSwipeEvent: true })}
                    />
                  </WillChangeNews>
                </NewsContainer>
              }
            />
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
  }
`;
