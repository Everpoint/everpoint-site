import React, { PureComponent, Component } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import cn from "classnames";

import { slideLeft, slideRight, transition } from "../../styles/transition";
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

  render() {
    const { parentId } = this.state;
    const { status, direction, card, section } = this.props;
    const animation = direction > 0 ? slideLeft[status] : slideRight[status];

    return (
      <JobsCardContainer
        className={cn(animation, fade[status], transition[status])}
      >
        <Card {...section} id={parentId} card={card} />
      </JobsCardContainer>
    );
  }
}

export class TransitionCard extends PureComponent {
  render() {
    const { card, direction } = this.props;

    return (
      <TransitionGroup>
        <Transition
          key={`${card.id}-jobs-card-${direction}`}
          timeout={{
            enter: 0,
            exit: 200,
          }}
        >
          {status => {
            return (
              <Crutch
                {...this.props}
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
