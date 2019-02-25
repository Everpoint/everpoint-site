import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import { Content as ContentBlock, Description, Title } from "./styles";

import { transition, slideDown, slideUp, fade } from "../../styles/transition";

export class Content extends Component {
  static propTypes = {
    text: PropTypes.string,
    description: PropTypes.string,
    direction: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.string,
  };

  render() {
    const { status, direction, description, title, text } = this.props;

    return (
      <ContentBlock
        className={cn(
          direction > 0 ? slideUp[status] : slideDown[status],
          fade[status],
          transition[status],
        )}
      >
        <Title as="h2">{title || text}</Title>
        <Description>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi iusto labore nisi quas."}
        </Description>
        <GoNextLink white>Подробнее</GoNextLink>
      </ContentBlock>
    );
  }
}
