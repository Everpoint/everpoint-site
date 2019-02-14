import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styled, { css } from "astroturf";
import { Link as GatsbyLink } from "gatsby";

import { ReactComponent as ArrowNext } from "../../assets/img/icons/arrow-next-more.svg";

const NativeLink = styled("a")`
  transition: color 200ms ease-in;
`;

const styles = css`
  .goNextLink {
    display: inline-block;
    line-height: normal;
    text-decoration: none;
    cursor: pointer;
    color: #90c53d;
    font-weight: 600;
    white-space: nowrap;
    transition: color 200ms linear;
    > svg {
      transition: fill 200ms linear;
      margin-left: 0.7142rem;
      fill: #90c53d;
      width: 0.85714rem;
    }
    @media (hover: hover) {
      &:hover {
        color: #749e31;
        svg {
          fill: #749e31;
        }
      }
    }
    @media (max-width: 991px) {
      font-size: 0.9285rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 0.7857rem;
      svg {
        width: 0.71428rem;
      }
    }
  }
  .big {
    font-size: 1.2857rem;
    @media (max-width: 991px) {
      font-size: 1.2142rem;
    }
    @media (max-width: 812px) and (orientation: landscape),
      (max-width: 767px) and (orientation: portrait) {
      font-size: 1.0714rem;
    }
  }
`;

export const GoNextLink = ({
  children,
  withArrow = true,
  gatsby = false,
  className,
  big = false,
  ...props
}) => {
  const Container = gatsby ? GatsbyLink : NativeLink;

  return (
    <Container className={cn(className, styles.goNextLink, { [styles.big]: big })} {...props}>
      {children}
      {withArrow && <ArrowNext />}
    </Container>
  );
};

GoNextLink.propTypes = {
  withArrow: PropTypes.bool,
  gatsby: PropTypes.bool,
  className: PropTypes.string,
};
