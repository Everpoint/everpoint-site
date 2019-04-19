import React, { Component } from "react";

import { Background } from "../../components/MainPageElements/Background";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { ScrollableTeamMembers } from "../../components/ScrollableTeamMembers/ScrollableTeamMembers";
import { getRouteByLocation } from "../../routes/utils";
import styles, {
  Main,
  BackgroundWrapper,
  LeftSide,
  RightSide,
  RightSideContent,
  WillChange,
} from "../../styles/jobs";
import { animation } from "../../components/MainPageElements/Section";

export class JobsBase extends Component {
  state = {
    prevScrollTop: 0,
  };

  componentDidUpdate({ transitionEnd: prevTransitionEnd }, prevState) {
    const { transitionEnd, scrollTop } = this.props;

    if (prevTransitionEnd !== transitionEnd) {
      this.setState({ prevScrollTop: scrollTop });
    }
  }

  render() {
    const { prevScrollTop } = this.state;
    const {
      location,
      selectedSectionIndex,
      onSectionChange,
      onScrollableRef,
      onLeftSideSectionRef,
      transitionEnd,
      scrollTop,
      status,
      routes,
      direction,
    } = this.props;
    const currentRoute = getRouteByLocation(location, routes);
    const { sections } = currentRoute;
    const section = sections[selectedSectionIndex];

    const transform = `translateY(${scrollTop}px)`;

    return (
      <Main>
        <BackgroundWrapper style={{ transform }}>
          <Background className={styles.background} status={status} location={location} />
        </BackgroundWrapper>
        <WillChange style={{ transform }} ref={onLeftSideSectionRef}>
          <LeftSide className={animation(status, direction)}>
            <AdditionalMenu
              className={styles.menu}
              selectedId={section && section.id}
              onSectionChange={onSectionChange}
              leftSide
              additionalMenu={sections}
              isOpen={true}
            />
          </LeftSide>
        </WillChange>
        <RightSide className={animation(status, direction)}>
          <RightSideContent
            ref={onScrollableRef}
            style={{
              transform: !transitionEnd && `translateY(-${prevScrollTop}px)`,
            }}
          >
            <ScrollableTeamMembers
              sections={sections}
              transitionEnd={transitionEnd}
              onSectionChange={onSectionChange}
            />
          </RightSideContent>
        </RightSide>
      </Main>
    );
  }
}

const Jobs = props => (
  <MainLayoutConsumer>{layoutProps => <JobsBase {...props} {...layoutProps} />}</MainLayoutConsumer>
);

export default Jobs;
