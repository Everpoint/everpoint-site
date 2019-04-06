import React from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

const Container = styled("div")`
  flex-shrink: 0;
  max-width: 8rem;
  max-height: 8rem;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(33, 34, 36, 0.1);
  @media (max-width: 991px) {
    width: 5.7142rem;
    height: 5.7142rem;
  }
  &.vacancyCard {
    background-color: transparent;
  }
`;

const Img = styled("img")`
  width: 100%;
  height: auto;
`;

export const Avatar = ({ source, className, alt }) => {
  return (
    <Container className={className}>
      <Img src={source} alt={alt} />
    </Container>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  source: PropTypes.string,
  className: PropTypes.string,
};
