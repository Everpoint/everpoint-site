import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";

const MultiScreenshotsContainer = styled("div")`
  display: flex;
  align-items: center;
  z-index: 44;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 2rem 0 0 -2rem;
  > img {
    position: relative;
    max-height: 100%;
    &:nth-child(1) {
      z-index: 3;
    }
    &:nth-child(2) {
      transform: translateX(-91%);
      z-index: 2;
      max-height: 90%;
    }
    &:nth-child(3) {
      z-index: 1;
      transform: translateX(-171%);
      max-height: 80%;
    }
  }
  &.startAnimation,
  &.disableTransition,
  &.scrollEvent {
    > img {
      transition: transform 500ms ease;
      &:nth-child(2) {
        transform: translateX(-18%);
      }
      &:nth-child(3) {
        transform: translateX(-52%);
      }
    }
  }
  @media (min-width: 1200px) and (orientation: landscape) {
    margin: 1rem 0 0 -2rem;
  }
  @media (max-width: 812px) and (orientation: landscape) {
    width: 100%;
    height: 100%;
    flex-direction: row-reverse;
    margin: 0;
    > img {
      &:nth-child(2) {
        transform: translateX(101%);
      }
      &:nth-child(3) {
        transform: translateX(217%);
      }
    }
    &.startAnimation,
    &.disableTransition {
      > img {
        transition: transform 500ms ease;
        &:nth-child(1) {
          transform: translateX(0);
        }
        &:nth-child(2) {
          transform: translateX(30%);
        }
        &:nth-child(3) {
          transform: translateX(64%);
        }
      }
    }
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin: 3rem 0 0 -0.7rem;
  }

  &.disableTransition {
    transition: none;
    > img {
      transition: none;
    }
  }
`;

export class MultiScreenshots extends Component {
  static propTypes = {
    screenshots: PropTypes.arrayOf(PropTypes.string),
    scrollEvent: PropTypes.bool,
  };

  state = {
    imagesIsLoaded: false,
    startAnimation: false,
  };

  render() {
    const { imagesIsLoaded, startAnimation } = this.state;
    const { screenshots, scrollEvent } = this.props;

    return (
      <MultiScreenshotsContainer
        {...this.props}
        scrollEvent={scrollEvent}
        startAnimation={startAnimation}
        onTransitionEnd={() => this.setState({ startAnimation: true })}
      >
        <ImagesDownloadListener
          images={screenshots}
          onLoad={() => this.setState({ imagesIsLoaded: true })}
        />
        {imagesIsLoaded &&
          screenshots.map((img, index) => (
            <img key={`img-${index}`} src={img} alt={`img-${index}`} />
          ))}
      </MultiScreenshotsContainer>
    );
  }
}
