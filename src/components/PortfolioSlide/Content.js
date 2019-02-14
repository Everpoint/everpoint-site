import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Transition, TransitionGroup } from "react-transition-group";
import cn from "classnames";

import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import styles, { Content as ContentBlock, Description, slideDown, slideUp, Title } from "./styles";
import { fade } from "../Transition/animation";

import { transition } from "./styles";

export class Crutch extends PureComponent {
  render() {
    const { status, direction, description, title, text, id, disableTransition } = this.props;

    const isMobileMsp = id === "mobileMsp";

    const color = isMobileMsp ? "#0a2342" : "#fff";

    return (
      <ContentBlock
        disableTransition={disableTransition}
        className={cn(
          direction > 0 ? slideUp[status] : slideDown[status],
          fade[status],
          transition[status],
        )}
      >
        <Title as="h2" style={{ color }}>
          {title || text}
        </Title>
        <Description style={{ color }}>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi iusto labore nisi quas."}
        </Description>
        <GoNextLink className={cn(isMobileMsp ? styles.mobileMsp : styles.white)}>
          Подробнее
        </GoNextLink>
      </ContentBlock>
    );
  }
}

export class Content extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    description: PropTypes.string,
    direction: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
  };

  render() {
    const { text, description, title, id } = this.props;

    return (
      <TransitionGroup appear>
        <Transition
          key={`${id}-content`}
          timeout={{
            enter: 100,
            exit: 200,
          }}
        >
          {status => (
            <Crutch
              {...this.props}
              status={status}
              text={text}
              title={title}
              description={description}
            />
          )}
        </Transition>
      </TransitionGroup>
    );
  }
}
