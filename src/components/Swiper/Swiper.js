import React, { Component } from "react";
import PropTypes from "prop-types";
// https://github.com/dogfessional/react-swipeable
import Swipeable from "react-swipeable";

import { getElementWidthAndHeight } from "../../utils/dom";

export class Swiper extends Component {
  static propTypes = {
    onSwiped: PropTypes.func,
  };

  swipeableNode = null;

  direction(deltaX, deltaY) {
    const x = deltaX > 0;
    const y = deltaY > 0;
    return {
      isLeft: x,
      isRight: !x,
      isUp: y,
      isDown: !y,
    };
  }

  // ratio of percentage
  ratioDistance = (deltaX, deltaY) => {
    if (!this.swipeableNode) {
      return {
        xRatio: null,
        yRatio: null,
      };
    }

    const { width, height } = getElementWidthAndHeight(this.swipeableNode);

    const xRatio = (Math.abs(deltaX) * 100) / width;
    const yRatio = (Math.abs(deltaY) * 100) / height;

    return {
      xRatio,
      yRatio,
    };
  };

  swiped = (event, deltaX, deltaY, isFlick, velocity) => {
    const { onSwiped } = this.props;

    this.ratioDistance(deltaX, deltaY);
    onSwiped &&
      onSwiped({
        event,
        deltaX,
        deltaY,
        isFlick,
        velocity,
        ...this.direction(deltaX, deltaY),
        ...this.ratioDistance(deltaX, deltaY),
      });
  };

  onSwiperRef = ref => {
    if (ref) {
      this.swipeableNode = ref;
    }
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <Swipeable {...props} innerRef={this.onSwiperRef} onSwiped={this.swiped}>
        {children}
      </Swipeable>
    );
  }
}
