import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "../../../styles/helpers";

import { LayersBlock, CardsBlock, LeftCol, RightCol } from "./styles";

export class MspRightSide extends PureComponent {
  static propTypes = {
    animate: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    const { images, animate } = this.props;

    return (
      <>
        <LayersBlock animate={animate}>
          <img src={images[0]} alt="hidden-img" className={styles.hidden} />
          <img src={images[0]} alt="layer1" />
          <img src={images[1]} alt="layer2" />
          <img src={images[2]} alt="layer3" />
        </LayersBlock>
        <CardsBlock>
          <LeftCol animate={animate}>
            <img src={images[3]} alt="card-left-1" />
            <img src={images[4]} alt="card-left-2" />
            <img src={images[5]} alt="card-left-3" />
            <img src={images[6]} alt="card-left-4" />
          </LeftCol>
          <RightCol animate={animate}>
            <img src={images[7]} alt="card-right-1" />
            <img src={images[8]} alt="card-right-2" />
            <img src={images[9]} alt="card-right-3" />
            <img src={images[10]} alt="card-right-4" />
          </RightCol>
        </CardsBlock>
      </>
    );
  }
}
