import React, { PureComponent, Component } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import cn from "classnames";

import { slideLeft, slideRight, transition } from "../PortfolioSlide/styles";
import { JobsCardContainer } from "./styles";
import { Card } from "./Card";
import { fade } from "../Transition/animation";

export class Crutch extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { section } = nextProps;
    const { parentId } = prevState;

    if (!parentId) {
      return {
        parentId: section.id,
      };
    }

    return null;
  }

  state = {
    parentId: null,
  };

  componentDidUpdate(
    { isSwipeEvent: prevIsSwipeEvent, section: prevSection },
    { parentId: prevParentId },
  ) {
    const { isSwipeEvent, section } = this.props;
    const { parentId } = this.state;
    if (isSwipeEvent && parentId && parentId !== prevSection.id) {
      this.setState({ parentId: section.id });
    }
  }

  render() {
    const { parentId } = this.state;
    const { status, direction, card, section, disableTransition } = this.props;
    const animation = direction > 0 ? slideLeft[status] : slideRight[status];

    return (
      <JobsCardContainer
        disableTransition={disableTransition}
        className={cn(animation, fade[status], transition[status])}
      >
        <Card {...section} id={parentId} card={card} />
      </JobsCardContainer>
    );
  }
}

export class TransitionCard extends PureComponent {
  state = {
    disableTransition: true,
  };

  render() {
    const { disableTransition } = this.state;
    const { card, direction } = this.props;

    return (
      <TransitionGroup appear>
        <Transition
          key={`${card.id}-jobs-card-${direction}`}
          timeout={{
            enter: 100,
            exit: 200,
          }}
          onEntered={() => this.setState({ disableTransition: false })}
        >
          {status => {
            return (
              <Crutch
                {...this.props}
                disableTransition={disableTransition}
                status={status}
                card={card}
              />
            );
          }}
        </Transition>
      </TransitionGroup>
    );
  }
}
