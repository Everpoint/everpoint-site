import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { RightSide as RightSideBlock } from "../Main/RightSide";
import { WillChange } from "./WillChange";
import { fade, slideUp, transition } from "../Transition/animation";

export class RightSide extends Component {
  static propTypes = {
    status: PropTypes.string,
    willChangeRightSideClassName: PropTypes.string,
    rightSideClassName: PropTypes.string,
    withRightSideAnimation: PropTypes.bool,
    selectedSectionIndex: PropTypes.number,
    transitionEnd: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    backgroundImage: PropTypes.string,
    isMobileOrTablet: PropTypes.bool,
  };

  shouldComponentUpdate(
    {
      status: nextStatus,
      selectedSectionIndex: nextSelectedSectionIndex,
      transitionEnd: nextTransitionEnd,
      x: nextX,
      y: nextY,
      backgroundImage: nextBackgroundImage,
      isMobileOrTablet: nextIsMobileOrTablet,
    },
    nextState,
  ) {
    const {
      status,
      selectedSectionIndex,
      transitionEnd,
      x,
      y,
      backgroundImage,
      isMobileOrTablet,
    } = this.props;

    return (
      status !== nextStatus ||
      selectedSectionIndex !== nextSelectedSectionIndex ||
      transitionEnd !== nextTransitionEnd ||
      x !== nextX ||
      y !== nextY ||
      backgroundImage !== nextBackgroundImage ||
      isMobileOrTablet !== nextIsMobileOrTablet
    );
  }

  render() {
    const {
      status,
      willChangeRightSideClassName,
      rightSideClassName,
      withRightSideAnimation,
      children,
    } = this.props;

    return (
      <WillChange className={willChangeRightSideClassName}>
        <RightSideBlock
          className={cn(
            rightSideClassName,
            withRightSideAnimation && slideUp[status],
            withRightSideAnimation && fade[status],
            withRightSideAnimation && transition[status],
          )}
        >
          {children}
        </RightSideBlock>
      </WillChange>
    );
  }
}
