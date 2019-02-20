import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import withRouter from "../../hoc/withRouter";
import { Background } from "./Background";
import { MainLayoutConsumer } from "../MainLayoutProvider/MainLayoutProvider";
import { WillChange } from "./WillChange";
import { fade, slideUp, transition } from "../Transition/animation";
import { Content } from "../Main/Content";
import { LeftSide } from "../Main/LeftSide";
import { RightSide } from "./RightSide";
import { FullViewportContainer } from "../../styles/main";
import { common } from "../../styles/common";

class MainAnimationBase extends Component {
  static propTypes = {
    status: PropTypes.string,
    leftSideClassName: PropTypes.string,
    rightSideClassName: PropTypes.string,
    scrollable: PropTypes.bool,
    withSvg: PropTypes.bool,
    backgroundImage: PropTypes.string,
    containerClassName: PropTypes.string,
    leftSideWillChangeClassName: PropTypes.string,
    willChangeLeftSideClassName: PropTypes.string,
    willChangeRightSideClassName: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    backgroundClassName: PropTypes.string,
    withRightSideAnimation: PropTypes.bool,
    onLeftSideSectionRef: PropTypes.func,
    disableTransition: PropTypes.bool,
    isMobileOrTablet: PropTypes.bool,
  };

  static defaultProps = {
    withRightSideAnimation: true,
  };

  render() {
    const {
      status,
      leftSide,
      leftSideClassName,
      rightSide,
      rightSideClassName,
      children,
      backgroundImage,
      containerClassName,
      willChangeLeftSideClassName,
      willChangeRightSideClassName,
      withRightSideAnimation,
      onLeftSideSectionRef,
      x,
      y,
      disableTransition,
      isMobileOrTablet,
      scrollTop,
      direction,
      onTransitionEnd,
      transitionEnd,
      selectedSectionIndex,
      backgroundClassName,
    } = this.props;

    const transform = `translateY(${scrollTop}px)`;

    return (
      <FullViewportContainer>
        <WillChange
          fullViewport
          style={{
            transform,
            willChange: transitionEnd && "transform",
            overflow: transitionEnd ? "hidden" : "visible",
          }}
        >
          <Background
            {...this.props}
            backgroundClassName={backgroundClassName}
            transitionEnd={transitionEnd}
            onTransitionEnd={onTransitionEnd}
            disableTransition={disableTransition}
            direction={direction}
          />
        </WillChange>
        <Content className={cn(containerClassName, common.container)}>
          <WillChange
            className={willChangeLeftSideClassName}
            left
            style={{ transform, willChange: transitionEnd && "transform" }}
          >
            <LeftSide
              disableTransition={disableTransition}
              ref={onLeftSideSectionRef}
              className={cn(leftSideClassName, slideUp[status], fade[status], transition[status])}
            >
              {leftSide}
            </LeftSide>
          </WillChange>

          {rightSide && (
            <RightSide
              isMobileOrTablet={isMobileOrTablet}
              disableTransition={disableTransition}
              backgroundImage={backgroundImage}
              x={x}
              y={y}
              transitionEnd={transitionEnd}
              selectedSectionIndex={selectedSectionIndex}
              status={status}
              willChangeRightSideClassName={willChangeRightSideClassName}
              withRightSideAnimation={withRightSideAnimation}
              rightSideClassName={rightSideClassName}
            >
              {rightSide}
            </RightSide>
          )}
          {children}
        </Content>
      </FullViewportContainer>
    );
  }
}

export const MainAnimationWithLayout = props => (
  <MainLayoutConsumer>
    {layoutProps => <MainAnimationBase {...props} {...layoutProps} />}
  </MainLayoutConsumer>
);

export const MainAnimation = withRouter(MainAnimationWithLayout);
