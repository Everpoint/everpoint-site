import React, { Component } from "react";
import PropTypes from "prop-types";
import sortBy from "lodash/sortBy";
import debounce from "lodash/debounce";
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
import styles, { Main, LeftSide, RightSide, NewsContainer } from "../../styles/about";
import { animation } from "../../components/MainPageElements/Section";

export class AboutBase extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    status: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.debouncedTransform = debounce(this.transform, 200);
  }

  state = {
    x: 0,
    y: 0,
    isMobile: false,
  };

  points = [];
  fakePoint = null;

  componentDidMount() {
    window.addEventListener("resize", this.debouncedTransform);
    this.setState({ isMobile: isMobile() });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debouncedTransform);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { currentRoute } = this.props;
    const { maxItemCount } = currentRoute;

    if (this.points.length === maxItemCount) {
      return this.transform();
    } else {
      return null;
    }
  }

  componentDidUpdate(
    { selectedSectionIndex: prevSelectedSectionIndex, transitionEnd: prevTransitionEnd },
    { x: prevX, y: prevY },
    snapshot,
  ) {
    const { selectedSectionIndex, transitionEnd } = this.props;

    if (
      (prevSelectedSectionIndex !== selectedSectionIndex && snapshot) ||
      (prevTransitionEnd !== transitionEnd && snapshot)
    ) {
      this.setState(snapshot);
    }
  }

  transform = () => {
    const { x, y } = this.state;
    const { selectedSectionIndex, lastSectionIndex } = this.props;
    const { left: fakeLeft, top: fakeTop } = this.fakePoint.getBoundingClientRect();
    const { left, top } = this.points[
      lastSectionIndex || selectedSectionIndex
    ].getBoundingClientRect();

    const nextX = fakeLeft - left + x;
    const nextY = fakeTop - top + y;

    return { x: Math.round(nextX), y: Math.round(nextY) };
  };

  savePointsRef = ref => {
    const { currentRoute } = this.props;
    const { maxItemCount } = currentRoute;

    if (ref && this.points.length !== maxItemCount) {
      this.points.push(ref);
    }
  };

  onFakePointRef = ref => {
    if (ref) {
      this.fakePoint = ref;
    }
  };

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
      disableBackgroundTransition,
      lastSectionIndex,
    } = this.props;
    const { x, y, isMobile } = this.state;

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
          transitionDuration: disableBackgroundTransition ? "20ms" : "500ms",
        }
      : {
          transitionDuration: disableBackgroundTransition && "20ms",
        };

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
            x={x}
            y={y}
            savePointsRef={this.savePointsRef}
            onFakePointRef={this.onFakePointRef}
            pointsAmount={currentRoute && currentRoute.maxItemCount}
            isMobile={isMobile}
            transitionEnd={transitionEnd}
            status={status}
            selectedSectionIndex={lastSectionIndex || selectedSectionIndex}
            onSectionChange={onSectionChange}
          />
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
