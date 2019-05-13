import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

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
    const { screenshots, isNext, text, status, direction, id } = this.props;
    const slideY = direction > 0 ? screenshotSlideUp[status] : screenshotSlideDown[status];

    const classNames = [
      slideY,
      isNext ? scrollScreenshotTransitionNext[status] : scrollScreenshotTransition[status],
    ];

    return (
      <ScreenshotTransitionGroup>
        <Screenshot
          isMobileMsp={id === "mobileMsp"}
          className={cn(...classNames)}
          src={screenshots}
          alt={text}
        />
      </ScreenshotTransitionGroup>
    );
  }
}
