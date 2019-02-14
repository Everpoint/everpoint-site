import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { isElementInViewport, fillElementsInViewport } from "../../../utils/dom";
import { ScrollbarConsumer } from "../../ScrollbarProvider/ScrollbarProvider";
import styles, { IconsParallaxContainer } from "./styles";

class IconsParallaxBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
    className: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.func),
  };

  static defaultProps = {
    icons: [],
    fill: false,
  };

  state = {
    animationOver: false,
    iconIndex: null,
  };

  shouldComponentUpdate(nextProps, { animationOver }) {
    if (this.container) {
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight || 0;
      const { top } = this.container.getBoundingClientRect();

      const inViewport = top - viewportHeight <= 0;
      return inViewport && !animationOver;
    }
  }

  componentDidUpdate({ scrollTop: prevScrollTop }, { iconIndex: prevIconIndex }) {
    const { scrollTop, fill } = this.props;

    if (prevScrollTop !== scrollTop && this.container) {
      const children = this.container.children;
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight || 0;
      const { bottom } = this.container.getBoundingClientRect();
      const animationOver = bottom - viewportHeight <= 0;

      let index = null;

      if (fill) {
        index = fillElementsInViewport({
          containerElement: this.container,
          items: children.length,
          viewportHeight,
          inViewportOff: true,
        });
      } else {
        for (let i = 0; i < children.length; i++) {
          if (isElementInViewport({ el: children[i] })) {
            index = i;
          }
        }
      }

      if (prevIconIndex !== index) {
        requestAnimationFrame(() => {
          this.setState({ iconIndex: index });
        });
      }

      if (animationOver) {
        this.setState({ animationOver });
      }
    }
  }

  onRefContainer = ref => {
    if (ref) {
      this.container = ref;
    }
  };

  render() {
    const { iconIndex } = this.state;
    const { className, icons } = this.props;

    return (
      <IconsParallaxContainer ref={this.onRefContainer} className={className}>
        {icons.map((Icon, index) => (
          <Icon
            style={{ transitionDelay: `${44 * index}ms` }}
            key={`bn-icon-${index}`}
            className={cn({ [styles.isVisible]: index <= iconIndex })}
          />
        ))}
      </IconsParallaxContainer>
    );
  }
}

export const IconsParallax = props => (
  <ScrollbarConsumer>
    {({ scrollTop }) => <IconsParallaxBase scrollTop={scrollTop} {...props} />}
  </ScrollbarConsumer>
);
