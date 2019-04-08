import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "astroturf";
import cn from "classnames";

import { Link } from "../Atoms/Atoms";

const styles = css`
  .isActive {
    font-weight: 600;
  }
`;

export class LinkComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    isPortfolioPage: PropTypes.bool,
    leftSide: PropTypes.bool,
  };

  render() {
    const { text, id, selectedId, onSectionChange, leftSide } = this.props;

    const isActive = selectedId === id;

    return (
      <Link
        onClick={() =>
          onSectionChange({
            scrollToBlock: true,
            id,
          })
        }
        isActive={isActive}
        className={cn({ [styles.isActive]: isActive && leftSide })}
      >
        {text}
      </Link>
    );
  }
}
