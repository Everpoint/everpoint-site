import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ConstellationPointsContainer, TransformContainer, Point } from "./styles";
import { fade, transition } from "../Transition/animation";

export class ConstellationPoints extends PureComponent {
  static propTypes = {
    selectedSectionIndex: PropTypes.number,
    status: PropTypes.string,
    transitionEnd: PropTypes.bool,
    onSectionChange: PropTypes.func,
    isMobile: PropTypes.bool,
  };

  render() {
    const { selectedSectionIndex, pointsAmount, status, onSectionChange, isMobile } = this.props;

    return (
      <ConstellationPointsContainer
        isVisible={status === "entered"}
        className={cn(fade[status], transition[status])}
      >
        <TransformContainer>
          {Array.from({ length: pointsAmount }, (_, index) => (
            <Point
              onMouseUp={!isMobile ? () => onSectionChange({ index }) : void 0}
              onTouchEnd={!isMobile ? () => onSectionChange({ index }) : void 0}
              key={`point-${index}`}
              isActive={index === selectedSectionIndex}
            />
          ))}
        </TransformContainer>
      </ConstellationPointsContainer>
    );
  }
}
