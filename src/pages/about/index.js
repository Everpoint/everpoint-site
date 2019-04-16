import React, { Component } from "react";
import PropTypes from "prop-types";

import { Background } from "../../components/MainPageElements/Background";
import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
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
    status: PropTypes.string,
  };

  state = {
    isMobile: false,
  };

  componentDidMount() {
    this.setState({ isMobile: isMobile() });
  }

  render() {
    const { location, news, titles } = this.props;

    const {
      status,
      selectedSectionIndex,
      onSectionChange,
      sectionDirection,
      transitionEnd,
      currentRoute,
      direction,
      disableBackgroundTransition,
    } = this.props;
    const { isMobile } = this.state;

    const section = news[selectedSectionIndex];

    return (
      <Main>
        <Background
          style={{ transition: disableBackgroundTransition && "none" }}
          className={common.russiaBackground}
          status={status}
          location={location}
        />
        <LeftSide className={animation(status, direction)}>
          <Content>
            <H2 as="h1">{titles && titles.find(({ id }) => id === "about").title}</H2>
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
          <RightSide className={animation(status, direction)}>
            <NewsCard
              onSectionChange={onSectionChange}
              direction={sectionDirection}
              {...section}
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
