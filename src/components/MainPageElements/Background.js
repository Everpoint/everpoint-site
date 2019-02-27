import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "astroturf";
import isEqual from "lodash/isEqual";
import cn from "classnames";

import withProvider from "../../hoc/withProvider";
import withRouter from "../../hoc/withRouter";
import { fade, scaleIn, scaleOut, transition } from "../Transition/animation";
import russia from "../../assets/img/main-slides/russia.svg";
import moscow from "../../assets/img/main-slides/moscow.svg";
import bus from "../../assets/img/main-slides/bus.svg";
import earth from "../../assets/img/main-slides/earth.svg";
import metro from "../../assets/img/main-slides/metro.svg";

export const backgrounds = [russia, moscow, bus, earth, metro];

export const getBackground = ({ isPortfolioPage, isAboutPage, isJobsPage }) => {
  if (isPortfolioPage() || isAboutPage()) return backgrounds[0];
  else if (isJobsPage()) return backgrounds[1];
  else return backgrounds[3];
};

export const BackgroundBlock = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  will-change: transform, opacity;
`;

export class BackgroundBase extends Component {
  shouldComponentUpdate(
    {
      status: nextStatus,
      backgroundImage: nextBackgroundImage,
      style: nextStyle,
      direction: nextDirection,
    },
    nextState,
  ) {
    const { status, backgroundImage, style, direction } = this.props;

    return (
      status !== nextStatus ||
      backgroundImage !== nextBackgroundImage ||
      !isEqual(style, nextStyle) ||
      direction !== nextDirection
    );
  }

  render() {
    const { status, direction, className, style, backgroundImage, ...props } = this.props;

    return (
      <BackgroundBlock
        style={{
          backgroundImage: `url(${backgroundImage || getBackground(props)})`,
          ...style,
        }}
        className={cn(
          direction > 0 ? scaleIn[status] : scaleOut[status],
          fade[status],
          transition[status],
          className,
        )}
      />
    );
  }
}

export const Background = withRouter(withProvider(BackgroundBase));

Background.propTypes = {
  direction: PropTypes.number,
  status: PropTypes.string,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
};
