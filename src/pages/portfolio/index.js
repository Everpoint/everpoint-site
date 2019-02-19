import React, { Component } from "react";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { getRouteByLocation, sectionsFromAdditionalMenu } from "../../routes";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { PortfolioSlide } from "../../components/PortfolioSlide/PortfolioSlide";
import styles from "../../styles/portfolio";
import { MobileTitle } from "../../components/PortfolioSlide/styles";
import withRouter from "../../hoc/withRouter";

class PortfolioBase extends Component {
  render() {
    const {
      location,
      navigate,
      disableTransition,
      isPortfolioPage,
      selectedSectionIndex,
      onSectionChange,
      sectionDirection,
      isSwipeEvent,
      scrollTop,
      transitionEnd,
    } = this.props;
    const currentRoute = getRouteByLocation(location);
    const sections = sectionsFromAdditionalMenu(currentRoute.additionalMenu);
    const section = sections[selectedSectionIndex];

    return (
      <MainAnimation
        {...this.props}
        backgroundClassName={styles.zoomRussia}
        disableTransition={disableTransition}
        willChangeLeftSideClassName={styles.portfolioLeftSide}
        leftSide={
          <>
            <MobileTitle>{section && section.parentTitle}</MobileTitle>
            <AdditionalMenu
              isPortfolioPage={isPortfolioPage()}
              className={styles.menu}
              selectedId={section && section.id}
              onSectionChange={onSectionChange}
              leftSide
              additionalMenu={currentRoute.additionalMenu}
              isOpen={true}
            />
          </>
        }
        containerClassName={styles.portfolioContainer}
        rightSide={
          <PortfolioSlide
            transitionEnd={transitionEnd}
            scrollTop={scrollTop}
            isSwipeEvent={isSwipeEvent}
            disableTransition={disableTransition}
            sectionDirection={sectionDirection}
            sections={sections}
            selectedSectionIndex={selectedSectionIndex}
            onSectionChange={onSectionChange}
            navigate={navigate}
            {...section}
          />
        }
      />
    );
  }
}

export const PortfolioWithLayout = props => (
  <MainLayoutConsumer>
    {layoutProps => <PortfolioBase {...props} {...layoutProps} />}
  </MainLayoutConsumer>
);

const Portfolio = withRouter(PortfolioWithLayout);

export default Portfolio;
