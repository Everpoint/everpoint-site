import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Background as BackgroundBlock } from "../Background/Background";
import { fade, scaleIn, scaleOut, transition } from "../Transition/animation";
import styles from "../Background/styles";
import { getBackground, getBackgroundStyle } from "../Background/getBackground";
import { Resizer } from "../Background/Resizer";

export class Background extends Component {
  static propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    direction: PropTypes.number,
    backgroundImage: PropTypes.string,
    backgroundClassName: PropTypes.string,
  };

  shouldComponentUpdate(
    {
      status: nextStatus,
      x: nextX,
      y: nextY,
      backgroundImage: nextBackgroundImage,
      transitionEnd: nextTransitionEnd,
      backgroundClassName: nextBackgroundClassName,
    },
    nextState,
  ) {
    const {
      status,
      x,
      y,
      backgroundImage,
      transitionEnd,
      backgroundClassName,
    } = this.props;

    return (
      transitionEnd !== nextTransitionEnd ||
      status !== nextStatus ||
      x !== nextX ||
      y !== nextY ||
      backgroundImage !== nextBackgroundImage ||
      backgroundClassName !== nextBackgroundClassName
    );
  }

  render() {
    const {
      x,
      y,
      direction,
      transitionEnd,
      withSvg,
      status,
      backgroundClassName,
      backgroundImage,
      isAboutPage,
    } = this.props;
    // about page slider **
    const transformToPoints = `translate(${x}px, ${y}px)`;
    const aboutBgStyle =
      transitionEnd && isAboutPage()
        ? {
            transform: transformToPoints,
            transition: "transform 500ms ease",
          }
        : {};

    return (
      <>
        <BackgroundBlock
          style={{
            ...aboutBgStyle,
            backgroundImage: `url(${backgroundImage || getBackground(this.props)})`,
          }}
          className={cn(
            direction > 0 ? scaleIn[status] : scaleOut[status],
            fade[status],
            transition[status],
            styles.default,
            getBackgroundStyle(this.props),
            backgroundClassName,
          )}
        />
        {withSvg && transitionEnd && (
          <BackgroundBlock>
            <Resizer />
          </BackgroundBlock>
        )}
      </>
    );
  }
}
