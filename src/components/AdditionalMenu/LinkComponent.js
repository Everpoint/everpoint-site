import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "../Atoms/Atoms";

export class LinkComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    little: PropTypes.bool,
  };

  state = {
    isMobile: false,
  };

  componentDidMount() {
    const vw = window.innerWidth;
    this.setState({ isMobile: vw <= 991 });
  }

  shouldComponentUpdate({ selectedId: nextSelectedId }, { isMobile: nextIsMobile }) {
    const { isMobile } = this.state;
    const { selectedId, id } = this.props;

    return (
      (selectedId !== nextSelectedId && (nextSelectedId === id || selectedId === id)) ||
      nextIsMobile !== isMobile
    );
  }

  render() {
    const { isMobile } = this.state;
    const { text, little = false, id, selectedId, onSectionChange } = this.props;

    return (
      <Link
        onClick={() => onSectionChange({ id, isClickEvent: !isMobile, isSwipeEvent: isMobile })}
        little={little}
        isActive={selectedId === id}
      >
        {text}
      </Link>
    );
  }
}
