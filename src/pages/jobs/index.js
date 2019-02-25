import React, { Component } from "react";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { ScrollableTeamMembers } from "../../components/ScrollableTeamMembers/ScrollableTeamMembers";
import { getRouteByLocation } from "../../routes";
import { JobsCard } from "../../components/JobsCard/JobsCard";
import styles from "../../styles/jobs";

export class JobsBase extends Component {
  render() {
    const {
      location,
      selectedSectionIndex,
      onSectionChange,
      onScrollableRef,
      onLeftSideSectionRef,
      scrollToBlock,
      transitionEnd,
      isSwipeEvent,
      sectionDirection,
      setPreventDefaultTouchmoveEvent,
    } = this.props;
    const currentRoute = getRouteByLocation(location);
    const { sections } = currentRoute;
    const section = sections[selectedSectionIndex];
    const selectedId = section && section.id;

    return (
      <MainAnimation
        {...this.props}
        onLeftSideSectionRef={onLeftSideSectionRef}
        containerClassName={styles.jobsContainer}
        leftSide={
          <div
            onTouchStart={() => setPreventDefaultTouchmoveEvent(false)}
            onTouchEnd={() => setPreventDefaultTouchmoveEvent(true)}
          >
            <AdditionalMenu
              selectedId={section && section.id}
              onSectionChange={onSectionChange}
              leftSide
              additionalMenu={sections}
              isOpen={true}
            />
          </div>
        }
        rightSide={
          <CenterBlock ref={onScrollableRef}>
            <ScrollableTeamMembers
              sections={sections}
              transitionEnd={transitionEnd}
              selectedSectionIndex={selectedSectionIndex}
              scrollToBlock={scrollToBlock}
              selectedId={selectedId}
              onSectionChange={onSectionChange}
            />
            <JobsCard
              isSwipeEvent={isSwipeEvent}
              sections={sections}
              selectedSectionIndex={selectedSectionIndex}
              onSectionChange={onSectionChange}
              sectionDirection={sectionDirection}
            />
          </CenterBlock>
        }
      />
    );
  }
}

const Jobs = props => (
  <MainLayoutConsumer>{layoutProps => <JobsBase {...props} {...layoutProps} />}</MainLayoutConsumer>
);

export default Jobs;
