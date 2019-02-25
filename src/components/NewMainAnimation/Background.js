import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "astroturf";
import cn from "classnames";

import withProvider from "../../hoc/withProvider";
import withRouter from "../../hoc/withRouter";
import { fade, scaleIn, scaleOut, transition } from "../Transition/animation";
import styles from "../Background/styles";
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
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export class BackgroundBase extends Component {
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
          styles.default,
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
