import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "../Atoms/Atoms";

export class LinkComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    little: PropTypes.bool,
  };

  shouldComponentUpdate({ selectedId: nextSelectedId }, nextState) {
    const { selectedId, id } = this.props;

    return selectedId !== nextSelectedId && (nextSelectedId === id || selectedId === id);
  }

  render() {
    const { text, little = false, id, selectedId, onSectionChange } = this.props;

    return (
      <Link
        onClick={() => onSectionChange({ id, isClickEvent: true })}
        little={little}
        isActive={selectedId === id}
      >
        {text}
      </Link>
    );
  }
}
