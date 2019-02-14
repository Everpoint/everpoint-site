import React from "react";
import styled from "astroturf";
import PropTypes from "prop-types";

const Link = styled("a")`
  cursor: pointer;
  color: #387bc7;
  text-decoration: none;
  transition: color 200ms linear;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const getUrl = value => {
  if (!value) {
    return;
  }

  const isHttp = value.toString().indexOf("http") === 0;
  const isWww = value.toString().indexOf("www") === 0;

  return isWww || isHttp ? value : `https://${value}`;
};

export const OutsideLink = ({ href, children, ...props }) => (
  <Link href={getUrl(href)} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </Link>
);

OutsideLink.propTypes = {
  href: PropTypes.string,
};
