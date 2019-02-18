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
    disableTransition: PropTypes.bool,
  };

  shouldComponentUpdate(
    {
      status: nextStatus,
      x: nextX,
      y: nextY,
      backgroundImage: nextBackgroundImage,
      disableTransition: nextDisableTransition,
    },
    nextState,
  ) {
    const { status, x, y, backgroundImage, disableTransition } = this.props;
    return (
      status !== nextStatus ||
      x !== nextX ||
      y !== nextY ||
      backgroundImage !== nextBackgroundImage ||
      disableTransition !== nextDisableTransition
    );
  }

  render() {
    const {
      x,
      y,
      direction,
      transitionEnd,
      onTransitionEnd,
      withSvg,
      status,
      backgroundClassName,
      backgroundImage,
      disableTransition,
      ...props
    } = this.props;
    // about page slider
    const transformToPoints = `translate(${x}px, ${y}px)`;
    const aboutBgStyle = transitionEnd
      ? {
          transform: transformToPoints,
          transition: "transform 500ms cubic-bezier(0.2, 1, 0.6, 1) 0s",
        }
      : {};
    const withChangeBase64ToSvg = withSvg ? !transitionEnd : true;

    return (
      <>
        {withChangeBase64ToSvg && (
          <BackgroundBlock
            style={{
              ...aboutBgStyle,
              backgroundImage: `url(${backgroundImage || getBackground(props)})`,
            }}
            disableTransition={disableTransition}
            onTransitionEnd={onTransitionEnd}
            className={cn(
              direction > 0 ? scaleIn[status] : scaleOut[status],
              fade[status],
              transition[status],
              styles.default,
              getBackgroundStyle(props),
              backgroundClassName,
            )}
          />
        )}
        {withSvg && (
          <BackgroundBlock>
            <Resizer transitionEnd={transitionEnd} {...props} />
          </BackgroundBlock>
        )}
      </>
    );
  }
}
