import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { MultiScreenshots } from "./MultiScreenshots";
import { fade } from "../Transition/animation";

import { ScreenshotTransitionGroup, Screenshot } from "./styles";
import {
  slideLeft,
  slideRight,
  transition,
  screenshotSlideUp,
  screenshotSlideDown,
  scrollScreenshotTransition,
  scrollScreenshotTransitionNext,
} from "../../styles/transition";

export class Screenshoots extends Component {
  static propTypes = {
    scrollEvent: PropTypes.bool,
    isNext: PropTypes.bool,
  };

  render() {
    const {
      screenshots,
      isNext,
      scrollEvent,
      text,
      status,
      direction,
    } = this.props;
    const slideY = direction > 0 ? screenshotSlideUp[status] : screenshotSlideDown[status];
    const slideX = direction > 0 ? slideLeft[status] : slideRight[status];

    const classNames = scrollEvent
      ? [
          slideY,
          isNext ? scrollScreenshotTransitionNext[status] : scrollScreenshotTransition[status],
        ]
      : [slideX, fade[status], transition[status]];

    return (
      <ScreenshotTransitionGroup>
        {Array.isArray(screenshots) ? (
          <MultiScreenshots
            scrollEvent={scrollEvent}
            className={cn(...classNames)}
            alt={text}
            screenshots={screenshots}
          />
        ) : (
          <Screenshot
            className={cn(...classNames)}
            src={screenshots}
            alt={text}
          />
        )}
      </ScreenshotTransitionGroup>
    );
  }
}
