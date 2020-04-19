import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { fade } from "../../styles/transition";
import {
  PortfolioSlideContainer,
  SliderBackground,
  transitionScroll,
  slideUpScroll,
  slideDownScroll,
} from "./styles";
import { Screenshoots } from "./Screenshoots";
import { Content } from "./Content";

export class TransitionSlide extends Component {
  static propTypes = {
    goToLongread: PropTypes.func,
    onContainerRef: PropTypes.func,
    selectedSectionIndex: PropTypes.number,
    sections: PropTypes.arrayOf(PropTypes.object),
    up: PropTypes.number,
    down: PropTypes.number,
    transitionEnd: PropTypes.bool,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { description, id, title, text, images, projectBackgroundColor } = nextProps;
    const { flag } = prevState;

    if (!flag) {
      return {
        flag: true,
        projectBackgroundColor,
        images,
        id,
        description,
        title,
        text,
      };
    }

    return null;
  }

  state = {
    flag: false,
    hovered: false,
  };

  render() {
    const { id, description, title, text, images, projectBackgroundColor, hovered } = this.state;
    const {
      id: nextId,
      goToLongread,
      onContainerRef,
      sectionDirection,
      status,
      up,
      down,
      transitionEnd,
      onResize,
      onExited,
    } = this.props;

    const nextSlide = id === nextId;

    const scrollDown = sectionDirection > 0;

    const transitionUp = scrollDown
      ? {
          entering: { transform: `translateY(${down}px)` },
          exiting: { transform: `translateY(-${down}px)` },
        }
      : {
          entering: { transform: `translateY(-${up}px)` },
          exiting: { transform: `translateY(${up}px)` },
        };

    const scrollClassNames = [
      scrollDown ? slideUpScroll[status] : slideDownScroll[status],
      !nextSlide && fade[status],
      transitionScroll[status],
    ];

    return (
      <PortfolioSlideContainer
        style={{
          ...transitionUp[status],
        }}
        className={cn(...scrollClassNames)}
        willChange={transitionEnd}
        onClick={goToLongread}
        ref={onContainerRef}
        onMouseOver={() => this.setState({ hovered: true })}
        onFocus={() => this.setState({ hovered: true })}
        onMouseOut={() => this.setState({ hovered: false })}
        onBlur={() => this.setState({ hovered: false })}
        onTransitionEnd={(e) => {
          if (e.propertyName === "transform" && e.elapsedTime >= 0.4) {
            onResize();
            onExited();
          }
        }}
      >
        <SliderBackground
          hovered={hovered}
          style={{
            background: projectBackgroundColor,
          }}
        />
        <Screenshoots
          id={id}
          isNext={nextSlide}
          status={status}
          direction={sectionDirection}
          text={text}
          screenshots={images}
        />
        <Content
          status={status}
          direction={sectionDirection}
          title={title}
          text={text}
          description={description}
        />
      </PortfolioSlideContainer>
    );
  }
}
