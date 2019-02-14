import React from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

import { H3 } from "../../components/Typography/Headlines";

const Image = styled("img")`
  margin: 1.4rem 0 2.8rem 0;
  box-shadow: 0 2.2857rem 2.2857rem 0 rgba(10, 18, 33, 0.15);
  @media (max-width: 1199px) {
    max-width: none;
    margin: 0 0 4.4rem -4.5714rem;
    width: calc(100% + 4.5714rem * 2);
  }
  @media (max-width: 991px) {
    max-width: 100%;
    width: 100%;
    margin: 0 0 1.5rem 0;
    box-shadow: 0 1.7142rem 1.7142rem 0 rgba(10, 18, 33, 0.15);
  }
  @media (max-width: 812px) and (orientation: landscape) {
    width: auto;
    margin: 0 0 1.2rem 0;
    box-shadow: 0 1.1428rem 1.1428rem 0 rgba(10, 18, 33, 0.15);
  }
  @media (max-width: 767px) and (orientation: portrait) {
    max-width: none;
    box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.15);
    width: 100vw;
    margin: 0 0 0.9rem -1.4285rem;
  }
  @media (max-height: 700px) and (orientation: landscape) {
    margin-top: 0;
    max-height: calc(100vh - 12rem);
    max-height: calc(var(--vh, 1vh) * 100 - 12rem);
  }
  @media (max-height: 320px) and (orientation: landscape) {
    max-height: calc(100vh - 8rem);
    max-height: calc(var(--vh, 1vh) * 100 - 8rem);
  }
  &.doubleBoxShadow {
    box-shadow: 0 2.2857rem 2.2857rem 0 rgba(10, 18, 33, 0.15),
      0 0 0.2857rem 0 rgba(10, 18, 33, 0.1);
    @media (max-width: 991px) {
      box-shadow: 0 1.7142rem 1.7142rem 0 rgba(10, 18, 33, 0.15),
        0 0 0.2857rem 0 rgba(10, 18, 33, 0.1);
    }
    @media (max-width: 812px) and (orientation: landscape) {
      box-shadow: 0 1.1428rem 1.1428rem 0 rgba(10, 18, 33, 0.15),
        0 0 0.2857rem 0 rgba(10, 18, 33, 0.1);
    }
    @media (max-width: 767px) and (orientation: portrait) {
      box-shadow: 0 0.5714rem 0.5714rem 0 rgba(10, 18, 33, 0.15),
        0 0 0.2857rem 0 rgba(10, 18, 33, 0.1);
    }
  }
`;

export const ImageWithTitle = ({ title, doubleBoxShadow, ...props }) => {
  return (
    <>
      {title && <H3>{title}</H3>}
      <Image alt={title} doubleBoxShadow={doubleBoxShadow} {...props} />
    </>
  );
};

ImageWithTitle.propTypes = {
  title: PropTypes.string,
  doubleBoxShadow: PropTypes.bool,
};
