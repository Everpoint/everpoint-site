import React, { PureComponent } from "react";
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

class MainAnimationBase extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    leftSideClassName: PropTypes.string,
    rightSideClassName: PropTypes.string,
    scrollable: PropTypes.bool,
    withSvg: PropTypes.bool,
    base64styles: PropTypes.string,
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
      base64styles,
      containerClassName,
      willChangeLeftSideClassName,
      willChangeRightSideClassName,
      withRightSideAnimation,
      onLeftSideSectionRef,
      x,
      y,
      disableTransition,
    } = this.props;

    return (
      <MainLayoutConsumer>
        {({ scrollTop, direction, onTransitionEnd, transitionEnd, selectedSectionIndex }) => {
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
                    className={cn(
                      leftSideClassName,
                      slideUp[status],
                      fade[status],
                      transition[status],
                    )}
                  >
                    {leftSide}
                  </LeftSide>
                </WillChange>

                {rightSide && (
                  <RightSide
                    disableTransition={disableTransition}
                    base64styles={base64styles}
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
        }}
      </MainLayoutConsumer>
    );
  }
}

export const MainAnimation = withRouter(MainAnimationBase);
