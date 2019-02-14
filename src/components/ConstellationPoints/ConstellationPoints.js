import React, { PureComponent } from "react";
import debounce from "lodash/debounce";
import PropTypes from "prop-types";

import { ConstellationPointsContainer, TransformContainer, Point, FakePoint } from "./styles";
import cn from "classnames";
import { fade, transition } from "../Transition/animation";

export class ConstellationPoints extends PureComponent {
  static propTypes = {
    selectedSectionIndex: PropTypes.number,
    onTransform: PropTypes.func,
    x: PropTypes.number,
    y: PropTypes.number,
    status: PropTypes.string,
    transitionEnd: PropTypes.bool,
    disableTransition: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.debouncedTransform = debounce(this.transform, 200);
  }

  static defaultProps = {
    pointsAmount: 5,
    x: 0,
    y: 0,
  };

  points = [];
  fakePoint = null;

  componentDidMount() {
    window.addEventListener("resize", this.debouncedTransform);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debouncedTransform);
  }

  componentDidUpdate({ selectedSectionIndex: prevSelectedSectionIndex }, prevState) {
    const { selectedSectionIndex, transitionEnd } = this.props;

    if (
      selectedSectionIndex !== prevSelectedSectionIndex &&
      this.points[selectedSectionIndex] &&
      this.fakePoint &&
      transitionEnd
    ) {
      this.transform();
    }
  }

  transform = () => {
    const { selectedSectionIndex, onTransform, x, y } = this.props;
    const { left: fakeLeft, top: fakeTop } = this.fakePoint.getBoundingClientRect();
    const { left, top } = this.points[selectedSectionIndex].getBoundingClientRect();

    onTransform && onTransform({ x: fakeLeft - left + x, y: fakeTop - top + y });
  };

  savePointsRef = ref => {
    const { pointsAmount } = this.props;

    if (ref && this.points.length !== pointsAmount) {
      this.points.push(ref);
    }
  };

  onFakePointRef = ref => {
    if (ref) {
      this.fakePoint = ref;
    }
  };

  render() {
    const { selectedSectionIndex, pointsAmount, x, y, status, disableTransition } = this.props;

    return (
      <ConstellationPointsContainer
        disableTransition={disableTransition}
        className={cn(fade[status], transition[status])}
      >
        <FakePoint ref={this.onFakePointRef} />
        <TransformContainer style={{ transform: `translate(${x}px, ${y}px)` }}>
          {Array.from({ length: pointsAmount }, (_, index) => (
            <Point
              ref={this.savePointsRef}
              key={`point-${index}`}
              isActive={index === selectedSectionIndex}
            />
          ))}
        </TransformContainer>
      </ConstellationPointsContainer>
    );
  }
}
