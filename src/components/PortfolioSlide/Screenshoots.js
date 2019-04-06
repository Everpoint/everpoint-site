import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { MultiScreenshots } from "./MultiScreenshots";

import { ScreenshotTransitionGroup, Screenshot } from "./styles";
import {
  screenshotSlideUp,
  screenshotSlideDown,
  scrollScreenshotTransition,
  scrollScreenshotTransitionNext,
} from "../../styles/transition";

export class Screenshoots extends Component {
  static propTypes = {
    isNext: PropTypes.bool,
  };

  render() {
    const { screenshots, isNext, text, status, direction } = this.props;
    const slideY = direction > 0 ? screenshotSlideUp[status] : screenshotSlideDown[status];

    const classNames = [
      slideY,
      isNext ? scrollScreenshotTransitionNext[status] : scrollScreenshotTransition[status],
    ];

    return (
      <ScreenshotTransitionGroup>
        {Array.isArray(screenshots) ? (
          <MultiScreenshots className={cn(...classNames)} alt={text} screenshots={screenshots} />
        ) : (
          <Screenshot className={cn(...classNames)} src={screenshots} alt={text} />
        )}
      </ScreenshotTransitionGroup>
    );
  }
}
