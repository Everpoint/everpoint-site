import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "../../../styles/helpers";
import { LayersBlock } from "./styles";

export class HeaderRightSide extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    animate: PropTypes.bool,
  };

  state = {
    transitionEnd: false,
  }

  onTransitionEnd = () => this.setState({ transitionEnd: true });

  render() {
    const { transitionEnd } = this.state;
    const { images, animate } = this.props;

    return (
      <LayersBlock animate={animate} slide={transitionEnd}>
        <img src={images[0]} alt="hidden-img" className={styles.hidden} />
        <img src={images[0]} alt="screenshot" />
        <img src={images[1]} alt="left-card-1" />
        <img src={images[2]} alt="left-card-2" />
        <img src={images[3]} alt="left-card-3" />
        <img src={images[4]} alt="left-card-4" />
        <img src={images[5]} alt="left-card-5" onTransitionEnd={this.onTransitionEnd} />
        <img src={images[6]} alt="right-card-1" />
        <img src={images[7]} alt="point" />
      </LayersBlock>
    );
  }
}
