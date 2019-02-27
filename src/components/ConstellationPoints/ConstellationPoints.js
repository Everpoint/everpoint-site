import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ConstellationPointsContainer, TransformContainer, Point, FakePoint } from "./styles";
import { fade, transition } from "../Transition/animation";

export class ConstellationPoints extends PureComponent {
  static propTypes = {
    selectedSectionIndex: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    status: PropTypes.string,
    transitionEnd: PropTypes.bool,
    onSectionChange: PropTypes.func,
    isMobile: PropTypes.bool,
    onFakePointRef: PropTypes.func,
    savePointsRef: PropTypes.func,
  };

  render() {
    const {
      x,
      y,
      selectedSectionIndex,
      pointsAmount,
      status,
      onSectionChange,
      isMobile,
      onFakePointRef,
      savePointsRef,
    } = this.props;

    return (
      <ConstellationPointsContainer className={cn(fade[status], transition[status])}>
        <FakePoint ref={onFakePointRef} />
        <TransformContainer style={{ transform: `translate(${x}px, ${y}px)` }}>
          {Array.from({ length: pointsAmount }, (_, index) => (
            <Point
              onMouseUp={!isMobile ? () => onSectionChange({ index }) : void 0}
              onTouchEnd={!isMobile ? () => onSectionChange({ index, isSwipeEvent: true }) : void 0}
              ref={savePointsRef}
              key={`point-${index}`}
              isActive={index === selectedSectionIndex}
            />
          ))}
        </TransformContainer>
      </ConstellationPointsContainer>
    );
  }
}
