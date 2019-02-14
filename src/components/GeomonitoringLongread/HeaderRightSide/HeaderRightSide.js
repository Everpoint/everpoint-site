import React from "react";
import PropTypes from "prop-types";

import styles from "../../../styles/helpers";

import { LayersBlock, CardsBlock } from "./styles";

export const HeaderRightSide = ({ images, animate }) => {
  return (
    <>
      <LayersBlock animate={animate}>
        <img src={images[0]} alt="hidden-img" className={styles.hidden} />
        <img src={images[0]} alt="layer1" />
        <img src={images[1]} alt="layer2" />
      </LayersBlock>
      <CardsBlock animate={animate}>
        <img src={images[2]} alt="card-left" />
        <img src={images[3]} alt="card-right" />
        <img src={images[4]} alt="card-botom" />
      </CardsBlock>
    </>
  );
};

HeaderRightSide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  animate: PropTypes.bool,
};
