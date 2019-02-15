import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { GoNextLink } from "../../components/GoNextLink/GoNextLink";
import styles, { Content as ContentBlock, Description, Title } from "./styles";

import { transition, slideDown, slideUp, fade } from "../../styles/transition";

export class Content extends Component {
  static propTypes = {
    text: PropTypes.string,
    description: PropTypes.string,
    direction: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
  };

  render() {
    const { status, direction, disableTransition, id, description, title, text } = this.props;
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
