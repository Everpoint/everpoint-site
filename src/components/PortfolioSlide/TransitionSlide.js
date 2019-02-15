import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { fade } from "../../styles/transition";
import { BackendComponent } from "../Backend/Backend";
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
    isSwipeEvent: PropTypes.bool,
    up: PropTypes.number,
    down: PropTypes.number,
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
      selectedSectionIndex,
      sections,
      disableTransition,
      sectionDirection,
      status,
      isSwipeEvent,
      up,
      down,
    } = this.props;

    const scrollEvent = !isSwipeEvent;
    const nextSlide = id === nextId;

    const scrollDown = sectionDirection > 0;

    const transitionUp = scrollEvent
      ? scrollDown
        ? {
            entering: { transform: `translateY(${down}px)` },
            exiting: { transform: `translateY(-${down}px)` },
          }
        : {
            entering: { transform: `translateY(-${up}px)` },
            exiting: { transform: `translateY(${up}px)` },
          }
      : {};

    const scrollClassNames = scrollEvent
      ? [
          scrollDown ? slideUpScroll[status] : slideDownScroll[status],
          !nextSlide && fade[status],
          transitionScroll[status],
        ]
      : [];

    return (
      <PortfolioSlideContainer
        style={{ ...transitionUp[status] }}
        className={cn(...scrollClassNames)}
        onClick={goToLongread}
        ref={onContainerRef}
        onMouseOver={() => this.setState({ hovered: true })}
        onMouseOut={() => this.setState({ hovered: false })}
        disableTransition={disableTransition}
      >
        <BackendComponent sections={sections} selectedSectionIndex={selectedSectionIndex} />
        <SliderBackground
          disableTransition={disableTransition}
          hovered={hovered}
          style={{ background: projectBackgroundColor }}
        />
        <Screenshoots
          isNext={nextSlide}
          scrollEvent={scrollEvent}
          status={status}
          disableTransition={disableTransition}
          direction={sectionDirection}
          text={text}
          screenshots={images}
        />
        <Content
          status={status}
          disableTransition={disableTransition || scrollEvent}
          direction={sectionDirection}
          id={id}
          title={title}
          text={text}
          description={description}
        />
      </PortfolioSlideContainer>
    );
  }
}
