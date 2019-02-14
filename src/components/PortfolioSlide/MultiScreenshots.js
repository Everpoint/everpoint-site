import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "astroturf";

import { ImagesDownloadListener } from "../../components/ImagesDownloadListener/ImagesDownloadListener";

const MultiScreenshotsContainer = styled("div")`
  display: flex;
  align-items: center;
  > img {
    position: relative;
    margin-top: 14%;
    height: auto;
    &:nth-child(1) {
      z-index: 3;
      max-height: 54vh;
      max-height: calc(var(--vh, 1vh) * 54);
    }
    &:nth-child(2) {
      transform: translateX(-101%);
      z-index: 2;
      max-height: calc(54vh - 5rem);
      max-height: calc(var(--vh, 1vh) * 54 - 5rem);
    }
    &:nth-child(3) {
      max-height: calc(54vh - 7rem);
      max-height: calc(var(--vh, 1vh) * 54 - 7rem);
      z-index: 1;
      transform: translateX(-217%);
    }
  }
  &.startAnimation,
  &.disableTransition {
    > img {
      transition: transform 500ms cubic-bezier(0.2, 1, 0.6, 1) 0s;
      &:nth-child(2) {
        transform: translateX(-30%);
      }
      &:nth-child(3) {
        transform: translateX(-68%);
      }
    }
  }
  @media (max-width: 1199px) {
    > img {
      &:nth-child(1) {
        max-width: 38%;
      }
      &:nth-child(2) {
        max-width: calc(38% - 2rem);
      }
      &:nth-child(3) {
        max-width: calc(38% - 3rem);
      }
    }
  }
  @media (max-width: 991px) {
    > img {
      margin-top: 7rem;
      &:nth-child(1) {
        max-width: 44%;
      }
      &:nth-child(2) {
        max-width: calc(44% - 2rem);
      }
      &:nth-child(3) {
        max-width: calc(44% - 3rem);
      }
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    margin-top: 4%;
    width: 100%;
    height: 100%;
    flex-direction: row-reverse;
    > img {
      &:nth-child(-n + 3) {
        margin-top: 0;
        width: 100%;
        max-height: none;
        left: 5%;
      }
      &:nth-child(1) {
        max-width: 40%;
      }
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
        transition: transform 500ms cubic-bezier(0.2, 1, 0.6, 1) 0s;
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
    > img {
      &:nth-child(-n + 3) {
        margin-top: 14%;
      }
    }
  }
  @media (max-height: 700px) and (min-width: 1200px) and (orientation: landscape) {
    > img {
      margin-top: 4%;
    }
  }
  &.disableTransition {
    transition: none;
    > img {
      transition: none;
    }
  }
  @media (max-width: 767px) and (max-height: 460px) and (orientation: portrait) {
    > img {
      &:nth-child(-n + 3) {
        margin-top: 34%;
      }
      &:nth-child(1) {
        max-width: 40%;
      }
    }
  }
`;

export class MultiScreenshots extends Component {
  static propTypes = {
    screenshots: PropTypes.arrayOf(PropTypes.string),
  };

  state = {
    imagesIsLoaded: false,
    startAnimation: false,
  };

  render() {
    const { imagesIsLoaded, startAnimation } = this.state;
    const { screenshots } = this.props;

    return (
      <MultiScreenshotsContainer
        {...this.props}
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
