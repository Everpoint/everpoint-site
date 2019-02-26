import React, { Component } from "react";

import { Background } from "../../components/MainPageElements/Background";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { getRouteByLocation } from "../../routes";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { PortfolioSlide } from "../../components/PortfolioSlide/PortfolioSlide";
import styles, { Main, LeftSide, Rightside } from "../../styles/portfolio";
import { MobileTitle } from "../../components/PortfolioSlide/styles";
import withRouter from "../../hoc/withRouter";
import { animation } from "../../components/MainPageElements/Section";

class PortfolioBase extends Component {
  render() {
    const {
      location,
      navigate,
      isPortfolioPage,
      selectedSectionIndex,
      onSectionChange,
      sectionDirection,
      isSwipeEvent,
      scrollTop,
      transitionEnd,
      direction,
      status,
      disableBackgroundTransition,
    } = this.props;
    const currentRoute = getRouteByLocation(location);
    const { sections } = currentRoute;
    const section = sections[selectedSectionIndex];

    return (
      <Main>
        <Background
          style={{ transitionDuration: disableBackgroundTransition && "20ms" }}
          status={status}
          location={location}
        />
        <LeftSide className={animation(status)}>
          <MobileTitle>{section && section.parentTitle}</MobileTitle>
          <AdditionalMenu
            isPortfolioPage={isPortfolioPage()}
            className={styles.menu}
            selectedId={section && section.id}
            onSectionChange={onSectionChange}
            leftSide
            additionalMenu={sections}
            isOpen={true}
          />
        </LeftSide>
        <Rightside className={animation(status)}>
          <PortfolioSlide
            transitionEnd={transitionEnd}
            scrollTop={scrollTop}
            isSwipeEvent={isSwipeEvent}
            sectionDirection={sectionDirection}
            direction={direction}
            sections={sections}
            selectedSectionIndex={selectedSectionIndex}
            onSectionChange={onSectionChange}
            navigate={navigate}
            {...section}
          />
        </Rightside>
      </Main>
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
