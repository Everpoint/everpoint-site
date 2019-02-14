import React from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

const Container = styled("div")`
  flex-shrink: 0;
  max-width: 6.8571rem;
  max-height: 6.8571rem;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(33, 34, 36, 0.1);
  @media (max-height: 300px) {
    max-width: 6rem;
    max-height: 6rem;
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
