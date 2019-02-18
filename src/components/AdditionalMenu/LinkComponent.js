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
    little: PropTypes.bool,
    isPortfolioPage: PropTypes.bool,
  };

  state = {
    isMobile: false,
  };

  componentDidMount() {
    this.onResize();

    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    const vw = window.innerWidth;
    this.setState({ isMobile: vw <= 991 });
  };

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
    const { text, little = false, id, selectedId, onSectionChange, isPortfolioPage } = this.props;

    const isActive = selectedId === id;

    return (
      <Link
        onClick={() =>
          onSectionChange({
            id,
            isClickEvent: !isMobile,
            isSwipeEvent: isMobile && isPortfolioPage,
          })
        }
        little={little}
        isActive={isActive}
        className={cn({ [styles.isActive]: isActive })}
      >
        {text}
      </Link>
    );
  }
}
