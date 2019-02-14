import React, { PureComponent } from "react";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { CenterBlock } from "../../components/CenterBlock/CenterBlock";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { ScrollableTeamMembers } from "../../components/ScrollableTeamMembers/ScrollableTeamMembers";
import { getRouteByLocation, sectionsFromAdditionalMenu } from "../../routes";
import { JobsCard } from "../../components/JobsCard/JobsCard";
import styles from "../../styles/jobs";

export class Jobs extends PureComponent {
  render() {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);
    const sections = sectionsFromAdditionalMenu(currentRoute.additionalMenu);

    return (
      <MainLayoutConsumer>
        {({
          selectedSectionIndex,
          onSectionChange,
          onScrollableRef,
          onLeftSideSectionRef,
          scrollToBlock,
          transitionEnd,
          isSwipeEvent,
          sectionDirection,
          setPreventDefaultTouchmoveEvent,
          disableTransition,
        }) => {
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
                    additionalMenu={currentRoute.additionalMenu}
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
                    disableTransition={disableTransition}
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
        }}
      </MainLayoutConsumer>
    );
  }
}

export default Jobs;
